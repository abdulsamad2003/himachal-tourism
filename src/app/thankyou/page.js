'use client'
import React from 'react'
import '../../styles/thankyou.css'
import Image from 'next/image'
import Link from 'next/link'

const Thankyou = () => {
  return (
    <div className='thankyou-container'>
      <Image src='/assests/pngimg.com - thank_you_PNG75.png' alt='thanks'  className='thankyou-image' width={500} height={250} />
      {/* <div className='thankyou-img'></div> */}
      <h1>Thanks for reaching out!</h1>
      <p>Your message just showed up in my inbox. Talk to you soon!</p>
      <Link href='/' className='btn'>Back to Home</Link>
    </div>
  )
}

export default Thankyou
