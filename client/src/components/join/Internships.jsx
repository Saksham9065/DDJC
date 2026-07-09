import { motion } from "framer-motion";

const internships = [
  {
    id: 1,
    title: "Legal Intern",
    duration: "3-6 Months",
    stipend: "Unpaid / Stipend Available",
    description:
      "Work with our legal team on case research, documentation, client support, and court coordination. Ideal for law students.",
  },
  {
    id: 2,
    title: "Research Intern",
    duration: "2-4 Months",
    stipend: "Unpaid",
    description:
      "Assist in fact-finding missions, data collection, report writing, and policy research related to Dalit rights and social justice.",
  },
  {
    id: 3,
    title: "Media & Communications Intern",
    duration: "2-3 Months",
    stipend: "Unpaid",
    description:
      "Support content creation, social media management, event coverage, and press release drafting for our media initiatives.",
  },
  {
    id: 4,
    title: "Community Development Intern",
    duration: "3-6 Months",
    stipend: "Unpaid / Stipend Available",
    description:
      "Engage with communities, conduct awareness workshops, assist in programme planning, and support field-level implementation.",
  },
];

function Internships() {
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
            Internships
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Learn While You Serve
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            DDJC offers hands-on internship opportunities for students and young professionals committed to social justice, legal aid, and community empowerment.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {internships.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-500">
                    <span className="bg-white border border-gray-200 rounded-full px-3 py-1">{item.duration}</span>
                    <span className="bg-white border border-gray-200 rounded-full px-3 py-1">{item.stipend}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested? Apply by sending your CV and cover letter to{" "}
            <a href="mailto:internships@ddjc.org" className="text-[#2563EB] font-semibold hover:underline">
              internships@ddjc.org
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Internships;
