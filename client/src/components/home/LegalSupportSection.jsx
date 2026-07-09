import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className="bg-gray-50 rounded-2xl mb-3 overflow-hidden border border-gray-100"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-center text-left transition-colors hover:bg-gray-100"
      >
        <span className="font-bold text-[16px] text-[#0A2540]">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#2563EB] shrink-0 ml-4"
        >
          <FaChevronDown size={14} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function LegalSupportSection() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const steps = [
    { num: "01", title: "Report the Incident", desc: "Immediately report the incident to the nearest police station or contact DDJC for guidance." },
    { num: "02", title: "Collect Evidence", desc: "Preserve photographs, videos, medical reports, and witness details related to the incident." },
    { num: "03", title: "Legal Consultation", desc: "Meet our team to understand your rights, prepare documentation, and receive free advice." },
    { num: "04", title: "Court Support", desc: "DDJC assists with legal representation, case monitoring, and ongoing judicial guidance." }
  ];

  const faqs = [
    { q: "Who can receive free legal aid?", a: "Free legal aid is available to marginalized individuals, victims of discrimination, and those who cannot afford legal representation." },
    { q: "Are services free?", a: "Yes, our legal consultations, guidance, and direct support services are provided completely free of charge to those in need." },
    { q: "How to report a case?", a: "You can report a case by visiting our office, calling our helpline, or filling out the contact form on our website immediately." },
    { q: "Can I become a volunteer?", a: "Yes. Students, lawyers, researchers, and citizens who wish to support human rights are welcome to join us." }
  ];

  return (
    <section className="py-16 bg-white text-gray-800 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h4 initial="hidden" whileInView="visible" variants={fadeUp} className="text-[#1ab9cb] font-extrabold tracking-[0.2em] uppercase text-lg md:text-xl mb-4">Legal Action</motion.h4>
          <motion.h1 initial="hidden" whileInView="visible" variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-[#0A2540] mb-6">Legal Support When You Need It Most</motion.h1>
          <motion.p initial="hidden" whileInView="visible" variants={fadeUp} className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">DDJC provides free legal guidance, constitutional awareness, and court assistance to ensure equal protection under the law.</motion.p>
        </div>

        {/* Emergency Guide */}
        <div className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Emergency Guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Report Immediately", "Preserve Evidence", "Seek Assistance"].map((title, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-gray-50 p-8 rounded-3xl border-t-4 border-[#2563EB] text-center shadow-sm">
                <h3 className="font-bold text-[#0A2540] mb-3">{title}</h3>
                <p className="text-gray-600 text-sm">Follow our professional protocol to ensure your case is documented and supported legally.</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Complaint Process */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-8 text-center">Our Complaint Process</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2563EB] text-white font-bold shrink-0 shadow-md">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540]">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Box */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>
            <Link to="/contact" className="mt-8 block text-center py-3 bg-[#2563EB] text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md">
              Need more help? Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalSupportSection;