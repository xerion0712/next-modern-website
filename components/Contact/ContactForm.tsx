import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const formData = {
      name,
      email,
      message,
    };

    // Make an API request to send the form data using Nodemailer
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully"); // Show success toast message
      } else {
        toast.error("Failed to send message"); // Show error toast message
      }
    } catch (error) {
      toast.error("An error occurred"); // Show error toast message
    }
    setLoading(false); // Set isLoading to false after the form submission is complete
  };

  return (
    <div>
      <ToastContainer />
      <form
        className="px-3 pt-12 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
       
        <div className="text-secondary">
        <input
            className="mb-4 border-secondary border rounded-lg w-full py-4 px-3  leading-tight focus:outline-none "
            id="name"
            type="text"
            placeholder="Your Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mb-4 border-secondary border rounded-lg w-full py-4 px-3  leading-tight focus:outline-none "
            id="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
              <textarea
            className="mb-4 border-secondary border rounded-lg w-full py-4 px-3  leading-tight focus:outline-none"
            id="message"
            rows={4}
            placeholder="Write something"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
  
        
      
    

        {/* Submit button */}
        <div className="flex">
          <button
            className={`bg-accent border border-conone hover:bg-saccent hover:text-primary text-secondary font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition-all ${
              loading
                ? "opacity-0 translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
            type="submit"
            disabled={loading}
          >
            Hit Me Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
