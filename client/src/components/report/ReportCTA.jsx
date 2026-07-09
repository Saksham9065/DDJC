import { Link } from "react-router-dom";
import { FaPhoneAlt, FaHandsHelping, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function ReportCTA() {
  return (
    <section className="py-24 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 bg-[#2563EB] px-5 py-2 rounded-full text-white font-semibold uppercase tracking-wider">
            <FaArrowRight />
            Take Action
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-8 leading-tight">
            You Are Not Alone
          </h2>
          <p className="text-lg text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            Every complaint matters. Whether you need immediate legal guidance, wish to volunteer, or want to support our mission, DDJC stands with you in the pursuit of justice, dignity, and equality.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xl mx-auto">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mt-6">
                Contact Legal Team
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                Speak directly with our legal support team for confidential guidance and assistance.
              </p>
              <Link
                to="/contact"
                className="inline-flex mt-8 bg-[#2563EB] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#0A2540] text-white flex items-center justify-center text-xl mx-auto">
                <FaHandsHelping />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mt-6">
                Become a Volunteer
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                Join our movement and help create awareness, support victims, and strengthen communities.
              </p>
              <Link
                to="/volunteer"
                className="inline-flex mt-8 bg-[#0A2540] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
              >
                Join DDJC
              </Link>
            </div>
          </div>

          <div className="mt-20 border-t border-white/20 pt-10">
            <p className="text-gray-300 text-lg leading-8 max-w-4xl mx-auto">
              <span className="font-bold text-white">
                Confidentiality Commitment:
              </span>{" "}
              Every report submitted to DDJC is handled with strict confidentiality. Our legal experts review each case carefully and guide victims through the appropriate legal process while respecting privacy and dignity.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ReportCTA;
