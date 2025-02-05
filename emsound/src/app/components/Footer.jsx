import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4">Emsound mm AB</h3>
          <p className="mb-2">Providing top-notch sound and lighting solutions.</p>
          <p>&copy; {new Date().getFullYear()} Emsound mm AB. All rights reserved.</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/om" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:+46123456789" className="hover:text-blue-400 transition-colors">
                +46 123 456 789
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:info@emsound.se" className="hover:text-blue-400 transition-colors">
                info@emsound.se
              </a>
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/emsoundmm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              FB
            </a>
            <a
              href="https://www.linkedin.com/company/emsoundmm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              IN
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer

