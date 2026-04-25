import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Toggle (Left on mobile) */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={cn("w-6 h-6", !isScrolled && location.pathname === '/' ? "text-white" : "text-slate-900")} />
            ) : (
              <Menu className={cn("w-6 h-6", !isScrolled && location.pathname === '/' ? "text-white" : "text-slate-900")} />
            )}
          </button>

          {/* Desktop Nav (Left on desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  !isScrolled && location.pathname === '/' ? 'text-white/90 hover:text-white' : 'text-slate-600',
                  location.pathname === link.path && (isScrolled || location.pathname !== '/' ? 'text-blue-600' : 'text-white font-bold')
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Logo (Right side) */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Viva Vent HVAC Ltd Logo" 
              className={cn(
                "h-12 w-auto object-contain",
                !isScrolled && location.pathname === '/' ? "brightness-0 invert" : ""
              )}
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className={cn(
              "text-xl font-bold tracking-tight hidden",
              !isScrolled && location.pathname === '/' ? "text-white" : "text-blue-900"
            )}>
              VIVA VENT
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+254706500243"
                  className="w-full border border-blue-600 text-blue-600 px-4 py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
