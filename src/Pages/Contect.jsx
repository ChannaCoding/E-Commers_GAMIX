import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, your message has been sent to GAMMAX Support!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-gray-900 mb-4">
            Contact <span className="text-orange-600 font-black">Support</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Have a question about a product or need technical assistance? Our team is ready to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT: CONTACT INFO --- */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Our Office</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Street 123, Sangkat BKK 1, Phnom Penh, Cambodia</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Direct Call</h4>
                    <p className="text-gray-500 text-sm font-bold">+855 12 345 678</p>
                    <p className="text-gray-500 text-sm font-bold">+855 98 765 432</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Email Us</h4>
                    <p className="text-gray-500 text-sm font-bold">support@gammax.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div>
              <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-[0.3em] mb-4">Follow Our Updates</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-2xl hover:bg-orange-600 transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-2xl hover:bg-orange-600 transition-all duration-300">
                  <MessageSquare size={20} />
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-2xl hover:bg-orange-600 transition-all duration-300">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTACT FORM --- */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-600/5 rounded-full blur-3xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe"
                    value={form.name} 
                    onChange={handleChange} 
                    className="w-full bg-white border-2 border-transparent focus:border-orange-600 rounded-2xl p-4 text-sm outline-none transition-all shadow-sm font-bold"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="example@mail.com"
                    value={form.email} 
                    onChange={handleChange} 
                    className="w-full bg-white border-2 border-transparent focus:border-orange-600 rounded-2xl p-4 text-sm outline-none transition-all shadow-sm font-bold"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">How can we help?</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about your inquiry..."
                  rows="5" 
                  className="w-full bg-white border-2 border-transparent focus:border-orange-600 rounded-2xl p-4 text-sm outline-none transition-all shadow-sm font-bold resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-black text-white font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl transition-all shadow-xl hover:bg-orange-600 active:scale-95 flex items-center justify-center gap-3"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;