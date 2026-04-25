import { motion } from 'motion/react';
import { CheckCircle2, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const serviceCategories = [
    {
      title: 'A/C Services',
      items: [
        { name: 'Installation', desc: 'Professional setup of split, window, and cassette units.' },
        { name: 'Repair', desc: 'Quick diagnostics and fixing of leaks, noises, and cooling issues.' },
        { name: 'Maintenance', desc: 'Periodic cleaning and gas refilling to extend unit life.' },
      ],
      icon: '❄️'
    },
    {
      title: 'HVAC Systems',
      items: [
        { name: 'Full System Installation', desc: 'Complete HVAC design and setup for buildings.' },
        { name: 'Ductwork & Ventilation', desc: 'Optimized air distribution systems.' },
        { name: 'VRF Systems', desc: 'Advanced multi-zone cooling for large offices.' },
      ],
      icon: '💨'
    },
    {
      title: 'Commercial Services',
      items: [
        { name: 'Coldroom Installation', desc: 'Custom cold storage solutions for food and medical supplies.' },
        { name: 'Laundry Systems', desc: 'Professional setup and maintenance of commercial laundry equipment.' },
        { name: 'Kitchen Appliances', desc: 'Installation and repair of industrial kitchen equipment.' },
      ],
      icon: '🧊'
    },
    {
      title: 'Electrical & Maintenance',
      items: [
        { name: 'Electrical Works', desc: 'Reliable electrical wiring, repairs, and maintenance for residential and commercial properties.' },
        { name: 'Maintenance Contracts', desc: 'Comprehensive service plans for long-term reliability.' },
      ],
      icon: '⚡'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Our Professional Services
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide a wide range of HVAC solutions tailored for both residential and commercial needs across Kenya.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <div className="text-6xl mb-6">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{category.title}</h2>
                  <p className="text-slate-600 text-lg mb-8">
                    High-quality solutions designed for performance and longevity.
                  </p>
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Transparent Pricing & Free Inspection</h3>
          <p className="text-blue-800 text-lg">
            We offer competitive rates and free initial inspections for major installations. Contact us for a detailed breakdown.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Need Immediate Assistance?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+254706500243" className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
                <Phone className="w-5 h-5" /> Call +254 706 500 243
              </a>
              <a href="https://wa.me/254706500243" className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all">
                <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
