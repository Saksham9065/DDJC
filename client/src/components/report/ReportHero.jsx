import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

function ReportHero() {
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
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-700/10 blur-3xl"
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
            className="inline-block bg-[#2563EB] text-white px-5 py-1.5 rounded-full font-semibold uppercase tracking-wider mb-6 flex items-center gap-2"
          >
            <FaExclamationTriangle />
            Legal Assistance
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Report a <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
              Human Rights Violation
            </span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-300 leading-relaxed mt-4 max-w-3xl"
          >
            If you or someone you know has experienced caste-based discrimination, violence, denial of constitutional rights, or any form of injustice, DDJC is ready to provide legal guidance, documentation support, and access to justice.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            <a
              href="#report-form"
              className="flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-blue-900/20 hover:scale-105"
            >
              Report Now
            </a>
            <Link
              to="/legal-aid"
              className="flex items-center gap-2 border-2 border-white/20 text-white hover:bg-white hover:text-[#0A2540] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Legal Aid
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center">
            <div className="py-5 border-r border-white/20">
              <h3 className="text-2xl font-bold text-white">24×7</h3>
              <p className="text-gray-300 mt-1.5 text-sm">Support</p>
            </div>
            <div className="py-5 border-r border-white/20">
              <h3 className="text-2xl font-bold text-white">Free</h3>
              <p className="text-gray-300 mt-1.5 text-sm">Legal Guidance</p>
            </div>
            <div className="py-5 border-r border-white/20">
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-gray-300 mt-1.5 text-sm">Confidential</p>
            </div>
            <div className="py-5">
              <h3 className="text-2xl font-bold text-white">PAN India</h3>
              <p className="text-gray-300 mt-1.5 text-sm">Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportHero;
