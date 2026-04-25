import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle2, Star, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?q=80&w=2070&auto=format&fit=crop"
            alt="HVAC Installation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
                <Zap className="w-4 h-4" /> #1 HVAC Experts in Kenya
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Professional HVAC <br />
                <span className="text-blue-400">Installation & Repair</span> <br />
                in Kenya
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
                Residential & Commercial Air Conditioning Experts. Fast, reliable, and affordable solutions tailored for your comfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/254706500243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                >
                  <MessageSquare className="w-5 h-5" /> WhatsApp Now
                </a>
                <a
                  href="tel:+254706500243"
                  className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl shadow-white/10"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, text: 'Certified Technicians' },
                  { icon: Clock, text: 'Same-Day Service' },
                  { icon: CheckCircle2, text: 'Warranty Provided' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80">
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive HVAC Solutions</h3>
            <p className="text-slate-600 text-lg">
              From residential cooling to large-scale commercial ventilation, we handle it all with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'A/C Installation', desc: 'Expert setup of split, cassette, and VRF systems.', icon: '❄️' },
              { title: 'A/C Repair', desc: 'Fast diagnostics and fixing of all AC brands.', icon: '🛠️' },
              { title: 'HVAC Maintenance', desc: 'Regular servicing to ensure peak performance.', icon: '🔄' },
              { title: 'Coldroom Systems', desc: 'Installation and maintenance of cold storage.', icon: '🧊' },
              { title: 'Laundry Services', desc: 'Commercial laundry equipment solutions.', icon: '👕' },
              { title: 'Kitchen Appliances', desc: 'Industrial kitchen equipment installation.', icon: '🍳' },
              { title: 'Electrical Works', desc: 'Professional electrical installation and maintenance.', icon: '⚡' },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="HVAC Technician"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm font-medium opacity-90">Years of Excellence</div>
              </div>
            </div>

            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Why Choose Viva Vent</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Kenya's Most Trusted HVAC Partner</h3>
              
              <div className="space-y-8">
                {[
                  { title: 'Fast Response Time', desc: 'We understand the urgency of AC issues in the Kenyan heat.' },
                  { title: 'Experienced Technicians', desc: 'Our team is certified and trained on the latest HVAC technologies.' },
                  { title: 'Affordable Pricing', desc: 'Quality service doesn\'t have to break the bank. Transparent quotes.' },
                  { title: 'Genuine Parts', desc: 'We only use original parts from trusted brands like Carrier and LG.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Premium Systems We Install</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Energy efficient, quiet operation, and long lifespan systems for your comfort.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Split AC Units', img: 'https://images.unsplash.com/photo-1631544666285-3c1362365ff7?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Cassette AC', img: 'https://images.unsplash.com/photo-1621905252507-b354bcadccea?q=80&w=2069&auto=format&fit=crop' },
              { name: 'VRF Systems', img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?q=80&w=2070&auto=format&fit=crop' },
              { name: 'Window Units', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop' },
            ].map((product, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h4 className="text-xl font-bold">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h3>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-slate-600">Join 100+ satisfied clients across Kenya.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Kamau', role: 'Homeowner', text: 'Viva Vent fixed my AC in record time. Very professional and affordable!' },
              { name: 'Sarah Wanjiku', role: 'Property Manager', text: 'Reliable partners for our office building maintenance. Highly recommended.' },
              { name: 'David Omondi', role: 'Business Owner', text: 'The VRF system installation was seamless. Excellent technical expertise.' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <p className="text-slate-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Need AC Installation Today?</h3>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Get a free quote in minutes and experience the best HVAC service in Kenya.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all"
            >
              Request Quote Form
            </Link>
            <a
              href="https://wa.me/254706500243"
              className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
