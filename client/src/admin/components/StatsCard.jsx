import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  icon,
  color = "bg-blue-600",
  textColor = "text-white",
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all"
    >
      <div className="flex items-center justify-between">

        {/* Left */}

        <div>

          <p className="text-sm text-gray-500 mb-2">

            {title}

          </p>

          <h2 className="text-3xl font-bold text-[#0A2540]">

            {value}

          </h2>

        </div>

        {/* Right */}

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${color} ${textColor}`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}

export default StatsCard;