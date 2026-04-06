import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';

export function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl text-center border border-blue-50"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for reaching out. One of our HVAC experts will contact you within 30 minutes with your free quote.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Get Your <span className="text-blue-600">Free Quote</span> <br />
              in Minutes
            </h1>
            <p className="text-lg text-slate-600 mb-12">
              Fill out the form and our team will get back to you with a professional assessment and pricing for your HVAC needs.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-600 p-3 rounded-xl h-fit text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Fast Response</h4>
                  <p className="text-slate-600">We respond to all quote requests within 30 minutes during business hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 p-3 rounded-xl h-fit text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Expert Consultation</h4>
                  <p className="text-slate-600">Get advice from certified technicians on the best systems for your space.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-slate-900 font-bold mb-4">Prefer instant chat?</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/254706500243"
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
                  >
                    <MessageSquare className="w-5 h-5" /> WhatsApp
                  </a>
                  <a
                    href="tel:+254706500243"
                    className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-all"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+254..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="e.g. Westlands, Nairobi"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all appearance-none bg-white">
                  <option>A/C Installation</option>
                  <option>A/C Repair</option>
                  <option>HVAC Maintenance</option>
                  <option>Commercial Refrigeration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message / Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your needs..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Send className="w-5 h-5" /> Send Request
              </button>
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to be contacted by Viva Vent regarding your request.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
