import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import kuldeepImg from "/images/contact/office.jpg";

function AboutSection() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <section className="py-20">
      <motion.div
        className="container mx-auto px-6 max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <h2 className="text-gray-900 text-center text-xl md:text-2xl font-bold mb-6">
              Why is the Dalit Dignity & Justice Centre (DDJC) needed?
            </h2>
            <img
              src={kuldeepImg}
              alt="DDJC Office"
              className="max-w-2xl w-full rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div variants={fadeInUp} className="text-gray-800 space-y-6">
            <p className="leading-relaxed text-lg">
              Every day, through newspapers, TV channels, social media, and our surroundings, we witness various incidents. After these incidents, we see victims struggling in courts and legal offices. They strive for justice at police stations and courts; however, often due to a lack of proper information and legal knowledge, they fail to reach justice. The impact of this is most severe on the victims, affecting their entire families and communities in various ways.
            </p>
            
            <p className="leading-relaxed text-lg">
              To ensure that every individual has access to justice, an understanding of human rights, and that victims receive justice with dignity—and to improve access to government welfare schemes, especially for Dalit and marginalized communities—the Dalit Dignity & Justice Centre (DDJC) was launched in October 2023 by the Bundelkhand Dalit Adhikar Manch.
            </p>

            <motion.div variants={fadeInUp}>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
