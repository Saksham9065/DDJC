import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ddjcLogo from "/images/logo/ddjc-logo.jpg";

function Footer() {
  const year = new Date().getFullYear();

  const QUICK_LINKS = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-linear-to-b from-slate-900 to-black text-white overflow-hidden">
      
      {/* Subtle background glow effect (kept for depth, but the sharp line is gone) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#1ab9cb]/5 blur-[100px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        // Increased top padding to pt-24
        className="container mx-auto px-6 pt-24 pb-8 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col text-left lg:pr-4">
            <div className="flex items-center gap-4 mb-5 group cursor-pointer">
              <div className="h-14 w-14 rounded-full bg-white overflow-hidden shadow-lg border-2 border-white/10 shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:border-[#1ab9cb]/50 group-hover:shadow-[0_0_20px_rgba(26,185,203,0.3)]">
                <img
                  src={ddjcLogo}
                  alt="DDJC Logo"
                  className="h-full w-full object-cover object-center p-1 rounded-full"
                />
              </div>
              <div>
                <h2 className="text-white font-extrabold text-base leading-tight tracking-wide transition-colors duration-300 group-hover:text-[#1ab9cb]">
                  Dalit Dignity & <br /> Justice Center
                </h2>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Access to Justice • Equality • Human Rights
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/DalitDignityJusticeCenter", color: "hover:bg-[#1877F2]" },
                { icon: FaInstagram, href: "https://www.instagram.com/ddjc_up", color: "hover:bg-[#E4405F]" },
                { icon: FaYoutube, href: "https://www.youtube.com/@ddjcUP", color: "hover:bg-[#FF0000]" },
                { icon: FaTwitter, href: "#", color: "hover:bg-[#1DA1F2]" },
                { icon: FaWhatsapp, href: "https://wa.me/919453645931", color: "hover:bg-[#25D366]" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all duration-300 hover:border-transparent hover:shadow-lg ${social.color}`}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col text-left lg:pl-8">
            {/* Increased font size to text-sm */}
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-[0.15em]">
              Quick Links
            </h3>
            
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `group text-sm font-medium flex items-center transition-all duration-300 hover:translate-x-2 ${
                        isActive 
                          ? "text-[#1ab9cb]" 
                          : "text-slate-400 hover:text-white"
                      }`
                    }
                  >
                    <span className="text-[#1ab9cb] mr-3 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shrink-0">
                      —
                    </span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Mission Statement */}
          <motion.div variants={itemVariants} className="flex flex-col text-left lg:pr-4">
            {/* Increased font size to text-sm */}
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-[0.15em]">
             
            </h3>
            
            <div className="flex flex-col gap-3">
              <p className="text-slate-400 leading-relaxed text-sm font-medium italic">
                Justice has always evoked ideas of equality, of proportion of compensation. In short, Justice is another name of Liberty, Equality and Fraternity.
              </p>
              <p className="text-[#1ab9cb] text-xs font-bold tracking-wide">
                - Babasaheb Dr. B.R. Ambedkar
              </p>
            </div>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col text-left">
            {/* Increased font size to text-sm */}
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-[0.15em]">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#1ab9cb] group-hover:bg-[#1ab9cb] group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaMapMarkerAlt size={11} />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                  Police Line – Baghaura, <br /> Orai – Jalaun, UP - 285001
                </span>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#1ab9cb] group-hover:bg-[#1ab9cb] group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaPhoneAlt size={11} />
                </div>
                <div className="text-slate-400 text-sm leading-relaxed font-medium">
                  <a href="tel:+919235737691" className="block hover:text-[#1ab9cb] transition-colors duration-300">9235737691</a>
                  <a href="tel:+919453645931" className="block hover:text-[#1ab9cb] transition-colors duration-300">9453645931</a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#1ab9cb] group-hover:bg-[#1ab9cb] group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaEnvelope size={11} />
                </div>
                <a
                  href="mailto:ddjc.prayas@gmail.com"
                  className="text-slate-400 hover:text-[#1ab9cb] text-sm font-medium transition-colors duration-300"
                >
                  ddjc.prayas@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Footer Bottom Strip */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center">
          <p className="text-slate-500 text-xs tracking-wider uppercase font-semibold text-center">
            © {year} Dalit Dignity & Justice Center. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;