import {
  FaBalanceScale,
  FaUsers,
  FaSearch,
  FaBullhorn,
  FaCamera,
  FaLaptop,
} from "react-icons/fa";
import { motion } from "framer-motion";

function VolunteerRoles() {
  const roles = [
    {
      id: 1,
      icon: <FaBalanceScale />,
      title: "Legal Support",
      description:
        "Assist with legal awareness programmes, documentation, and community legal aid activities.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Community Outreach",
      description:
        "Support awareness campaigns, village meetings, workshops, and public engagement activities.",
    },
    {
      id: 3,
      icon: <FaSearch />,
      title: "Research",
      description:
        "Help collect information, prepare reports, and support policy and human rights research.",
    },
    {
      id: 4,
      icon: <FaBullhorn />,
      title: "Events",
      description:
        "Coordinate awareness programmes, seminars, legal camps, and youth leadership events.",
    },
    {
      id: 5,
      icon: <FaCamera />,
      title: "Media & Documentation",
      description:
        "Capture photos, videos, success stories, and manage social media and digital content.",
    },
    {
      id: 6,
      icon: <FaLaptop />,
      title: "Administration",
      description:
        "Provide support in office management, volunteer coordination, and digital record keeping.",
    },
  ];

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <section className="py-24 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Volunteer Roles
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6">
            Choose How You Want To Contribute
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Whether you're a student, lawyer, researcher, designer, or passionate citizen, there is a role where your skills can create meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((item, i) => (
            <motion.div key={item.id} variants={itemVariants} className="bg-white border border-gray-100 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-full bg-[#0A2540] text-white flex items-center justify-center text-xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default VolunteerRoles;
