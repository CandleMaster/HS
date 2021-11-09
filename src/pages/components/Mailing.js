import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import styled from 'styled-components';

export default function Mailing({ position, fontColor }) {

const [message, setResult] = useState("")
 async function handleSubmit(e) {
    e.preventDefault();
    const result = await addToMailchimp(email)
    setResult(prop => "Thank you for supporting me!:)")
  
  }
handleSubmit().catch(e=>{console.log('An error occursed with MailChimp')})
  const [email,setEmail] = useState("")
  function handleChange(e)  {
    const newValue = e.target.value;
      setEmail(newValue)
  }

const Form = styled.form`
    *{
        margin: .5rem 0;
        padding:.5rem 0;
        background: transparent;
    }
    button{
        border-radius: 99rem;
        margin: 1.5rem 0;
    }
    input{
        border-width: 0 0 1px 0;
    }
`
    return (
      <>
        <Form  onSubmit={handleSubmit}>
              <input id="name" required placeholder="name"/>
              <input onChange={handleChange} id="email" value={email} required placeholder="e-mail address"/>
              <button type="submit">I'M IN</button>
              <div>{message}</div>
        </Form>
      </>
    )

}