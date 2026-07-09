import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ContactInfo() {
  const contactInfo = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Office Address",
      details: ["Police Line – Baghaura, Orai – Jalaun", "UP - 285001, India"],
    },
    {
      id: 2,
      icon: FaPhoneAlt,
      title: "Phone No",
      details: ["9235737691", "9453645931"],
    },
    {
      id: 3,
      icon: FaEnvelope,
      title: "Email",
      details: ["ddjc.prayas@gmail.com"],
    },
    {
      id: 4,
      icon: FaClock,
      title: "Office Hours",
      details: ["Monday - Friday", "9:30 AM - 6:00 PM"],
    },
  ];

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      <div className="mb-8">
        <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs">Contact Information</span>
        <h2 className="mt-3 text-3xl font-extrabold text-[#0A2540] md:text-4xl">Get In Touch</h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          We're always happy to answer your questions, provide legal guidance, or discuss opportunities to work together.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.id} variants={itemVariants} className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2540]">{item.title}</h3>
                  <div className="mt-1 space-y-0.5">
                    {item.details.map((detail, index) => (
                      <p key={index} className="text-xs leading-relaxed text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ContactInfo;
