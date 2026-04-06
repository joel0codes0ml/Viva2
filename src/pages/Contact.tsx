import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have questions or need a service? We're here to help. Reach out to us via any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 mb-4">Available for emergency repairs and inquiries.</p>
                <a href="tel:+254706500243" className="text-blue-600 font-bold text-lg">+254 706 500 243</a>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-600 mb-4">Fastest way to get a response and send photos of your units.</p>
                <a href="https://wa.me/254706500243" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold text-lg">Chat Now</a>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 mb-4">For formal quotes, tenders, and project inquiries.</p>
                <a href="mailto:info@vivavent.co.ke" className="text-purple-600 font-bold text-lg">info@vivavent.co.ke</a>
              </div>
            </div>

            {/* Form & Map */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 transition-all resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button type="button" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600">Nairobi, Kenya. Serving clients nationwide.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl h-fit text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                    <p className="text-slate-600">Mon - Sat: 8:00 AM - 6:00 PM<br />Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
