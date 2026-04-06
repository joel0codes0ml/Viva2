import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const phoneNumber = '254706500243';
  const message = 'Hello Viva Vent, I am interested in your HVAC services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </motion.a>
  );
}
