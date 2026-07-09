import { motion } from "framer-motion";

const openings = [
  {
    id: 1,
    title: "Legal Aid Volunteer",
    type: "Full-time / Part-time",
    location: "Orai, Jalaun, UP",
    description:
      "Support our legal aid initiatives by assisting victims, documenting cases, and coordinating with advocates. Fresh graduates and law students are welcome.",
  },
  {
    id: 2,
    title: "Community Outreach Coordinator",
    type: "Full-time",
    location: "Jalaun District",
    description:
      "Plan and execute awareness programmes, community workshops, and field activities across rural and urban areas.",
  },
  {
    id: 3,
    title: "Research Associate",
    type: "Contract / Full-time",
    location: "Remote / Orai",
    description:
      "Conduct legal research, draft reports, and support policy advocacy initiatives focused on marginalized communities.",
  },
  {
    id: 4,
    title: "Field Investigator",
    type: "Contract",
    location: "Bundelkhand Region",
    description:
      "Visit incident sites, collect evidence, interview affected families, and prepare fact-finding reports for legal and advocacy use.",
  },
];

function Careers() {
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
            Careers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Join Our Team
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            DDJC is always looking for passionate individuals who believe in justice, equality, and human rights. Explore open positions below.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {openings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">{job.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-500">
                    <span className="bg-white border border-gray-200 rounded-full px-3 py-1">{job.type}</span>
                    <span className="bg-white border border-gray-200 rounded-full px-3 py-1">{job.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don&apos;t see a role that fits? Send your resume to{" "}
            <a href="mailto:careers@ddjc.org" className="text-[#2563EB] font-semibold hover:underline">
              careers@ddjc.org
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Careers;
