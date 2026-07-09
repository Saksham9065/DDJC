import { FaImages } from "react-icons/fa";
import { motion } from "framer-motion";

function GallerySection() {
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
      title: "Women Empowerment Programme",
    },
  ];

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <section className="py-24 bg-white">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6">
            Moments That Matter
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Explore highlights from DDJC's legal aid camps, awareness drives, community meetings, youth programmes, and human rights initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gallery.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="group overflow-hidden rounded-3xl shadow-sm border border-gray-100 bg-gray-50">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#2563EB]">
                  <FaImages />
                  <span className="text-sm font-medium">
                    DDJC Activity
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mt-3">
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

export default GallerySection;
