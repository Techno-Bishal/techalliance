"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen py-20 items-center justify-center bg-purple-100 px-6">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-20">
        Feel Free To Contact
      </h2>
      <div className="container max-w-screen-2xl mx-auto px-4 lg:px-20 w-full flex flex-col md:flex-row gap-8">
       
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-purple-800">Contact Us</h2>
          <p className="text-gray-600">
            We’d love to hear from you. Reach out to us using the details below or fill out the form.
          </p>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="text-purple-600" /> techalliancedang3@techalliance.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="text-purple-600" /> +977 1234567890
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="text-purple-600" /> Tulsipur Chowk, Ghorahi Dang
            </p>
          </div>
        </div>

      
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg mb-2 text-purple-800">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-purple-200 border-none outline-none text-purple-900 placeholder-gray-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg mb-2 text-purple-800">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-purple-200 border-none outline-none text-purple-900 placeholder-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg mb-2 text-purple-800">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                className="w-full p-3 rounded-lg bg-purple-200 border-none outline-none text-purple-900 placeholder-gray-500"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-purple-600 hover:bg-purple-500 transition duration-300 p-3 rounded-lg text-lg font-semibold text-white flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
