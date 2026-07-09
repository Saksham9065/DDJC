import {
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

function WhoWeAre() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };
  const itemVariants = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    } 
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        className="container mx-auto px-6"
      >
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div variants={itemVariants}>
            <img 
              src="/images/founder/kuldeep.jpg" 
              alt="Adv. Kuldeep Kumar Baudh" 
              className="rounded-3xl shadow-xl w-full object-cover h-96 lg:h-[26rem]"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <span className="uppercase tracking-[0.15em] text-[#2563EB] font-bold text-xs mb-3">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mt-2 mb-6 leading-tight">
              Pro-Innovation <br /> Social Justice
            </h2>
            <motion.div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                The Dalit Dignity and Justice Centre (DDJC) is an innovative social justice initiative spearheaded by first-generation Dalit innovators, learners, and community defenders in Jalaun, Bundelkhand.
              </p>
              <p>
                DDJC applies a modern, systems-driven approach to bridge the gap between marginalized communities, formal law, and government institutions.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: <FaUsers />, stat: "200+", label: "Trained Leaders" },
            { icon: <FaBalanceScale />, stat: "Court Support", label: "Lower to High Court" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants} 
              className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center text-xl mb-6">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] to-[#0A2540]">{item.stat}</h3>
              <p className="text-gray-600 mt-2 text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WhoWeAre;