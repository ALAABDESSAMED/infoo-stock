 import React from 'react'
 
 export default function Contact() {
     return (
         <div>
            <form >
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button> Envoyer </button>
    </form> 
         </div>
     )
 }
 