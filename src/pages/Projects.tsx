import { motion } from 'motion/react';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
  const projects = [
    {
      title: 'Residential AC Installation',
      location: 'Karen, Nairobi',
      desc: 'Full installation of split units for a 5-bedroom villa.',
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Office Building HVAC',
      location: 'Westlands, Nairobi',
      desc: 'VRF system setup for a 4-story commercial office block.',
      img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Hotel Ventilation System',
      location: 'Mombasa',
      desc: 'Ductwork and exhaust systems for a luxury beach resort kitchen.',
      img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Cold Room Setup',
      location: 'Industrial Area, Nairobi',
      desc: 'Large-scale refrigeration system for a food processing plant.',
      img: 'https://images.unsplash.com/photo-1621905252507-b354bcadccea?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Our Portfolio
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore some of our recent HVAC projects across residential, commercial, and industrial sectors in Kenya.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-bold mb-3">
                    <MapPin className="w-4 h-4" /> {project.location}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Project Completed Successfully
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Have a similar project in mind?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Whether it's a single unit or a large-scale industrial system, we have the expertise to deliver.
          </p>
          <Link to="/quote" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
