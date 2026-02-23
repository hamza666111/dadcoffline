import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              {/* Logo Image (Vite path) */}
              <img
                src="/src/images/logo.png"
                alt="Dr Ali Dental Centre"
                className="w-10 h-10 object-contain"
              />

              <div>
                <span className="text-xl font-bold text-white">DR ALI</span>
                <p className="text-xs text-sky-400 leading-none">Dental Centre</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Modern dentistry with gentle care,
              compassion, precision, and the latest technology for beautiful, healthy smiles.
            </p>

            {/* SOCIAL MEDIA LINKS */}
            <div className="flex items-center gap-3">

              <a
                href="https://facebook.com/dr.alidentalcentre"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
              </a>

              <a
                href="https://instagram.com/dr.alidentalcentre"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Before & After', to: '/before-after' },
                { label: 'Reviews', to: '/reviews' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Teeth Whitening',
                'Dental Implants',
                'Orthodontics',
                'Root Canal',
                'Veneers',
                'Preventive Care',
                'Emergency Dentistry'
              ].map((s) => (
                <li key={s} className="hover:text-sky-400 transition-colors cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span className="text-sm">
                  Shop #2 Ground Floor (G2, Galaxy Mall, Airport Rd, behind Dominos,
                  Khuda Buksh Colony KB Society, Lahore
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-sm">0328 2333999</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-sm">DrAliDentalCentre1@gmail.com</span>
              </li>
            </ul>

            <a
              href="https://wa.me/923282333999"
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Dr Ali Dental Centre. All rights reserved.
          </p>
          <p className="text-sm">Crafted with care for beautiful smiles</p>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/923282333999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

    </footer>
  );
}
