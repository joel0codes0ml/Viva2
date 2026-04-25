import { motion } from 'motion/react';
import { CheckCircle2, Wind, ShieldCheck, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Wind className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            About Viva Vent HVAC Limited
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Kenya's trusted partner for reliable, fast, and professional HVAC solutions for homes and businesses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded with a mission to provide superior climate control solutions in Kenya, Viva Vent has grown into a leading HVAC contractor. We specialize in everything from simple residential AC repairs to complex commercial ventilation systems.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our team of certified technicians brings years of experience and a commitment to excellence to every project. We believe that comfort is a necessity, and we work tirelessly to ensure our clients enjoy the best air quality and temperature control.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Satisfied Clients</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Viva Vent HVAC Technicians in navy blue overalls"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that drive our commitment to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Reliability', desc: 'We show up on time and deliver what we promise, every single time.' },
              { icon: Zap, title: 'Efficiency', desc: 'We optimize systems for maximum performance and minimum energy consumption.' },
              { icon: Award, title: 'Quality', desc: 'We use only the best parts and follow industry-standard installation practices.' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-slate-600">The visionary team behind Viva Vent's success.</p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-sm w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="aspect-[4/5] bg-slate-200 flex items-center justify-center relative group">
                <Users className="w-20 h-20 text-slate-400" />
                {/* Fallback image placeholder */}
                <div className="absolute inset-0 bg-blue-900/5 transition-opacity group-hover:opacity-0" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ronny Otieno Onyango</h3>
                <p className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">Team Leader & Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to experience the Viva Vent difference?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all">
              Contact Us Today
            </Link>
            <Link to="/quote" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
