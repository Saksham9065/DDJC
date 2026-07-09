import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919235737691";

  const message =
    "Hello DDJC, I need legal assistance regarding my case.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DDJC on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition duration-300">
        <FaWhatsapp className="text-white text-4xl" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-[#0A2540] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300">
        Chat with DDJC
      </div>
    </a>
  );
}

export default WhatsAppButton;