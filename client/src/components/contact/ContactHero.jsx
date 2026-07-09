import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

function ContactHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animated background shapes
  const FloatingShape = ({ delay, size, top, left, duration }) => (
    <motion.div
      animate={{
        y: [0, 30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: duration || 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className={`absolute ${size} rounded-full opacity-5 blur-3xl pointer-events-none`}
      style={{ top, left }}
    />
  );

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 pb-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50" />

      {/* Animated Background Shapes */}
      <FloatingShape
        size="w-96 h-96"
        top="0%"
        left="-5%"
        delay={0}
        duration={8}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none bg-linear-to-br from-blue-500 to-purple-500"
        style={{ top: "50%", right: "-5%", transform: "translate(0, -50%)" }}
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <FloatingShape
        size="w-72 h-72"
        top="80%"
        left="10%"
        delay={2}
        duration={9}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={scaleIn}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-blue-200/50 shadow-sm mb-8 hover:shadow-md transition-all"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-blue-600" />
              </motion.div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Contact DDJC
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 relative"
          >
            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight text-center">
                We're Here{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    To Help
                  </span>
                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="absolute bottom-1 left-0 right-0 h-3 bg-linear-to-r from-blue-600 to-indigo-600 opacity-10 rounded-full"
                  />
                </span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-10 font-medium"
          >
            Whether you need legal assistance, want to volunteer, support our mission, or have any questions, our team is ready to assist you.
          </motion.p>

          {/* Secondary Text */}
          <motion.p
            variants={fadeInUp}
            className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto text-center mb-12"
          >
            Reach out to DDJC and we'll respond as soon as possible. Your concerns matter to us.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-bold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Top right corner accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl" />
        {/* Bottom left corner accent */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-indigo-200/20 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
}

export default ContactHero;