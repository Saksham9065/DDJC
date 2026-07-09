import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function YouthLeadership() {
  const programs = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      title: "Leadership Training",
      description:
        "We equip young people with leadership, communication, and constitutional awareness skills to become responsible community leaders.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Volunteer Network",
      description:
        "Students, researchers, lawyers, and social workers join DDJC to support legal awareness and community empowerment initiatives.",
    },
    {
      id: 3,
      icon: <FaLightbulb />,
      title: "Legal Awareness",
      description:
        "Interactive workshops and awareness programs help youth understand their rights, duties, and the importance of constitutional values.",
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
    <section className="py-20 md:py-24 bg-white">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3">
            Youth Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Empowering Future Leaders
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            DDJC believes that informed and responsible youth are essential for building an inclusive, democratic, and just society.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A2540] to-[#143A61] text-white flex items-center justify-center text-xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Link
            to="/volunteer"
            className="inline-flex items-center bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-7 py-3 rounded-full font-semibold hover:from-blue-700 transition hover:scale-105"
          >
            Join Our Volunteer Network
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default YouthLeadership;
