import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900 shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shrink-0`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-tight text-white leading-tight`}>
                Latterhouse Watchtower
              </span>
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                ECCLESIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  text-sm font-semibold transition-colors duration-200
                  ${isActive 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/giving" 
              className="px-5 py-2.5 rounded bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm transition-colors"
            >
              Give Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-800 shadow-xl border-t border-navy-700">
          <div className="px-4 py-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  px-4 py-3 rounded-xl text-base font-medium transition-colors
                  ${isActive ? 'bg-navy-700 text-white' : 'text-gray-300 hover:bg-navy-700 hover:text-white'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/giving" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 mt-4 text-center rounded-xl bg-gold-500 text-white font-bold text-base"
            >
              Give Online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
