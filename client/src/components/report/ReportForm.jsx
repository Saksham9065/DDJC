import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

function ReportForm() {
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", incidentType: "", incidentDate: "", location: "", description: "", consent: false, file: null });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your report has been recorded. Backend integration will be connected soon.");
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section 
      id="report-form" 
      className="py-20 md:py-24 bg-gray-50"
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          variants={itemVariants}
          className="text-center flex flex-col items-center mb-16"
        >
          <span className="text-[#2563EB] font-bold tracking-[0.15em] uppercase text-xs mb-3">Confidential Report</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-5">Submit Your Case</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl">Fill in the details below. All information shared with DDJC will be handled confidentially and reviewed by our legal support team.</p>
        </motion.div>

        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit} 
          className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[#0A2540] font-semibold text-sm mb-2">Full Name *</label>
              <input 
                type="text" 
                name="fullName" 
                required 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" 
              />
            </div>
            <div>
              <label className="block text-[#0A2540] font-semibold text-sm mb-2">Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Enter your phone number" 
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" 
              />
            </div>
            <div>
              <label className="block text-[#0A2540] font-semibold text-sm mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" 
              />
            </div>
            <div>
              <label className="block text-[#0A2540] font-semibold text-sm mb-2">Incident Type *</label>
              <select 
                name="incidentType" 
                required 
                value={formData.incidentType} 
                onChange={handleChange} 
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="">Select</option>
                <option>Caste Discrimination</option>
                <option>Violence / Assault</option>
                <option>Denial of Rights</option>
                <option>Women & Child Rights</option>
                <option>Police Complaint</option>
                <option>Legal Assistance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-[#0A2540] font-semibold text-sm mb-2">Incident Date</label>
              <input 
                type="date" 
                name="incidentDate" 
                value={formData.incidentDate} 
                onChange={handleChange} 
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" 
              />
            </div>
            <div>
              <label className="block text-[#0A2540] font-semibold text-sm mb-2">Incident Location</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                placeholder="Location" 
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" 
              />
            </div>
          </div>
          <motion.div variants={itemVariants} className="mt-5">
            <label className="block text-[#0A2540] font-semibold text-sm mb-2">Describe the incident in detail *</label>
            <textarea 
              rows="4" 
              name="description" 
              required 
              value={formData.description} 
              onChange={handleChange} 
              placeholder="Describe what happened..." 
              className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#2563EB]" 
            />
          </motion.div>
          <motion.div variants={itemVariants} className="mt-5">
            <label className="block flex items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-2xl py-8 cursor-pointer hover:border-[#2563EB] transition">
              <span className="text-gray-500 text-sm">Click to upload FIR, Images or Documents</span>
              <input type="file" name="file" onChange={handleChange} className="hidden" />
            </label>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-5 flex items-start gap-3">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="mt-1" />
            <p className="text-gray-600 text-sm leading-relaxed">I confirm that the information provided is true to the best of my knowledge and I consent to DDJC contacting me regarding this case.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-5 flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <FaLock className="text-blue-700" />
            <p className="text-blue-800 text-sm">All reports are handled with strict confidentiality.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <button 
              type="submit" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-8 py-3.5 rounded-full font-bold hover:from-blue-700 transition hover:scale-105"
            >
              Submit Report
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default ReportForm;
