import React from 'react'
import "./App.css";

function Contact() {
  return (
    <div className='main'>
      <form>
        <h2>Get In touch</h2>
            <input type="text" id="name" placeholder="Enter Your Name" required></input>
            <input type="email" id="email" placeholder="Enter Your Email" required></input>
            <input type="phone" id="phone" placeholder="Enter Your Phone Number" required></input>
            <input type="text" id="coupon" placeholder="Enter Coupen Code" required></input>
            <textarea id="message" rows="4" placeholder="Write Something"></textarea>
            <button type="submit">Send</button>

      </form>
    </div>
  )
}

export default Contact;
