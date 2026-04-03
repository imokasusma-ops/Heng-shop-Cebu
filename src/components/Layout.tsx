import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Wrench, MessageCircle, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-darker text-white">
      {/* Promo Banner */}
      <div className="bg-primary text-darker text-[10px] sm:text-xs py-1.5 px-4 text-center font-bold uppercase tracking-widest">
        ✔ Bolts, Oil, Tires — Available Daily in Cebu!
      </div>

      {/* Top Bar */}
      <div className="bg-dark text-metallic text-xs py-2 px-4 hidden md:block border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-primary" /> Mandaue City, Philippines</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1 text-primary" /> Mon-Sat: 8AM - 6PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1 text-primary" /> +63 906 047 1550</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-darker border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Wrench className="h-8 w-8 text-primary" />
                <span className="font-heading font-bold text-xl tracking-wider text-white">HENG Shop <span className="text-primary">Cebu</span></span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-metallic'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://www.facebook.com/HengShopUBEC/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary hover:bg-primary-dark text-darker px-5 py-2 rounded font-bold uppercase tracking-wide text-sm transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                MESSAGE US
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-metallic hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark border-b border-gray-800 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider ${
                      location.pathname === link.path ? 'bg-gray-800 text-primary' : 'text-metallic hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark pt-12 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Wrench className="h-6 w-6 text-primary" />
                <span className="font-heading font-bold text-lg tracking-wider text-white">HENG Shop <span className="text-primary">Cebu</span></span>
              </Link>
              <p className="text-metallic text-sm mb-4">
                Affordable motorcycle parts, bolts, and accessories in Cebu. Ready stock available.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-metallic hover:text-primary text-sm transition-colors flex items-center">
                      <ChevronRight className="w-3 h-3 mr-1" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-white mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/shop?category=bolts" className="text-metallic hover:text-primary text-sm transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" /> Bolts & Fasteners</Link></li>
                <li><Link to="/shop?category=oil" className="text-metallic hover:text-primary text-sm transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" /> Engine Oil</Link></li>
                <li><Link to="/shop?category=tires" className="text-metallic hover:text-primary text-sm transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" /> Tires & Tubes</Link></li>
                <li><Link to="/shop?category=brakes" className="text-metallic hover:text-primary text-sm transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-1" /> Brake Parts</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-metallic">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-primary shrink-0" />
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Mandaue+Warehouse+Park+S.+Jayme+St.+Paknaan+Mandaue+City" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Mandaue Warehouse Park, S. Jayme St., Paknaan, Mandaue City, Philippines
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary shrink-0" />
                  <a href="tel:+639060471550" className="hover:text-primary transition-colors font-bold">+63 906 047 1550</a>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary shrink-0" />
                  <span>Mon-Sat: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HENG Shop Cebu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-darker/95 backdrop-blur-sm border-t border-gray-800 z-50">
        <a 
          href="https://www.facebook.com/HengShopUBEC/" 
          target="_blank" 
          rel="noreferrer"
          className="w-full bg-primary text-darker py-4 rounded font-bold uppercase tracking-wide text-sm flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.3)]"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          MESSAGE US NOW
        </a>
      </div>
      
      {/* Spacer for mobile sticky CTA */}
      <div className="h-20 md:h-0"></div>

      {/* Desktop Floating Messenger Button */}
      <a 
        href="https://www.facebook.com/HengShopUBEC/" 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 bg-primary text-darker p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform items-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
}
