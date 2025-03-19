"use client";

import { useEffect, useState } from "react";
import { Globe, Handshake, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <Globe className="text-purple-500 w-12 h-12" />,
    title: "Flexible Learning",
    description:
      "Access top-notch education from the tech alliance of your own space, at your own place.",
  },
  {
    id: 2,
    icon: <Handshake className="text-purple-500 w-12 h-12" />,
    title: "Hands-On Projects",
    description:
      "Put your knowledge into action with engaging, practical projects you can complete from home.",
  },
  {
    id: 3,
    icon: <HelpCircle className="text-purple-500 w-12 h-12" />,
    title: "Interactive Progress Sessions",
    description:
      "Our Interactive Progress Sessions help learners track growth, clarify doubts, and stay motivated.",
  },
];

const FeatureCards = () => {
  const loopedFeatures = [...features, ...features];

  
  const [scrollDuration, setScrollDuration] = useState(15); 

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setScrollDuration(6); 
      } else {
        setScrollDuration(15); 
      }
    };
  
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);
  
  return (
    <section className="py-16 bg-purple-100 overflow-x-hidden">
  <div className="container max-w-screen-2xl mx-auto px-4 lg:px-28">
    <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
      Why Choose Tech Alliance?
    </h2>

    <div  key={scrollDuration} className="overflow-hidden pb-4 relative [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <motion.div
        className="flex gap-8 flex-none"
        animate={{ x: "-50%" }}
        transition={{
          duration: scrollDuration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {loopedFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="min-w-[280px] bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-purple-300/50 text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-purple-700">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default FeatureCards;
