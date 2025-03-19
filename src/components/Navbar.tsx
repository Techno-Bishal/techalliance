"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  const textColorClass = heroInView ? "text-white" : "text-black";
  const hoverColorClass = heroInView ? "hover:text-purple-400 duration-300" : "hover:text-purple-600";

  const menuItems = ["Home", "About", "Services", "Teams", "Testimonials", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-6 lg:px-28 flex items-center justify-between py-4">
       
        <Link href="/">
          <div className="flex items-center space-x-4 cursor-pointer">
            <Image src={logo} alt="Logo" height={40} width={40} />
            <span className={`text-xl font-semibold ${textColorClass}`}>Tech Alliance</span>
          </div>
        </Link>

       
        <ul className={`hidden lg:flex space-x-6 font-medium ${textColorClass}`}>
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`${hoverColorClass} text-lg `}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        
        <Link href="/login">
          <button className="hidden md:block animate-pulse cursor-pointer duration-1000 gap-2 bg-purple-500 px-3 py-2 text-white">
            Want to Join <ArrowRight className="inline-flex justify-center items-center" />
          </button>
        </Link>

       
        <button className={`lg:hidden ${textColorClass}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-purple-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6 text-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-400"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

    
        <div className="ml-5 mt-4">
          <Link href="/login">
            <button className="animate-pulse cursor-pointer duration-1000 gap-2 bg-purple-500 px-3 py-2 text-white">
              Want to Join <ArrowRight className="inline-flex justify-center items-center" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
