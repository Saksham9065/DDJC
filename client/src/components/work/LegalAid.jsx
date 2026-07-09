import {
  FaBalanceScale,
  FaGavel,
  FaHandsHelping,
} from "react-icons/fa";
import { motion } from "framer-motion";

function LegalAid() {
  const services = [
    {
      id: 1,
      icon: <FaBalanceScale />,
      title: "Free Legal Consultation",
      description:
        "DDJC provides free legal advice, case assessment, legal documentation support, and guidance to victims seeking justice.",
    },
    {
      id: 2,
      icon: <FaGavel />,
      title: "Court Representation",
      description:
        "Our experienced advocates assist eligible victims before District Courts, High Courts, and other legal authorities whenever required.",
    },
    {
      id: 3,
      icon: <FaHandsHelping />,
      title: "Victim Support",
      description:
        "We help victims access government compensation, rehabilitation schemes, counseling, and continuous legal assistance.",
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
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
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3">
            Legal Aid
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Free Legal Assistance For Every Individual
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            DDJC is committed to ensuring that every individual, especially those from marginalized communities, receives timely legal support, constitutional protection, and equal access to justice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#0A2540] to-[#143A61] text-white flex items-center justify-center text-xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default LegalAid;
