import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shrink-0`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-serif font-bold tracking-tight text-white leading-tight`}
                >
                  Latterhouse Watchtower
                </span>
                <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                  ECCLESIA
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              A community of believers dedicated to loving God, loving people,
              and serving the world with the message of hope.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Sermons", "Events", "Give Online"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-sm hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Adjacent Bank of Africa-Ashaiman Roundabout, Ghana</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>
                  +233 55 060 0911
                  <br />
                  +233 54 633 2693
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@latterhousewatchtower.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Times */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 mb-6 text-sm">
              <li>Sunday Encounter Service: 5:00 PM</li>
              <li>Midweek Wednesday Service: 5:00 PM</li>
            </ul>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@EndunamooGlobal"
                className="p-2 bg-slate-800 rounded-lg hover:bg-red-600 hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Latterhouse Watchtower  Ecclesia.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
