import {
  FaUsers,
  FaBalanceScale,
  FaGavel,
  FaHandsHelping,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const numericEnd = parseInt(end.replace(/,/g, ""), 10);
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * numericEnd);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(numericEnd);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{end.includes("+") ? "+" : ""}</span>;
}

function Impact() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "15,000+",
      title: "People Reached",
    },
    {
      icon: <FaBalanceScale />,
      number: "500+",
      title: "Legal Cases",
    },
    {
      icon: <FaGavel />,
      number: "300+",
      title: "Court Matters",
    },
    {
      icon: <FaHandsHelping />,
      number: "100+",
      title: "Awareness Camps",
    },
  ];

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 30, scale: 0.9 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    } 
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        className="container mx-auto px-6"
      >
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">
            Creating Change Through Justice
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">
            Every number reflects our commitment to protecting rights, empowering communities, and ensuring equal access to justice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#0A2540] text-white flex items-center justify-center text-xl mb-6">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] to-[#0A2540]">
                <AnimatedCounter end={item.number} duration={2.5} />
              </h3>
              <p className="text-gray-600 mt-2 text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Impact;
