import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, AlertCircle, CheckCircle } from "lucide-react";

// 1. Moved variants outside to prevent recreation on re-renders
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// 2. Moved InputField outside to prevent focus-loss bugs and improve performance
const InputField = ({ field, value, onChange, error }) => {
  const inputBaseClasses = `w-full px-4 py-2.5 rounded-lg border transition-all text-sm font-medium outline-none
    ${
      error
        ? "border-red-500 bg-red-50"
        : "border-gray-300 bg-white/80 hover:bg-white hover:border-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
    }`;

  return (
    <motion.div variants={itemVariants} className="space-y-2">
      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-gray-700"
      >
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {field.type === "select" ? (
        <select
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          className={inputBaseClasses}
          required={field.required}
        >
          <option value="">{field.placeholder || `Select ${field.label}`}</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          rows="4"
          className={`${inputBaseClasses} resize-none`}
          required={field.required}
        />
      ) : (
        <input
          id={field.name}
          type={field.type}
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          className={inputBaseClasses}
          required={field.required}
          min={field.min}
          max={field.max}
        />
      )}
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 text-red-600 text-xs font-medium"
        >
          <AlertCircle size={14} />
          {error}
        </motion.div>
      )}
    </motion.div>
  );
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    age: "",
    gender: "",
    caste: "",
    incidentDetails: "",
    helpRequired: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this specific field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 1 || formData.age > 120) {
      newErrors.age = "Age must be between 1-120";
    }
    
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.caste) newErrors.caste = "Caste is required";
    if (!formData.incidentDetails.trim()) newErrors.incidentDetails = "Please describe the incident";
    if (!formData.helpRequired.trim()) newErrors.helpRequired = "Please specify help required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form and success message after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          fatherName: "",
          age: "",
          gender: "",
          caste: "",
          incidentDetails: "",
          helpRequired: "",
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/20 mb-6"
          >
            <Mail className="text-white" size={32} />
          </motion.div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Book Your Consultation
          </h1>
          <p className="text-gray-600 text-base max-w-lg mx-auto">
            Share your details securely, and our team will connect with you shortly to provide expert legal assistance.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 sm:p-10 space-y-8"
        >
          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200"
            >
              <CheckCircle className="text-green-600 shrink-0" size={24} />
              <div>
                <p className="font-semibold text-green-900">Request submitted successfully!</p>
                <p className="text-sm text-green-700">We will review your details and get back to you shortly.</p>
              </div>
            </motion.div>
          )}

          {/* Section 1: Personal Information */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 pb-2 border-b border-gray-200/60">
              <User size={22} className="text-blue-600" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                field={{ name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" }}
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                field={{ name: "age", label: "Age", type: "number", required: true, min: "1", max: "120", placeholder: "25" }}
                value={formData.age}
                onChange={handleChange}
                error={errors.age}
              />
              <InputField
                field={{ name: "fatherName", label: "Father/Husband Name", type: "text", required: false, placeholder: "Optional" }}
                value={formData.fatherName}
                onChange={handleChange}
                error={errors.fatherName}
              />
              <InputField
                field={{ name: "gender", label: "Gender", type: "select", required: true, options: ["Male", "Female", "Other"] }}
                value={formData.gender}
                onChange={handleChange}
                error={errors.gender}
              />
            </div>
          </motion.div>

          {/* Section 2: Contact Information */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 pb-2 border-b border-gray-200/60">
              <Phone size={22} className="text-blue-600" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                field={{ name: "email", label: "Email Address", type: "email", required: true, placeholder: "john@example.com" }}
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                field={{ name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "9876543210" }}
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                field={{ name: "caste", label: "Select Category", type: "select", required: true, options: ["SC", "ST", "OBC", "Minority", "General"] }}
                value={formData.caste}
                onChange={handleChange}
                error={errors.caste}
              />
            </div>
          </motion.div>

          {/* Section 3: Case Details */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 pb-2 border-b border-gray-200/60">
              Case Details
            </h2>
            <InputField
              field={{
                name: "incidentDetails",
                label: "Brief Description of Incident",
                type: "textarea",
                required: true,
                placeholder: "Describe what happened in detail...",
              }}
              value={formData.incidentDetails}
              onChange={handleChange}
              error={errors.incidentDetails}
            />
            <InputField
              field={{
                name: "helpRequired",
                label: "What Help Are You Looking For?",
                type: "textarea",
                required: true,
                placeholder: "Tell us how we can assist you...",
              }}
              value={formData.helpRequired}
              onChange={handleChange}
              error={errors.helpRequired}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full sm:w-auto sm:px-12 py-3.5 rounded-xl font-bold text-white transition-all duration-300 mx-auto block
                ${
                  isSubmitting
                    ? "bg-indigo-300 cursor-not-allowed"
                    : "bg-linear-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Submitting Request...
                </span>
              ) : (
                "Submit Consultation Request"
              )}
            </motion.button>
          </motion.div>

          {/* Footer Note */}
          <motion.p variants={itemVariants} className="text-center text-sm text-gray-500 mt-4">
            Your information is secure and will only be used to assist you with your legal matter.
          </motion.p>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default ContactForm;