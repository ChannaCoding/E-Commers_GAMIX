import React from 'react'
import { HelpCircle, ShieldCheck, Truck, CreditCard, Laptop, Wrench, MessageCircle, PhoneCall, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const faqs = [
  {
    title: "Order & Delivery",
    question: "How long does delivery take?",
    answer: "Delivery takes 1–3 days in Phnom Penh and 3–5 days in provinces.",
    icon: <Truck size={24} />
  },
  {
    title: "Warranty",
    question: "Is there a product warranty?",
    answer: "All GAMMAX products come with a 1-2 year official warranty depending on the model.",
    icon: <ShieldCheck size={24} />
  },
  {
    title: "Return Policy",
    question: "Can I return a product?",
    answer: "Returns are accepted within 7 days if the product has a factory defect.",
    icon: <HelpCircle size={24} />
  },
  {
    title: "Technical Support",
    question: "Is software support available?",
    answer: "Yes, we provide free Windows & driver installation for all new PC builds.",
    icon: <Wrench size={24} />
  },
  {
    title: "Upgradability",
    question: "Can I upgrade my gear?",
    answer: "Most of our laptops and PCs are upgradable. Contact us for compatibility checks.",
    icon: <Laptop size={24} />
  },
  {
    title: "Payment",
    question: "What payment methods are available?",
    answer: "We accept ABA Bank, Wing, ACLEDA, and Cash on Delivery.",
    icon: <CreditCard size={24} />
  },
];

const FAQs = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
            Support Center
          </span>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-gray-900 leading-tight">
            How can we <span className="text-orange-600 underline decoration-gray-200 underline-offset-8">help you?</span>
          </h1>
          <p className="text-gray-500 mt-6 max-w-2xl font-medium">
            Find quick answers to common questions about GAMMAX gear, delivery, and professional support services.
          </p>
        </div>

        {/* --- FAQ Grid --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-500/10 border border-gray-800 overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-600/10 rounded-full blur-3xl group-hover:bg-orange-600/20 transition-all"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-600 text-white rounded-2xl mb-6 shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform duration-500">
                  {faq.icon}
                </div>

                <h3 className="text-orange-500 font-black uppercase tracking-widest text-[10px] mb-2">
                  {faq.title}
                </h3>
                
                <p className="text-white font-bold text-lg mb-4 leading-tight">
                  {faq.question}
                </p>

                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5 text-gray-400 text-sm leading-relaxed font-medium">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}

          {/* --- Special Contact Card --- */}
          <div className="bg-orange-600 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-orange-600/20 relative overflow-hidden group">
            {/* Abstract Pattern */}
            <div className="absolute right-[-10%] bottom-[-10%] opacity-20 group-hover:scale-110 transition-transform duration-700">
                <HelpCircle size={150} color="white" strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-4 leading-tight">
                Can't find what you're looking for?
              </h3>
              <p className="text-orange-100 font-medium text-sm leading-relaxed">
                Our support team is available from 8:00 AM - 8:00 PM to assist you.
              </p>
            </div>

            <Link to="/contact" className="relative z-10 mt-10">
              <button className="w-full bg-black text-white px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-95 shadow-xl">
                Chat With Us <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* --- Support Channels Section --- */}
        <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:border-orange-200 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <MessageCircle size={28} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Join our community</p>
              <h4 className="text-lg font-bold text-gray-900 tracking-tight">Telegram Support</h4>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:border-orange-200 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <PhoneCall size={28} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Direct Call</p>
              <h4 className="text-lg font-bold text-gray-900 tracking-tight">+855 12 345 678</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FAQs