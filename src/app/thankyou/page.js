import React from 'react'
import '../../styles/thankyou.css'
import Image from 'next/image'

const Thankyou = () => {
  return (
    <div className='thankyou-container'>
         <img
            src="thankyou.jpeg"
            alt="Thank You"
        />
      <h1>Thanks for reaching out!</h1>
      <p>Your message just showed up in my inbox. Talk to you soon!</p>
      <button className='btn'>Back to Home</button>
    </div>
  )
}

export default Thankyou
