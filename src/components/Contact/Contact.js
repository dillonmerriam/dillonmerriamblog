import React from 'react'
import './contact.scss'

export const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <h1>Contact</h1>
      <div className='contact-form'>
        <div className='user-message'>
          <textarea type="text" id="message" name="message" cols="50" rows="10"/>
        </div>
        <div className='user-info'>
          <form>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"/><br/>
            <label for="email">Email:</label><br/>
            <input type="text" id="email" name="email"/><br/>
          </form>
          <button>Submit</button>
        </div>

      </div>
      
    </div>
  )
}
