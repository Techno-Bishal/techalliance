"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";
import team5 from "../assets/team5.jpeg";
import team6 from "../assets/team6.jpeg";
import team7 from "../assets/team7.jpeg";
import team8 from "../assets/team8.jpeg";

const teamMembers = [
  { name: "Ranjit Pandey (President)", imgSrc: team8, linkedin: "#", github: "#" },
  { name: "Ganga Xettri (Vice-President)", imgSrc: team1, linkedin: "#", github: "#" },
  { name: "Hukum Roka (Development-Lead)", imgSrc: team2, linkedin: "#", github: "#" },
  { name: "Yubraj Basnet (Supportive Staff)", imgSrc: team3, linkedin: "#", github: "#" },
  { name: "Deena Budhathoki (Human Resources)", imgSrc: team4, linkedin: "#", github: "#" },
  { name: "Bishal Kc (Vice-Secretary)", imgSrc: team5, linkedin: "#", github: "#" },
  { name: "Yashu Dangi (Secretary)", imgSrc: team7, linkedin: "#", github: "#" },
  { name: "Shrishant Adhikari (Community Manager)", imgSrc: team6, linkedin: "#", github: "#" },
];

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-purple-100">
      <div className="container max-w-screen-2xl mx-auto px-4 lg:px-20 text-center">
        <h4 className="text-purple-600 font-semibold text-lg mb-2">
          <span className="border-b-4 border-purple-400 pb-1">TEAMS</span>
        </h4>
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          Our Dedicated Members
        </h2>

        <div className="flex gap-8 flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-right"
              className="w-72 bg-white shadow-lg hover:scale-105 transition-all duration-300 rounded-lg p-6 flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400 mb-4">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-700 text-center">{member.name}</h3>

              <div className="flex space-x-4 mt-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 transition-colors text-xl"
                >
                  <Linkedin />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 transition-colors text-xl"
                >
                  <Github />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
