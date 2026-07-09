import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
  `${import.meta.env.BASE_URL}images/hero/hero-banner.jpg`,
  `${import.meta.env.BASE_URL}images/hero/1.jpg`,
  `${import.meta.env.BASE_URL}images/hero/2.jpg`,
  `${import.meta.env.BASE_URL}images/hero/3.jpg`,
  `${import.meta.env.BASE_URL}images/hero/4.jpg`,
  `${import.meta.env.BASE_URL}images/hero/5.jpeg`,
  `${import.meta.env.BASE_URL}images/hero/6.jpeg`,
  `${import.meta.env.BASE_URL}images/hero/7.jpg`,
  `${import.meta.env.BASE_URL}images/hero/8.jpeg`,
  `${import.meta.env.BASE_URL}images/hero/9.jpg`,
  `${import.meta.env.BASE_URL}images/hero/10.jpg`,
];

function Hero() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative h-[25vh] md:h-[35vh] flex items-center justify-center overflow-hidden bg-gray-200">
        <img
          src={heroImages[currentImage]}
          alt={`Hero Banner ${currentImage + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? "bg-white w-4" : "bg-white/50"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
      
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-white">
        <div className="container mx-auto px-6 flex justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center flex flex-col items-center"
          >
            {/* DDJC Full Form Label */}
            <motion.p variants={fadeInUp} className="text-[#2563EB] font-extrabold tracking-[0.2em] uppercase text-base mt-4 mb-2">
              Dalit Dignity & Justice Centre (DDJC)
            </motion.p>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-black leading-[1.1] mb-6 tracking-tight">
              Justice For Every Citizen
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto italic font-medium">
              "Justice is the first virtue of social institutions." — Dr. B.R. Ambedkar
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We provide free legal aid, constitutional awareness, human rights advocacy, and support for marginalized communities to ensure dignity, equality, and justice.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;