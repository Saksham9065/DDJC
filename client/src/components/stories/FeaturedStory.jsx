import { Link } from "react-router-dom";
import { FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

function FeaturedStory() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const imageVariants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
  const textVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

  return (
    <section className="py-20 md:py-24 bg-white">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-6"
      >
        <motion.div variants={fadeInUp} className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3">
            Featured Story
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Justice That Changed Lives
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Every case we support represents courage, resilience, and the collective effort to uphold constitutional rights and human dignity.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <motion.div variants={imageVariants}>
            <img
              src="/images/gallery/gallery1.jpg"
              alt="Featured Story"
              className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-xl"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full font-bold">
              <FaBalanceScale />
              Success Story
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mt-5 mb-5 leading-tight">
              Standing Together
              <br />
              For Equal Justice
            </h3>
            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
              DDJC supported a family facing discrimination by providing legal guidance, documenting evidence, and coordinating with authorities. Through continuous legal assistance and community support, the affected family successfully secured justice and government protection.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
              This story reflects DDJC's commitment to ensuring that every individual has access to justice, dignity, and constitutional rights regardless of their background.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#2563EB] text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition hover:scale-105"
            >
              Read Full Story
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FeaturedStory;
