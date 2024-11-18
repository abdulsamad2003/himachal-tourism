'use client'
import React, { useState } from 'react';
import "../styles/Form.css";
import { sendGAEvent } from '@next/third-parties/google';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [formStatus, setFormStatus] = useState(null); // Track form status
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append access key for Web3Forms
    formData.append("access_key", "652de30f-937e-4626-9dbd-e62c44ee6254");

    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // 1. Send form data to Web3Forms (for email)
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await emailResponse.json();

      if (emailResponse.ok && result.success) {
        console.log(result);
        setFormStatus('success'); // Set success status
        event.target.reset(); // Reset the form fields

        // 2. Redirect to the thank you page after a successful submission
        router.push('/thankyou'); // Change '/thank-you' to your actual thank you page route
      } else {
        console.error(result);
        setFormStatus('error'); // Set error status
        return;
      }

      // 3. Send form data to Telegram bot
      const botToken = "7953446645:AAGMjGBx1cotqlXIWci7PraNNJZLS6nKgWk"; 
      const chatId = "148013002";

      // Create the message text for Telegram
      const telegramMessage = `
      New Form Submission:
      Name: ${object.fullName}
      Email: ${object.email}
      Phone: ${object.phone}
      `;

      // Send message to Telegram
      const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      });

      const telegramResult = await telegramResponse.json();
      console.log("Telegram response:", telegramResult);

      if (!telegramResponse.ok || !telegramResult.ok) {
        console.error("Error sending message to Telegram:", telegramResult);
        setFormStatus('error'); // Handle Telegram error
      }

      // Automatically clear the success message after 10 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 10000); // 10 seconds

    } catch (error) {
      console.error("Error submitting form:", error.message);
      setFormStatus('error'); // Handle network or fetch errors
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>FREE Travel Consultation!</h2>
        <p> Enter your details in the enquiry form and Our travel expert will call you soon to</p>

        <label htmlFor="fullName">Full Name</label><br />
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter a name"
          required
        /><br /><br />

        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter an email"
          required
        /><br /><br />

        <label htmlFor="phone">Phone Number</label><br />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Your 10-digit mobile no."
          pattern="[0-9]{10}"
          title="Phone number must be exactly 10 digits"
          required
        /><br /><br />

        <div className="contactButton">
          <button
            onClick={() => sendGAEvent('event', 'buttonClicked', { value: 'xyz' })}
            style={{ width: "100%", textAlign: "center" }} type="submit">Submit</button>
        </div>

        {formStatus === 'success' && <p className="success-message">Form submitted successfully!</p>}
        {formStatus === 'error' && <p className="error-message">There was an error submitting the form. Please try again later.</p>}
      </form>

      <style jsx>{`
        .success-message {
          color: green;
          margin-top: 10px;
        }

        .error-message {
          color: red;
          margin-top: 10px;
        }

        .travel-date-container {
          margin-bottom: 16px;
        }

        .travel-dates {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .travel-dates label {
          margin-right: 8px;
        }

        input[type="date"] {
          padding: 5px;
        }
      `}</style>
    </>
  );
}

export default Form;
