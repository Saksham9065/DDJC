import {
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

function WhoWeAre() {
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
      opacity: 1, 
      y: 0,
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
        
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div variants={itemVariants} className="mb-10">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero/1.jpg`} 
              alt="Adv. Kuldeep Kumar Baudh" 
              className="rounded-3xl shadow-xl w-full object-cover h-64 md:h-80"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-8 leading-tight">
              A Step Towards <br /> Justice and Dignity
            </h2>
            
            <motion.div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
              <div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Why is DDJC Needed?</h3>
                <p>
                  Every day, through newspapers, TV channels, social media, or in our surroundings, we witness various incidents. Following these events, victims often find themselves making endless rounds of police stations and courts. Due to a lack of proper legal information and awareness, many fail to access justice. This takes a severe toll not only on the victims but also on their entire families and communities.
                </p>
              </div>

              <p>
                To ensure that every individual has access to justice, understands their human rights, and receives justice with dignity, the <strong className="text-[#0A2540]">Dalit Dignity and Justice Centre (DDJC)</strong> was established on <strong className="text-[#0A2540]">October 9, 2023</strong>. We work to connect people, especially Dalit and marginalized communities, with various public welfare schemes run by the government.
              </p>

              <div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Our Main Objective</h3>
                <p>
                  The primary objective of DDJC is to secure justice and dignity for everyone, especially in light of rising cases of Dalit atrocities, POCSO offenses, and violence against women. With many cases going unregistered and victims left wandering for help, this center serves as their core support system. 
                </p>
                <p className="mt-4">
                  We strive to raise community awareness so villagers can build a basic understanding of human rights and judicial processes, gain legal knowledge, and benefit from government welfare schemes. DDJC aims to be the pathway for every victim to attain justice with dignity.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: <FaUsers />, stat: "200+", label: "Trained Leaders" },
            { icon: <FaBalanceScale />, stat: "Court Support", label: "Lower to High Court" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants} 
              className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-linear-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center text-xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] to-[#0A2540]">
                {item.stat}
              </h3>
              <p className="text-gray-600 mt-2 text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
}

export default WhoWeAre;
