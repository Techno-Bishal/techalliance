"use client";

import { useEffect } from "react";
import { Code, Search, Smartphone, Megaphone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { title: "Web Development", icon: <Code size={40} />, description: "Modern, responsive, and scalable websites using the latest technologies." },
  { title: "SEO Optimization", icon: <Search size={40} />, description: "Improve search rankings and online visibility with expert SEO strategies." },
  { title: "App Development", icon: <Smartphone size={40} />, description: "Cross-platform mobile apps with smooth UX and high performance." },
  { title: "Digital Marketing", icon: <Megaphone size={40} />, description: "Boost your brand with targeted marketing campaigns and social media strategies." }
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-purple-100 text-white">
      <div className="container mx-auto px-6 lg:px-28 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-center text-purple-700 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="flip-left"
              className="bg-purple-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
