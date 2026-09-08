import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

function WhatsAppButton() {
  const whatsappNumber = "919920106800";

  const message = encodeURIComponent(
    "Hi PrathamSwad, I would like to know more about your products."
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PrathamSwad on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.5,
        duration: 0.5,
        type: "spring",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={25} strokeWidth={2} />

      {/* Ping */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </motion.a>
  );
}

export default WhatsAppButton;