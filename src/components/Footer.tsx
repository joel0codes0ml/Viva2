import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Wind, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                VIVA VENT
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Kenya's trusted partner for reliable, fast, and professional HVAC solutions for homes and businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">A/C Installation</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">A/C Repair</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">HVAC Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Refrigeration</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Commercial Systems</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+254706500243" className="hover:text-blue-500 transition-colors">+254 706 500 243</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@vivavent.co.ke" className="hover:text-blue-500 transition-colors">info@vivavent.co.ke</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Viva Vent HVAC Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
