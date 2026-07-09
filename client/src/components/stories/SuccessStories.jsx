import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function SuccessStories() {
  const stories = [
    {
      id: 1,
      image: "/images/gallery/gallery2.jpg",
      title: "Legal Aid Restored Hope",
      description:
        "DDJC provided legal guidance and continuous support to help a family secure justice and access government protection.",
    },
    {
      id: 2,
      image: "/images/gallery/gallery3.jpg",
      title: "Community Awareness Campaign",
      description:
        "Our awareness programme empowered local communities with knowledge about constitutional rights and legal remedies.",
    },
    {
      id: 3,
      image: "/images/gallery/gallery4.jpg",
      title: "Youth Leading Social Change",
      description:
        "Young volunteers trained by DDJC organized awareness drives and inspired others to stand for equality and justice.",
    },
  ];

  const itemVariants = { 
    hidden: { opacity: 0, y: 30, scale: 0.95 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    } 
  };
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    } 
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        className="container mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3">
            More Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Real Stories. Real Impact.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Behind every success story is a person, a family, or a community whose lives have been positively transformed through legal support and collective action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <motion.div 
              key={story.id} 
              variants={itemVariants} 
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-7">
                <div className="flex items-center gap-2 text-[#2563EB]">
                  <FaHeart />
                  <span className="text-sm font-medium">
                    Success Story
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mt-4">
                  {story.title}
                </h3>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                  {story.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-5 text-[#2563EB] font-semibold hover:gap-3 transition-all"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SuccessStories;
