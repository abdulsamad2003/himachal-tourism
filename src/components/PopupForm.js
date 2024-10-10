"use client";
import React, { useState, useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import "../styles/Form.css";
import { IoMdClose } from "react-icons/io";

const PopupForm = ({ isPopupVisible, setIsPopupVisible }) => {
  const [formStatus, setFormStatus] = useState(null); // Track form status
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission status

  useEffect(() => {
    if (!formSubmitted && !sessionStorage.getItem("formSubmitted") && !isPopupVisible) {
      const timer = setTimeout(() => {
        setIsPopupVisible(true);
      }, 480000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [formSubmitted, isPopupVisible, setIsPopupVisible]);

  const closePopup = () => {
    setIsPopupVisible(false);

    if (!formSubmitted) {
      setTimeout(() => {
        setIsPopupVisible(true);
      }, 480000); // 5 seconds
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "652de30f-937e-4626-9dbd-e62c44ee6254");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await emailResponse.json();

      if (emailResponse.ok && result.success) {
        setFormStatus("success");
        setFormSubmitted(true);
        sessionStorage.setItem("formSubmitted", true);
        event.target.reset();
        closePopup();
      } else {
        setFormStatus("error");
        return;
      }

    // 2. Send form data to Telegram bot
        const botToken = "7953446645:AAGMjGBx1cotqlXIWci7PraNNJZLS6nKgWk"; // Your bot token
        const chatId = "148013002"; // Your chat ID
          const telegramMessage = `New Form Submission: Phone: ${object.phone}`;

      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
          }),
        }
      );

      if (!telegramResponse.ok) {
        setFormStatus("error");
      }

      setTimeout(() => {
        setFormStatus(null);
      }, 4000);
    } catch (error) {
      setFormStatus("error");
    }
  }

  return (
    <>
      {isPopupVisible && <div className="blur-background"></div>}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="form popup">
            <button className="close-button" onClick={closePopup}>
              <IoMdClose size={"30px"} color="black" />
            </button>
            <form onSubmit={handleSubmit}>
              <h2>Enquire Now for Free!</h2>
              <p>Talk to a Travel Expert for Free! We&apos;ll Call You.</p>

              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Your 10-digit mobile no."
                pattern="^\+?[0-9]{11,12}$"
                required
              />
              <br />
              <br />
                <div className="contactButton">

              <button
                type="submit"
                style={{ width: "100%", textAlign: "center" }}
                onClick={() => sendGAEvent("event", "buttonClicked", { value: "xyz" })}
              >
                Submit
              </button>
                </div>

              {formStatus === "success" && (
                <p className="success-message">Form submitted successfully!</p>
              )}
              {formStatus === "error" && (
                <p className="error-message">
                  There was an error submitting the form. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
       {/* Styles */}
       <style jsx>{`
        .blur-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 100;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 101;
        }

        .popup {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 400px;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }

        .success-message {
          color: green;
          margin-top: 10px;
        }

        .error-message {
          color: red;
          margin-top: 10px;
        }

        .popup-form input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .contactButton button {
          background-color: #0070f3;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }

        .contactButton button:hover {
          background-color: #005bb5;
        }
     `
     }</style>
    </>
  );
};


export default PopupForm;
