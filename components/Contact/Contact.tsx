import React from 'react';

import { FiMail } from 'react-icons/fi';
import ContactForm from './ContactForm';

const Contact = () => {
 
  return (
    <section className="contact flex justify-center items-center py-[4rem] bg-contwo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex flex-col justify-center text-primary'>
            <h1 className="text-xl md:text-2xl font-bold">Get in Touch</h1>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">Contact Me</h2>
            <p className=" mt-4">Send me a message and I&apos;ll get back to you shortly.</p>
            <div className="flex items-center mt-4">
              <FiMail className=" text-xl mr-2" />
              <p className="">maryamtufail78@gmail.com</p>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
