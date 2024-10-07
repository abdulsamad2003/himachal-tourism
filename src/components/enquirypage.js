import React from 'react'
import "../styles/enquirypage.css"
import Form from './Form'
const enquirypage = () => {
  return (
    <section className="enquiry-page">
        <div className="content">
            <h1>Unlock Exclusive Deals on Shimla, Manali, Kaza & Dharamshala!</h1>
            <p>Get FREE travel consultation for your Himachal getaway</p>
        </div>
        <div className="form-in-hero-section">
        <Form/>
        </div>
    </section>
  )
}

export default enquirypage;
