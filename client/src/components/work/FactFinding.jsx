import {
  FaSearch,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function FactFinding() {
  const missions = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Field Investigation",
      description:
        "Our team visits affected locations to collect facts, verify incidents, and understand the ground reality.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Community Interaction",
      description:
        "We interact with victims, families, local authorities, and community members to document their concerns.",
    },
    {
      id: 3,
      icon: <FaFileAlt />,
      title: "Fact Finding Report",
      description:
        "Verified findings are compiled into reports that support legal action, advocacy, and policy recommendations.",
    },
  ];

  const itemVariants = { 
    hidden: { opacity: 0, y: 30, scale: 0.95 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    } 
  };
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    } 
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3">
            Fact Finding Missions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Investigating With Integrity
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Every investigation conducted by DDJC aims to uncover facts, document evidence, and strengthen the pursuit of justice for affected communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center text-xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants} 
          className="mt-12 bg-white border border-gray-100 rounded-3xl p-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-4">Why Fact Finding Matters</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Accurate documentation strengthens legal proceedings, increases accountability, and helps ensure that victims receive justice. DDJC follows an evidence-based approach in every fact-finding mission.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FactFinding;
