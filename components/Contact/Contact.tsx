import React, { useState } from 'react';
import axios from 'axios';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await axios.post('/api/contact', { name, email, message });
      setSuccessMessage('Email sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('Failed to send email');
    }

    setSubmitting(false);
  };

  return (
    <section className="contact flex justify-center items-center min-h-screen ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex flex-col justify-center'>
            <h1 className="text-xl md:text-2xl font-bold">Get in Touch</h1>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">Contact Me</h2>
            <p className="text-gray-600 mt-4">Send me a message and I'll get back to you shortly.</p>
            <div className="flex items-center mt-4">
              <FiMail className="text-gray-600 text-xl mr-2" />
              <p className="text-gray-600">maryamtufail78@gmail.com</p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              {/* Form fields */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-end">
                <button
                 className={`bg-[#3294FE] border border-[#3294FE] hover:bg-transparent hover:text-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all ${
                    submitting ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
                  }`}
                  type="submit"
                  disabled={submitting}
                >
                 Hit Me Up
                </button>
              </div>

              {/* Success and error messages */}
              {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
