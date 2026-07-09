import {
  FaQuoteLeft,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Community Member",
      role: "Legal Aid Beneficiary",
      quote:
        "DDJC stood by our family during a difficult time. Their legal guidance and continuous support helped us seek justice with confidence.",
    },
    {
      id: 2,
      name: "Volunteer",
      role: "Youth Leadership Programme",
      quote:
        "Volunteering with DDJC strengthened my understanding of constitutional rights and inspired me to serve my community.",
    },
    {
      id: 3,
      name: "Social Worker",
      role: "Community Partner",
      quote:
        "The organisation's commitment to legal awareness and human dignity has created a meaningful impact in many underserved communities.",
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Voices From Our Community
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Hear from beneficiaries, volunteers, and partners who have experienced DDJC's commitment to justice, equality, and community empowerment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-7 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center text-xl">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 leading-relaxed mt-5 text-sm">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0A2540] to-[#143A61] text-white flex items-center justify-center">
                  <FaUserCircle />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A2540]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
