import {
  FaFemale,
  FaChild,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function WomenJustice() {
  const initiatives = [
    {
      id: 1,
      icon: <FaFemale />,
      title: "Women's Rights",
      description:
        "DDJC provides legal guidance, awareness, and support to women facing discrimination, violence, or denial of their constitutional rights.",
    },
    {
      id: 2,
      icon: <FaChild />,
      title: "Child Protection",
      description:
        "We work to safeguard children's rights by promoting education, protection from abuse, and access to legal remedies whenever required.",
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Safe Communities",
      description:
        "Through awareness campaigns and community engagement, DDJC promotes safe, inclusive, and equitable environments for women and children.",
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
            Women & Child Justice
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Protecting Rights, Empowering Lives
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            DDJC is committed to ensuring that women and children receive equal protection, legal support, dignity, and opportunities to live free from discrimination and violence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
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
          className="mt-16 bg-gradient-to-br from-[#0A2540] to-[#143A61] border border-gray-700 rounded-3xl px-8 py-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Every Woman and Every Child Deserves Justice
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mt-5 leading-relaxed">
            DDJC works alongside communities, legal professionals, and institutions to create a safer society where women and children can live with dignity, equality, and constitutional protection.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WomenJustice;
