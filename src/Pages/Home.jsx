import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, Truck, Trophy } from "lucide-react";
import Banner2 from "../assets/Images/Benner2.jpg";
import Banner3 from "../assets/Images/Benner12.jpg";
import Banner4 from "../assets/Images/Benner4.jpg";
import Banner5 from "../assets/Images/benner10.jpg";
import Banner6 from "../assets/Images/Benner6.jpg";
import Banner7 from "../assets/Images/Benner7.jpg";
import Banner8 from "../assets/Images/Benner11.jpg";
import ProductGrid from "../assets/Components/ProductGrid";
import Footer from "../assets/Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Features/products/ProductSlice";

const categories = ["All", "Graphic Cards", "Laptop", "Monitors", "Power Supply"];

const Home = () => {
  const images = [Banner2, Banner8, Banner3, Banner5, Banner4, Banner7, Banner6];
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.product.selectedCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="w-full bg-[#fbfbfb]">
      
      {/* ===== 0. TOP MARQUEE BAR (ផ្នែកដែលបាត់) ===== */}
      <div className="w-full bg-black py-2.5 overflow-hidden border-b border-orange-600/20">
        <div className="whitespace-nowrap animate-marquee-text inline-block">
          <span className="text-orange-500 font-black uppercase text-[10px] tracking-[0.3em] px-10">
            🔥 New Season Drop: Premium RTX 50-Series Graphics Cards Now Available! 🎮 Free Delivery Worldwide 🚛 Join Gammax Rewards 🏆
          </span>
          {/* បន្ថែមអត្ថបទដដែលដើម្បីឱ្យវាបន្តគ្នាឥតដាច់ */}
          <span className="text-orange-500 font-black uppercase text-[10px] tracking-[0.3em] px-10">
            🔥 New Season Drop: Premium RTX 50-Series Graphics Cards Now Available! 🎮 Free Delivery Worldwide 🚛 Join Gammax Rewards 🏆
          </span>
        </div>
      </div>

      {/* ===== 1. HERO SLIDER ===== */}
      <section className="relative w-full h-[45vh] md:h-[90vh] overflow-hidden bg-black">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={img} alt="Hero" className="w-full h-full object-cover opacity-60" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-16 md:justify-center md:items-center md:text-center md:pb-0">
               <span className="text-orange-500 font-[1000] uppercase tracking-[0.4em] text-[10px] md:text-[12px] mb-4 animate-pulse">
                 New Arrival
               </span>

               {/* Typewriter Animation Area */}
               <div className="flex justify-center items-center mb-10 overflow-hidden">
                 <h1 className="typewriter-text text-white text-3xl md:text-8xl font-[1000] italic uppercase leading-none whitespace-nowrap border-r-4 border-orange-600 pr-2">
                    Premium <span className="text-orange-600">Gaming</span> Gear
                 </h1>
               </div>

               <button className="w-fit bg-orange-600 text-white px-8 py-3.5 rounded-full font-[1000] uppercase text-[10px] md:text-[13px] tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
                 Shop Collection
               </button>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 hover:bg-orange-600 transition-all hidden md:block">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 hover:bg-orange-600 transition-all hidden md:block">
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <div key={i} className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-10 bg-orange-600" : "w-2 bg-white/40"}`} />
          ))}
        </div>
      </section>

      {/* ===== 2. TRUST FEATURES ===== */}
      <section className="relative z-30 -mt-8 px-4 md:-mt-16 md:px-20">
        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4 md:grid md:grid-cols-4 md:overflow-visible">
          <FeatureCard icon={<Truck size={20}/>} title="Free Delivery" />
          <FeatureCard icon={<ShieldCheck size={20}/>} title="Official Hub" />
          <FeatureCard icon={<Zap size={20}/>} title="Fast Checkout" />
          <FeatureCard icon={<Trophy size={20}/>} title="Top Rewards" />
        </div>
      </section>

      {/* ===== 3. CATEGORY & PRODUCTS ===== */}
      <main className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-gray-900">
              Our <span className="text-orange-600">Collections</span>
            </h2>
            <div className="w-16 h-1.5 bg-orange-600 mt-2"></div>
          </div>
          <div className="hidden sm:flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setCategory(cat))}
                className={`px-7 py-3.5 rounded-2xl font-[1000] uppercase text-[10px] tracking-[0.15em] transition-all duration-300 ${
                  selectedCategory === cat ? "bg-black text-white shadow-2xl -translate-y-1" : "bg-black/20 text-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <ProductGrid />
      </main>

      <Footer />

      {/* ===== CSS ANIMATIONS ===== */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Animation សម្រាប់ Top Marquee */
        @keyframes marquee-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-text {
          animation: marquee-text 20s linear infinite;
        }

        /* Animation សម្រាប់ Typewriter ក្នុង Banner */
        .typewriter-text {
          display: inline-block;
          overflow: hidden; 
          width: 0; 
          animation: 
            typing 8s steps(25, end) infinite alternate,
            blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          0% { width: 0; }
          45% { width: 100%; }
          75% { width: 100%; }
          100% { width: 0; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #ea580c; }
        }

        @media (max-width: 768px) {
          .typewriter-text {
            border-r-2 border-orange-600;
          }
        }
      `}</style>
    </div>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="bg-white min-w-[150px] md:min-w-0 p-6 rounded-[24px] shadow-xl border border-gray-50 flex flex-col items-center text-center flex-1 transition-transform hover:-translate-y-2">
    <div className="mb-3 p-3 bg-orange-50 rounded-2xl text-orange-600">{icon}</div>
    <h3 className="font-[1000] text-[10px] md:text-[11px] uppercase tracking-widest text-gray-900">{title}</h3>
  </div>
);

export default Home;