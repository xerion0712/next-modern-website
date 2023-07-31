import { FiDribbble, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import ContactForm from './ContactForm';

const Contact = () => {
 
  return (
    <section className="contact flex  items-center py-[4rem] bg-secondary text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex flex-col py-6 text-secondary'>
          <div className="text-lg uppercase mt-1 mb-6 font-bold">&lt; <span>Frontend</span><span className="text-accent"> first</span> /&gt;</div>
            <h1 className="text-xl md:text-2xl font-bold">Got a Project in Mind, Let's Connect!</h1>
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
