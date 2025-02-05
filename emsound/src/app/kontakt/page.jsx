// pages/contact.jsx
import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className='p-24 flex justify-center'>
        <div className='flex justify-center h-full w-5/6 bg-slate-50'>
          <div className='h-full w-5/6 py-6'>
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className='w-64'>Redo att ta ditt evenemang till nästa nivå? Kontakta oss idag för att diskutera dina idéer och behov. Vi ser fram emot att skapa något fantastiskt tillsammans med dig!</p>
          </div>
        </div>
      </section>
    </main>
  );
}