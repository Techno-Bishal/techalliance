"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque”",
    name: "Alisa Bista",
    title: "Tech Alliance Mem",
    avatarImg: avatar1,
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque”",
    name: "Santosh Neupane",
    title: "Tech Alliance Mem",
    avatarImg: avatar2,
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque”",
    name: "Usha Sharma",
    title: "Tech Alliance Mem",
    avatarImg: avatar3,
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque”",
    name: "Sunil Khanal",
    title: "Tech Alliance Mem",
    avatarImg: avatar4,
  },
];

// Double the array for seamless infinite scroll
const scrollingTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 bg-purple-100">
      <div className="container max-w-screen-2xl mx-auto px-4 lg:px-28">
        <h2 className="text-4xl font-bold text-center text-purple-700 tracking-tighter">
          What our members Say?
        </h2>
        <p className="text-lg md:text-xl text-black/70 text-center mt-5 tracking-tight max-w-sm mx-auto">
          Together We Grow!
        </p>

    
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {scrollingTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-purple-400 p-6 md:p-10 rounded-xl max-w-xs md:max-w-md flex-none bg-transparent"
              >
                <div className="text-lg md:text-2xl tracking-tight text-black">
                  {testimonial.text}
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <Image
                    src={testimonial.avatarImg}
                    alt={`Avatar for ${testimonial.name}`}
                    className="h-11 w-11 rounded-lg grayscale"
                  />
                  <div>
                    <div className="text-black">{testimonial.name}</div>
                    <div className="text-black/50 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
