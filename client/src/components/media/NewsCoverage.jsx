import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NewsCoverage() {
  const news = [
    {
      id: 1,
      image: "/images/news/news1.jpg",
      date: "12 June 2026",
      title: "Legal Awareness Camp Conducted in Rural Communities",
      description:
        "DDJC organized a legal awareness programme to educate citizens about constitutional rights, legal aid, and government welfare schemes.",
    },
    {
      id: 2,
      image: "/images/news/news2.jpg",
      date: "28 May 2026",
      title: "Fact Finding Team Visits Incident Location",
      description:
        "Our team documented evidence, met affected families, and prepared an independent report to support legal proceedings.",
    },
    {
      id: 3,
      image: "/images/news/news3.jpg",
      date: "05 April 2026",
      title: "Youth Leadership Workshop Successfully Completed",
      description:
        "Students and young volunteers participated in workshops on constitutional values, leadership, and community engagement.",
    },
  ];

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <section className="py-24 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6">
            News & Updates
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Stay informed about DDJC's legal initiatives, awareness campaigns, community programmes, and important organizational updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-[#2563EB] font-medium">
                  <FaCalendarAlt />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                  {item.description}
                </p>
                <Link
                  to="/stories"
                  className="inline-flex items-center gap-2 mt-6 text-[#2563EB] font-semibold hover:text-blue-800 transition"
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default NewsCoverage;
