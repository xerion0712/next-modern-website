import { FiDribbble, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import ContactForm from './ContactForm';
import Image from "next/image";
const Contact = () => {
 
  return (
    <section className="contact flex  items-center py-[4rem] bg-secondary text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex flex-col py-6 text-secondary items-center mt-2'>
          <Image
            src="/img/frontendlogo2.png"
            width={200}
            height={200}
            alt="logo"
          />
            <h1 className="text-xl md:text-2xl font-bold mt-5">Got a Project in Mind, Let&apos;s Connect!</h1>
            <div className="flex items-center gap-2 justify-center mt-4">
              <FiMail className=" text-xl" />
              <p className="">maryamtufail78@gmail.com</p>
            </div>
            <p className=" mt-4">Or you write via contact form. <br/> Send me a message and I&apos;ll get back to you shortly.</p>
            <div className='flex justify-center gap-2 mt-6'>
            <FiInstagram className='w-8 h-8'/>
          <FiLinkedin className='w-8 h-8'/>
          <FiDribbble className='w-8 h-8'/>
            </div>
         
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
