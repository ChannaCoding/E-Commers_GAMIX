import { Facebook, Twitter, Youtube, Send, MapPin, Phone, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white font-sans">
      {/* ===== NEWSLETTER SECTION ===== */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white">
                Join the GAMMAX Community
              </h2>
              <p className="text-orange-100 font-medium mt-2 tracking-wide uppercase text-xs">
                Subscribe for exclusive deals and gaming gear updates.
              </p>
            </div>

            <form className="w-full max-w-md relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-4 px-6 rounded-2xl text-gray-900 bg-white border-none focus:ring-4 focus:ring-orange-400 outline-none transition-all placeholder:text-gray-400 font-medium"
              />
              <button
                className="absolute right-2 top-2 bottom-2 bg-gray-900 text-white px-6 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all flex items-center gap-2 group-hover:gap-3"
              >
                Subscribe <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black italic tracking-tighter flex items-center gap-2">
               GAMMAX
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              Your ultimate destination for premium gaming hardware and computer peripherals in Cambodia. High performance meets bold design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-900 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-900 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-900 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-8 underline decoration-2 underline-offset-8">Quick Pages</h2>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">Support (FAQs)</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-8 underline decoration-2 underline-offset-8">Categories</h2>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link to="/monitors" className="text-gray-400 hover:text-white transition-colors">Gaming Monitors</Link></li>
              <li><Link to="/gpus" className="text-gray-400 hover:text-white transition-colors">Graphics Cards</Link></li>
              <li><Link to="/laptop" className="text-gray-400 hover:text-white transition-colors">Laptops</Link></li>
              <li><Link to="/supply" className="text-gray-400 hover:text-white transition-colors">Power Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-8 underline decoration-2 underline-offset-8">Find Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-orange-600 shrink-0" />
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                  Street 123, Sangkat BKK 1,<br />
                  Phnom Penh, Cambodia
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-orange-600 shrink-0" />
                <p className="text-sm text-gray-400 font-bold">+855 12 345 678</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-orange-600 shrink-0" />
                <p className="text-sm text-gray-400 font-bold">info@gammax.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
          <p>© {new Date().getFullYear()} GAMMAX Cambodia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;