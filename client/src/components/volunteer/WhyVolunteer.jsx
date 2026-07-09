import {
  FaHandsHelping,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

function WhyVolunteer() {
  const reasons = [
    {
      id: 1,
      icon: <FaHandsHelping />,
      title: "Make a Difference",
      description:
        "Support legal awareness programmes, community outreach, and initiatives that promote justice, equality, and human dignity.",
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      title: "Learn & Grow",
      description:
        "Gain practical experience in community service, legal awareness, leadership, teamwork, and social development.",
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Build Strong Communities",
      description:
        "Work alongside advocates, students, researchers, and volunteers to create lasting social impact across communities.",
    },
  ];

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <section className="py-24 bg-white">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Why Volunteer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6">
            Become Part Of The Change
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Volunteering with DDJC gives you the opportunity to contribute to meaningful social initiatives while developing valuable personal and professional skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div key={item.id} variants={itemVariants} className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WhyVolunteer;
