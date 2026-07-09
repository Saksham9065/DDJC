import {
  FaBalanceScale,
  FaBookOpen,
  FaFileDownload,
  FaUniversity,
  FaShieldAlt,
  FaGavel,
} from "react-icons/fa";
import { motion } from "framer-motion";

function KnowRights() {
  const rights = [
    {
      id: 1,
      icon: <FaBalanceScale />,
      title: "Equality Before Law",
      description:
        "Every citizen has the right to equal protection under the Constitution without discrimination based on caste, religion, gender, or community.",
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: "Protection Against Atrocities",
      description:
        "Victims of caste-based violence and discrimination are protected under the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act.",
    },
    {
      id: 3,
      icon: <FaGavel />,
      title: "Free Legal Aid",
      description:
        "Eligible persons have the right to receive free legal assistance through Legal Services Authorities and recognized legal aid organizations.",
    },
    {
      id: 4,
      icon: <FaUniversity />,
      title: "Compensation & Rehabilitation",
      description:
        "Victims may be entitled to government compensation, rehabilitation assistance, and witness protection under applicable laws.",
    },
  ];

  const resources = [
    {
      title: "Know Your Rights Guide",
      file: "/documents/know-your-rights.pdf",
    },
    {
      title: "Complaint Filing Guide",
      file: "/documents/complaint-guide.pdf",
    },
    {
      title: "Legal Aid Handbook",
      file: "/documents/legal-aid-handbook.pdf",
    },
  ];

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <section className="py-24 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Know Your Rights
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6">
            Constitutional & Legal Protection
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Every citizen deserves dignity, equality, and access to justice. Learn about your legal rights and the protections available under Indian law.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {rights.map((item, i) => (
            <motion.div key={item.id} variants={itemVariants} className="bg-white border border-gray-100 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-24">
          <div className="text-center mb-12">
            <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Legal Resources
            </span>
            <h3 className="text-4xl font-extrabold text-[#0A2540] mt-4">
              Download Helpful Guides
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white border border-gray-100 rounded-3xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#0A2540] text-white flex items-center justify-center text-xl mb-6">
                  <FaBookOpen />
                </div>
                <h4 className="text-xl font-bold text-[#0A2540] mt-2 mb-6">
                  {resource.title}
                </h4>
                <a
                  href={resource.file}
                  download
                  className="inline-flex items-center gap-3 bg-[#2563EB] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                >
                  <FaFileDownload />
                  Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-24 bg-[#0A2540] border border-gray-700 rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold text-white">
            Justice Begins With Awareness
          </h3>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Knowing your rights empowers you to stand against discrimination, injustice, and exploitation. DDJC is committed to ensuring every individual has access to legal knowledge and constitutional protection.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default KnowRights;
