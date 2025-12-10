import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsFillSendFill, BsFillSendCheckFill } from 'react-icons/bs'
import { Button } from 'components/Buttons'
import { SectionHeader, SectionText } from 'components/Section'
import validator from 'validator'

const StyledFormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const StyledWarning = styled.div`
  padding: 1vh 2vw;
  text-align: center;
  color: red;
  height: 2vh;
`

const StyledInput = styled.input`
  font-size: large;
  color: white;
  flex: auto;
  border: 1px solid white;
  border-radius: 10px;
  background-color: black;
  margin: .5em 1vw;
  padding: .5em 2vw;
`

const StyledTextArea = styled.textarea`
  font-size: large;
  color: white;
  flex: auto;
  border: 1px solid white;
  border-radius: 10px;
  background-color: black;
  margin: .5em 1vw;
  padding: .5em 2vw;
  height: 200px;
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

  const validateInput = () => {
    if (!name || !email || !subject || !message) {
      setWarning('Please make sure all fields are filled out!')
      return false
    }
    if (name.length < 2) {
      setWarning('Please make sure you enter your full name so I know who is reaching out!')
      return false
    }
    if (subject.length < 2) {
      setWarning('Please make sure you enter a good subject so I know why you\'re reaching out! :)')
      return false
    }
    if (message.length < 10) {
      setWarning('Please add more to your message so I can better respond to any messages! :)')
      return false
    }
    if (!validator.isEmail(email)) {
      setWarning('Please make sure to enter a valid email so I can respond to you!')
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (status !== Status.Unsubmitted) return

    if (!validateInput()) return

    setWarning('')
    setStatus(Status.Sending)

    try {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })

      if (response.ok) {
        setStatus(Status.Complete)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus(Status.Unsubmitted)
      setWarning('There was an error sending your message. Please try again.')
    }
  }

  // Content of submit button based on submission status
  const submitButtonContent = () => {
    switch (status) {
      case Status.Sending:
        return <>Sending... &nbsp;<BsFillSendFill size={20} /></>
      case Status.Complete:
        return <>Message Sent! &nbsp;<BsFillSendCheckFill size={20} /></>
      default:
        return <>Send Message &nbsp;<BsFillSendFill size={20} /></>
    }
  }

  // Clears form warning on form completion
  useEffect(() => {
    if (name && email && subject && message) setWarning('')
  }, [name, email, subject, message])

  return (
    <>
      <SectionHeader>Contact</SectionHeader>
      <SectionText className="contact">
        I am currently seeking new opportunities! If you have a project in need
        of collaboration, are growing your team, or simply want to chat, please
        don't hesitate to get in touch. I'm open and eager to connect!
      </SectionText>
      <StyledFormRow>
        <StyledInput
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </StyledFormRow>
      <StyledFormRow>
        <StyledTextArea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Button type="button" $status={status} onClick={handleSubmit}>
          {submitButtonContent()}
        </Button>
      </StyledFormRow>
      <StyledWarning>{warning}</StyledWarning>
    </>
  );
}

export default Contact