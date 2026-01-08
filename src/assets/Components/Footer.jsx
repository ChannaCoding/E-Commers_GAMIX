import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { 
  Facebook, Twitter, Youtube, Send, MapPin, 
  Phone, Mail, ChevronRight 
} from "lucide-react";

// Import action ពី ProductSlice
import { setCategory } from "../../Features/products/ProductSlice"; 

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function សម្រាប់ប្តូរ Category និងរុញទៅទំព័រ Home
  const handleCategoryClick = (categoryName) => {
    dispatch(setCategory(categoryName)); // បញ្ជាទៅ Redux
    navigate("/");                       // ទៅទំព័រដើម
    window.scrollTo({ top: 0, behavior: 'smooth' }); // អូសទៅលើវិញ
  };

  return (
    <footer className="bg-gray-950 text-white font-sans mt-20">
      {/* ===== NEWSLETTER SECTION ===== */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-[1000] uppercase italic tracking-tighter text-white">
                Join GAMMAX Community
              </h2>
              <p className="text-orange-100 font-medium mt-2 tracking-wide uppercase text-xs">
                Get exclusive deals on premium gaming hardware.
              </p>
            </div>

            <form className="w-full max-w-md relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-4 px-6 rounded-2xl text-gray-900 bg-white border-none focus:ring-4 focus:ring-orange-400 outline-none transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gray-900 text-white px-6 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all flex items-center gap-2">
                Join <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-[1000] italic tracking-tighter">
               GAM<span className="text-orange-600">MAX</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
              High-performance gaming gear and computer peripherals. Bold design for serious gamers in Cambodia.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-gray-900 rounded-xl hover:bg-orange-600 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-8 underline decoration-2 underline-offset-8">Support</h2>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-orange-500 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories - ភ្ជាប់ជាមួយ Redux */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-8 underline decoration-2 underline-offset-8">Categories</h2>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              {[
                { label: "All Products", value: "All" },
                { label: "Graphics Cards", value: "Graphic Cards" },
                { label: "Laptops", value: "Laptop" },
                { label: "Gaming Monitors", value: "Monitors" },
                { label: "Power Solutions", value: "Power Supply" }
              ].map((cat) => (
                <li key={cat.value}>
                  <button
                    onClick={() => handleCategoryClick(cat.value)}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-all group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-8 underline decoration-2 underline-offset-8">Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-orange-600" />
                <p className="text-sm text-gray-400 font-medium">BKK1, Phnom Penh, Cambodia</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-orange-600" />
                <p className="text-sm text-gray-400 font-bold">+855 12 345 678</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-orange-600" />
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