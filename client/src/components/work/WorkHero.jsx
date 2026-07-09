import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function WorkHero() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#0A2540] py-16 md:py-20">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-banner.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#0A2540]/70 via-[#0A2540]/80 to-[#0A2540]/95"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#2563EB]/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center flex flex-col items-center"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block bg-[#2563EB]/20 text-[#60A5FA] px-5 py-1.5 rounded-full uppercase tracking-[0.15em] text-xs font-bold mb-6 border border-[#2563EB]/30"
          >
            Our Work
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Justice <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
              In Action
            </span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            DDJC provides free legal aid, conducts fact-finding missions, promotes constitutional awareness, empowers marginalized communities, and works tirelessly to ensure justice, equality, and dignity for every individual.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Link
              to="/legal-aid"
              className="flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-900/20 hover:scale-105"
            >
              <FaPhoneAlt />
              Get Legal Help
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#0A2540] px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WorkHero;
