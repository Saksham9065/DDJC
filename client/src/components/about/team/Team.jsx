import { motion } from "framer-motion";
import kuldeepImg from "/images/team/kuldeep.jpg";
import nikahtImg from "/images/team/nikaht.jpg";
import pradeepImg from "/images/team/pradeep.jpg";
import ushaImg from "/images/team/usha.jpg";
import pradeepKImg from "/images/team/pradeep_k.png";
import anitaImg from "/images/team/anita.jpg";
import sachinImg from "/images/team/sachin.jpg";
import sneshImg from "/images/team/snesh.jpg";

function Team() {
  const leadership = [
    { name: "Adv. Kuldeep Kumar Baudh", role: "Founder - DDJC", education: "MSW, LLB", experience: "15 Yrs Exp", image: kuldeepImg },
    { name: "Adv. Nikhat Parveen", role: "Prog. & Legal Coordinator", education: "LLB, M.Sc. CS", experience: "5 Yrs Exp", image: nikahtImg },
    { name: "Pradeep Kumar Singh", role: "Finance Manager & Accountant", education: "BA, MA, PGDCA", experience: "10 Yrs Exp", image: pradeepImg },
  ];

  const members = [
    { name: "Usha Devi", role: "Tehseel Coordinator (Jalaun)", education: "BSC, BED", experience: "3 Yrs Exp", image: ushaImg },
    { name: "Pradeep Kumar", role: "Tehseel Coordinator (Orai)", education: "BSC, LLB", experience: "5 Yrs Exp", image: pradeepKImg },
    { name: "Anita Devi", role: "Tehseel Coordinator (Kalpi)", education: "12th", experience: "7 Yrs Exp", image: anitaImg },
    { name: "Sachin Kumar", role: "Tehseel Coordinator (Madhaugadh)", education: "BSC, LLB", experience: "3 Yrs Exp", image: sachinImg },
    { name: "Sneshraja", role: "Tehseel Coordinator (Konch)", education: "BA", experience: "20 Yrs Exp", image: sneshImg },
  ];

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.05 } 
    } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 25 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 20, stiffness: 120 }
    } 
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.05 }} 
        className="container mx-auto px-4 max-w-7xl"
      >
        
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mb-2">
            Our Hierarchy
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Our Leaders
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-sm md:text-base text-gray-500 leading-relaxed">
            A multidisciplinary team of advocates, researchers, and community leaders.
          </p>
        </div>

        {/* --- TEAM CARDS CONTAINER --- */}
        {/* Using a flex-col with a strict gap ensures the space between rows is exactly consistent */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* Leadership Grid (Perfectly Centered 3 Columns) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl items-stretch">
              {leadership.map((person, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md"
                >
                  {/* Image */}
                  <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover object-center" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-4 flex flex-col grow justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-base font-bold text-slate-950 leading-tight tracking-tight">
                          {person.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50/70 px-2 py-0.5 rounded shrink-0 whitespace-nowrap mt-0.5">
                          {person.experience}
                        </span>
                      </div>
                      <p className="text-gray-500 font-medium text-xs mt-1 mb-3">
                        {person.role}
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100 flex items-center text-xs">
                      <span className="font-semibold text-gray-400 mr-1.5">Education:</span>
                      <span className="text-gray-700 font-medium truncate">{person.education}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Team Section (5 Columns in one row on large screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
            {members.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                {/* Smaller Image */}
                <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
                </div>
                
                {/* Smaller Content Area for 5-column layout */}
                <div className="p-3 flex flex-col grow justify-between">
                  <div>
                    <div className="flex flex-col xl:flex-row justify-between items-start gap-1.5 mb-1">
                      <h4 className="text-sm font-bold text-slate-950 leading-tight tracking-tight">
                        {member.name}
                      </h4>
                      <span className="text-[9px] font-semibold text-blue-600 bg-blue-50/70 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap mt-0.5">
                        {member.experience}
                      </span>
                    </div>
                    <p className="text-gray-500 font-medium text-[10px] mt-1 mb-2 leading-snug">
                      {member.role}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100 flex items-center text-[10px]">
                    <span className="font-semibold text-gray-400 mr-1">Edu:</span>
                    <span className="text-gray-700 font-medium truncate">{member.education}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default Team;