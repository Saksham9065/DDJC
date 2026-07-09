import { FaEye, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

function VisionMission() {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const itemVariants = { 
    hidden: { opacity: 0, y: 30, scale: 0.95 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    } 
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="text-center flex flex-col items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          <span 
            variants={fadeInUp}
            className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3"
          >
            Vision & Mission
          </span>
          <h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5"
          >
            Guided By Purpose
          </h2>
          <p 
            variants={fadeInUp}
            className="max-w-xl text-base md:text-lg text-gray-600 leading-relaxed text-center"
          >
            A scalable, data-driven framework transforming standard legal aid into a self-sustaining social ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex gap-6 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="text-[#0A2540] text-3xl mt-1">
              <FaEye />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To build an inclusive society where marginalized communities enjoy dignity, equality, justice, and institutional equity—transforming the rule of law into a lived reality for every individual in Bundelkhand and beyond.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex gap-6 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="text-[#0A2540] text-3xl mt-1">
              <FaBullseye />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To provide legal representation, promote constitutional awareness, empower communities through youth-led innovation, bridge citizen-governance gaps, and drive systemic change using research, documentation, and strategic litigation.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default VisionMission;