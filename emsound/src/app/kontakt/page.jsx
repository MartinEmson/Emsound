// pages/contact.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="flex w-full min-h-screen items-center justify-center">
        <div className='flex w-4/6 h-1/2 justify-center items-center'>
          <div className=''>
            <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
            <ContactForm />
          </div>
        </div>
      </section>
  );
}