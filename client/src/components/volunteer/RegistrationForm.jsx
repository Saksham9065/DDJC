import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaHandsHelping, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", profession: "", interest: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thank you for your interest! We will be in touch.");
      setFormData({ name: "", email: "", phone: "", city: "", profession: "", interest: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const formFields = [
    { name: "name", label: "Full Name", icon: FaUser, type: "text", placeholder: "John Doe" },
    { name: "phone", label: "Phone Number", icon: FaPhone, type: "tel", placeholder: "+91 00000 00000" },
    { name: "email", label: "Email Address", icon: FaEnvelope, type: "email", placeholder: "john@example.com" },
    { name: "city", label: "City", icon: FaMapMarkerAlt, type: "text", placeholder: "Lucknow" },
    { name: "profession", label: "Profession", icon: FaBriefcase, type: "text", placeholder: "Lawyer, Student, etc." },
    { name: "interest", label: "Area of Interest", icon: FaHandsHelping, type: "select" },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const itemVariants = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4 md:px-6 max-w-3xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mb-2">Become A part of DDJC</h2>
           <p className="text-gray-600 max-w-full mx-auto text-sm md:text-base text-center whitespace-nowrap">Join our volunteer network to help us advance justice and equality.</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {formFields.map((field) => (
                <motion.div 
                  key={field.name} 
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <label className="text-xs font-bold text-[#0A2540] flex items-center gap-2 uppercase tracking-wide">
                    <field.icon className="text-[#2563EB] text-sm" />
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select 
                      name={field.name} 
                      value={formData.interest} 
                      onChange={handleChange} 
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#2563EB] outline-none transition-all text-sm"
                    >
                      <option value="">Select an interest</option>
                      <option>Legal Support</option>
                      <option>Community Outreach</option>
                      <option>Research</option>
                      <option>Media & Documentation</option>
                      <option>Event Management</option>
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#2563EB] outline-none transition-all text-sm"
                      placeholder={field.placeholder}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#0A2540] uppercase tracking-wide">Why do you want to volunteer?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#2563EB] outline-none transition-all resize-none text-sm"
                placeholder="Tell us a little bit about yourself..."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A2540] to-[#143A61] text-white py-2.5 rounded-lg font-bold hover:from-[#2563EB] transition disabled:opacity-50 hover:scale-[1.02] text-sm"
              >
                {isSubmitting ? "Submitting..." : <><FaPaperPlane /> Submit Application</>}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default RegistrationForm;
