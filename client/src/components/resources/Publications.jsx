import {
  FaBookOpen,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Publications() {
  const publications = [
    {
      id: 1,
      title: "Annual Report",
      description:
        "A summary of DDJC's activities, legal interventions, community programmes, and impact over the year.",
      file: "/documents/annual-report.pdf",
    },
    {
      id: 2,
      title: "Legal Aid Handbook",
      description:
        "A practical guide explaining legal aid services, constitutional rights, and available support mechanisms.",
      file: "/documents/legal-guide.pdf",
    },
    {
      id: 3,
      title: "Know Your Rights",
      description:
        "An easy-to-understand handbook covering fundamental rights, equality, and legal protections.",
      file: "/documents/know-your-rights.pdf",
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
            Publications
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Knowledge Resources
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Browse DDJC's publications designed to promote legal awareness, constitutional literacy, and informed civic participation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A2540] to-[#143A61] text-white flex items-center justify-center text-xl mb-6">
                <FaBookOpen />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              <a
                href={item.file}
                download
                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 transition hover:scale-105"
              >
                <FaDownload />
                Download
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Publications;
