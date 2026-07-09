import { motion } from "framer-motion";

function ImpactGallery() {
  const gallery = [
    {
      id: 1,
      image: "/images/gallery/gallery1.jpg",
      title: "Legal Awareness Camp",
    },
    {
      id: 2,
      image: "/images/gallery/gallery2.jpg",
      title: "Community Outreach",
    },
    {
      id: 3,
      image: "/images/gallery/gallery3.jpg",
      title: "Fact Finding Mission",
    },
    {
      id: 4,
      image: "/images/gallery/gallery4.jpg",
      title: "Women Empowerment Program",
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
            Impact Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Our Work In Action
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Every campaign, awareness drive, legal intervention, and community programme reflects DDJC's commitment to justice, equality, and human dignity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="group overflow-hidden rounded-3xl shadow-sm border border-gray-100 bg-white hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0A2540]">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ImpactGallery;
