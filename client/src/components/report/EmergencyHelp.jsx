import {
  FaPhoneAlt,
  FaAmbulance,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

function EmergencyHelp() {
  const emergencyContacts = [
    {
      title: "Police Emergency",
      value: "112",
      icon: <FaShieldAlt />,
    },
    {
      title: "Women's Helpline",
      value: "181",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Ambulance",
      value: "108",
      icon: <FaAmbulance />,
    },
  ];

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <section className="py-24 bg-white">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Emergency Assistance
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6">
            Need Immediate Help?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            If you are facing an emergency or immediate danger, contact the appropriate emergency service first. DDJC will assist you with legal guidance and follow-up support after your safety is ensured.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {emergencyContacts.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2540]">
                {item.title}
              </h3>
              <p className="text-4xl font-extrabold text-[#2563EB] mt-4">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-20 bg-[#0A2540] border border-gray-700 rounded-3xl p-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-4xl font-bold text-white">
                Contact DDJC
              </h3>
              <p className="text-gray-300 mt-5 leading-relaxed">
                After ensuring your immediate safety, contact our legal support team for guidance, documentation assistance, and legal aid.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5">
                <FaPhoneAlt className="text-[#2563EB] text-xl" />
                <div>
                  <p className="font-bold text-[#0A2540]">
                    Helpline
                  </p>
                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5">
                <FaEnvelope className="text-[#2563EB] text-xl" />
                <div>
                  <p className="font-bold text-[#0A2540]">
                    Email
                  </p>
                  <p className="text-gray-600">
                    support@ddjc.org
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5">
                <FaMapMarkerAlt className="text-[#2563EB] text-xl" />
                <div>
                  <p className="font-bold text-[#0A2540]">
                    Office
                  </p>
                  <p className="text-gray-600">
                    Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5">
                <FaClock className="text-[#2563EB] text-xl" />
                <div>
                  <p className="font-bold text-[#0A2540]">
                    Working Hours
                  </p>
                  <p className="text-gray-600">
                    Mon – Sat | 9:30 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h4 className="text-lg font-bold text-blue-800 mb-3">
            Important Notice
          </h4>
          <p className="text-blue-800 leading-relaxed">
            DDJC is a legal aid and human rights organization. In situations involving immediate danger, violence, or medical emergencies, please contact the appropriate emergency services first before reaching out to us.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default EmergencyHelp;
