"use client"

import { useState } from "react"

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL
const FORM_ID = process.env.NEXT_PUBLIC_CONTACT_FORM_7_ID

export default function ContactForm() {
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");
    setIsSuccess(false);
  
    const formData = new FormData(e.target);
  
    // Add required hidden fields for Contact Form 7
    formData.append("_wpcf7", "58"); // Contact Form ID
    formData.append("_wpcf7_unit_tag", "wpcf7-58");
  
    try {
      const response = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`, {
        method: "POST",
        body: formData,
      })
  
      const result = await response.json();
  
      if (result.status === "mail_sent") {
        setMessage(result.message || "Thank you for your message!");
        setIsSuccess(true);
        e.target.reset();
      } else {
        setMessage(result.message || "Something went wrong. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="kontakt" className='flex flex-col min-h-screen w-full md:p-12 p-6'>

    <h1 className='font-formula text-[6rem]'>Kontakt</h1>

<div className="flex flex-col items-center justify-center w-full h-full">
<h2 className='font-formula text-center text-[3rem]'>Hör av dig!</h2>

    <form onSubmit={handleSubmit} className="md:w-4/6 w-full h-full" autoComplete="off">
      {message && (
        <div className={`p-4 rounded-md ${isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message}
        </div>
      )}

      <div className="flex md:flex-row flex-col h-full pb-12">

      <div className="flex flex-col p-6">
      <div>
        <label htmlFor="your-name" className="block text-sm font-medium text-gray-700">
          {/* Your name: */}
        </label>
        <input
          placeholder="Namn"
          id="your-name"
          name="your-name"
          type="text"
          required
          className="mb-6 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="your-email" className="block text-sm font-medium text-gray-700">
          {/* Your email */}
        </label>
        <input
          placeholder="Email"
          id="your-email"
          name="your-email"
          type="email"
          required
          className="mb-6 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="your-subject" className="block text-sm font-medium text-gray-700">
          {/* Subject */}
        </label>
        <input
          placeholder="Ämne"
          id="your-subject"
          name="your-subject"
          type="text"
          required
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      </div>

      <div className="p-6 flex-1">
        <label required htmlFor="your-message" className="block text-sm font-medium text-gray-700">
          {/* Your message */}
        </label>
        <textarea
          placeholder="Meddelande"
          id="your-message"
          name="your-message"
          rows="4"
          className="block h-full w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-none"
        ></textarea>
      </div>

     
      </div>
      <div className="flex justify-center">
      <button
        type="submit"
        disabled={isSending}
        className={`p-24 h-[8vh] py-2 text-white font-semibold rounded-md ${
          isSending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        }`}
      >
        {isSending ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Skickar...
          </>
        ) : (
          "Skicka"
        )}
      </button>
      </div>
    </form>
    </div>
    </section>
  )
}

