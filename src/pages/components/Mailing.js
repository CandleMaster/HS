import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import styled from 'styled-components';

  
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
export default function Mailing({ position, fontColor }) {

const [message, setResult] = useState("")
async function handleSubmit(e) {
  e.preventDefault();
  const result = await addToMailchimp(contact.email,{
    NAME: contact.name
  })
  setResult("Thank you for supporting me!:)")
  console.log(result)
}

const [contact,setContact] = useState({ 
  name:"",
  email:""
})
function handleChange(e)  {
  const {id, value} = e.target;

  setContact(prev=>{
      return{
        ...prev,
        [id]:value
      }
  })
}
    return (
      <>
        <Form  onSubmit={handleSubmit}>
              <input 
                  id="name" 
                  placeholder="name"
                  value={contact.name}
                  onChange={handleChange}
                  required
              />
              <input 
                  id="email" 
                  placeholder="e-mail address"
                  value={contact.email} 
                  onChange={handleChange} 
                  required 
              />
              <button type="submit" id="submit">I'M IN</button>
              <div>{message}</div>
        </Form>
      </>
    )

}