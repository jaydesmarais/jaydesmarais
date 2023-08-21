import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { BsFillSendFill, BsFillSendCheckFill } from 'react-icons/bs'
import { PrimaryButton } from 'components/Buttons'
import { Section, SectionContainer, SectionHeader, SectionText } from 'components/Section'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import validator from 'validator';

const StyledFormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const StyledWarning = styled.div`
  padding: 1vh 2vw;
  text-align: center;
  border-radius: 10px;
  color: red;
  height: 2vh;
`

const StyledInput = styled.input`
  font-size: medium;
  color: white;
  flex: auto;
  border: 2px solid white;
  border-radius: 10px;
  background-color: black;
  margin: .5em 1vw;
  padding: .5em 2vw;
`

const StyledTextArea = styled.textarea`
  font-size: medium;
  color: white;
  flex: auto;
  border: 2px solid white;
  border-radius: 10px;
  background-color: black;
  margin: .5em 1vw;
  padding: .5em 2vw;
  height: 200px;
`

const StyledCaptcha = styled.div`
  font-size: small;
  text-align: center;
  color: white;
  flex: auto;
  margin: 0 1vw;
`

// Form submission status enum
const Status = {
  Unsubmitted: 0,
  Sending: 1,
  Complete: 2
}

// Contact form for home page
const Contact = () => {
  const [status, setStatus] = useState(Status.Unsubmitted)
  const [warning, setWarning] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const captchaRef = useRef(null)

  const validateInput = () => {
    // Verify all input is valid in some shape or form and set a warning accordingly if invalid
    if (name && email && subject && message) {
      if (name.length < 2) {
        setWarning('Please make sure you enter your full name so I know who is reaching out!')
        return false;
      } else if (subject.length < 2) {
        setWarning('Please make sure you enter a good subject so I know why you\'re reaching out! :)')
        return false;
      } else if (message.length < 10) {
        setWarning('Please add more to your message so I can better respond to any messages! :)')
        return false;
      } else if (!validator.isEmail(email)) {
        setWarning('Please make sure to enter a valid email so I can respond to you!')
        return false;
      }

      return true;
    } else {
      setWarning('Please make sure all fields are filled out!')
    }

    return false;
  }

  /*
    Handles submission of contact form (async)
    
    Props: None
    Side Effects:
      - Sets warning based on status of submission and input fields
      - Checks captcha for human-ness
      - Sends message and params to emailjs to fulfill template-specific request
      - Updates contact form submission status accordingly
  */
  const handleSubmit = async () => {
    if (status === Status.Unsubmitted) {
      if (validateInput()) {
        setWarning("")
        setStatus(Status.Sending)

        const token = await captchaRef.current.executeAsync();

        const templateParams = {
          name: name,
          email: email,
          subject: subject,
          message: message,
          'g-recaptcha-response': token,
        }

        emailjs.send('service_cz5t2g3', 'template_dxcu7bm', templateParams, process.env.REACT_APP_EMAILJS_PUB_KEY)
          .then((result) => {
            setStatus(Status.Complete)
            captchaRef.current.reset();
            setEmail('')
            setName('')
            setSubject('')
            setMessage('')
          }, (error) => {
            setStatus(Status.Unsubmitted)
            setWarning("There was an error sending your message. Please try again.")
          });
      }
    }
  }

  // Content of submit button based on submission status
  const submitButtonContent = () => {
    switch (status) {
      case Status.Unsubmitted:
        return <>
          Send Message &nbsp;
          <BsFillSendFill size={20} />
        </>;
      case Status.Sending:
        return <>
          Sending... &nbsp;
          <BsFillSendFill size={20} />
        </>;
      case Status.Complete:
        return <>
          Message Sent! &nbsp;
          <BsFillSendCheckFill size={20} />
        </>;
      default:
        return 'Submit';
    }
  }

  // Clears form warning on form completion
  useEffect(() => {
    if (name && email && subject && message) {
      setWarning("")
    }
  }, [name, email, subject, message])

  return (
    <Section className='contact'>
      <SectionContainer>
        <SectionHeader>Contact</SectionHeader>
        <br />
        <SectionText>
          I am currently seeking new opportunities! If you have a project in need of collaboration, are growing your team, or simply want to chat, please don't hesitate to get in touch. I'm open and eager to connect!
        </SectionText>
        <StyledFormRow>
          <StyledInput name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <StyledInput name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <StyledInput name='subject' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
        </StyledFormRow>
        <StyledFormRow>
          <StyledTextArea name='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
        </StyledFormRow>
        <StyledFormRow>
          <PrimaryButton type="button" status={status} onClick={() => handleSubmit()}>
            {submitButtonContent()}
          </PrimaryButton>
        </StyledFormRow>
        <StyledCaptcha>
          <ReCAPTCHA style={{ visibility: 'hidden' }} sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} ref={captchaRef} badge="bottomright" size="invisible" theme="dark" />
          This site is protected by reCAPTCHA and the Google &nbsp;
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and &nbsp;
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </StyledCaptcha>
        <StyledWarning>
          {warning &&
            <>{warning}</>
          }
        </StyledWarning>
      </SectionContainer>
    </Section >
  )
}

export default Contact