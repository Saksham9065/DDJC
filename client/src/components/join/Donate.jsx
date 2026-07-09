import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers, FaHeart } from "react-icons/fa";

function Donate() {
  const impactAreas = [
    {
      icon: <FaHandsHelping />,
      title: "Free Legal Aid",
      description: "Help us provide legal representation and support to marginalized individuals who cannot afford justice.",
    },
    {
      icon: <FaUsers />,
      title: "Community Outreach",
      description: "Fund awareness campaigns, workshops, and field programmes that educate communities about their rights.",
    },
    {
      icon: <FaHeart />,
      title: "Victim Support",
      description: "Support victims of injustice with rehabilitation, counselling, and financial assistance.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3">
            Support Our Cause
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Make A Donation
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Your contribution directly supports legal aid, community empowerment, and justice for marginalized communities. Every rupee counts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#0A2540] to-[#143A61] text-white flex items-center justify-center text-2xl mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#0A2540] to-[#143A61] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Donate Now</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Bank transfers and online donations are accepted. For bulk donations or corporate partnerships, please contact us directly.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-left">
            <p className="text-sm text-gray-300 mb-2 font-semibold">Bank Details:</p>
            <p className="text-white font-mono text-sm">
              Account Name: Dalit Dignity & Justice Center<br />
              Bank: State Bank of India<br />
              Account Number: XXXXXXXXXXXX<br />
              IFSC Code: SBIN000XXXX
            </p>
          </div>
          <p className="text-gray-300 text-sm">
            For donation receipts and queries, email{" "}
            <a href="mailto:donate@ddjc.org" className="text-[#60A5FA] font-semibold hover:underline">
              donate@ddjc.org
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Donate;
