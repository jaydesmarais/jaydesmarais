import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { BsFillSendFill, BsFillSendCheckFill } from 'react-icons/bs'
import { PrimaryButton } from 'components/Buttons'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import validator from 'validator';

const StyledContainer = styled.div`
  position: relative;
  padding-top: 7vh;
  padding-bottom: 3vh;
`

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
  margin: 1em 1vw;
  padding: 1em 2vw;
`

const StyledTextArea = styled.textarea`
  font-size: medium;
  color: white;
  flex: auto;
  border: 2px solid white;
  border-radius: 10px;
  background-color: black;
  margin: 1em 1vw;
  padding: 1em 2vw;
  height: 200px;
`

const StyledCaptcha = styled.div`
  font-size: small;
  text-align: center;
  color: white;
  flex: auto;
  margin: 0 1vw;
`

const Status = {
  Unsubmitted: 0,
  Sending: 1,
  Complete: 2
}

const Contact = () => {
  const [status, setStatus] = useState(Status.Unsubmitted)
  const [warning, setWarning] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const captchaRef = useRef(null)

  const validateInput = () => {
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

  useEffect(() => {
    if (name && email && subject && message) {
      setWarning("")
    }
  }, [name, email, subject, message])

  return (
    <StyledContainer id="contact" >
      <h1>Contact</h1>
      <br />
      <p>
        I am currently seeking new opportunities! If you have a project in need of collaboration, are growing your team, or simply want to chat, please don't hesitate to get in touch. I'm open and eager to connect!
      </p>
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
    </StyledContainer >
  )
}

export default Contact