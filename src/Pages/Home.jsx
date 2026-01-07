import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, Truck, Trophy } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

// === 1. IMPORT COMPONENTS ===
import ProductGrid from "../assets/Components/ProductGrid";
import Footer from "../assets/Components/Footer";
import { setCategory } from "../Features/products/ProductSlice";

// === 2. IMPORT IMAGES ===
import Banner2 from "../assets/Images/Benner2.jpg";
import Banner3 from "../assets/Images/Benner12.jpg";
import Banner4 from "../assets/Images/Benner4.jpg";
import Banner5 from "../assets/Images/Benner10.jpg";
import Banner6 from "../assets/Images/Benner6.jpg";
import Banner7 from "../assets/Images/Benner7.jpg";
import Banner8 from "../assets/Images/Benner11.jpg";

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
      
      {/* ===== 0. TOP MARQUEE BAR ===== */}
      <div className="w-full bg-black py-2 overflow-hidden border-b border-orange-600/20">
        <div className="whitespace-nowrap animate-marquee-text inline-block">
          <span className="text-orange-500 font-black uppercase text-[8px] md:text-[10px] tracking-[0.3em] px-10">
            🔥 New Season Drop: Premium RTX 50-Series Graphics Cards Now Available! 🎮 Free Delivery Worldwide 🚛 Join Gammax Rewards 🏆
          </span>
          <span className="text-orange-500 font-black uppercase text-[8px] md:text-[10px] tracking-[0.3em] px-10">
            🔥 New Season Drop: Premium RTX 50-Series Graphics Cards Now Available! 🎮 Free Delivery Worldwide 🚛 Join Gammax Rewards 🏆
          </span>
        </div>
      </div>

      {/* ===== 1. HERO SLIDER ===== */}
      <section className="relative w-full h-[40vh] md:h-[90vh] overflow-hidden bg-black">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={img} alt="Hero" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-14 md:justify-center md:items-center md:text-center md:pb-0">
               <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[8px] md:text-[12px] mb-2 animate-pulse">
                 New Arrival
               </span>
               <div className="flex justify-center items-center mb-6 md:mb-10 overflow-hidden">
                 <h1 className="typewriter-text text-white text-2xl md:text-6xl font-black italic uppercase leading-none whitespace-nowrap border-r-2 md:border-r-4 border-orange-600 pr-1">
                    Premium <span className="text-orange-600">Gaming</span> Gear
                 </h1>
               </div>
               <button className="w-fit bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3.5 rounded-full font-black uppercase text-[9px] md:text-[13px] tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                 Shop Collection
               </button>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === current ? "w-6 md:w-10 bg-orange-600" : "w-1.5 bg-white/40"}`} />
          ))}
        </div>
      </section>

      {/* ===== 2. TRUST FEATURES ===== */}
      <section className="relative z-30 -mt-6 md:-mt-16 px-4 md:px-30">
        <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-4 md:grid md:grid-cols-4 md:overflow-visible">
          <FeatureCard icon={<Truck size={16}/>} title="Free Delivery" />
          <FeatureCard icon={<ShieldCheck size={16}/>} title="Official Hub" />
          <FeatureCard icon={<Zap size={16}/>} title="Fast Checkout" />
          <FeatureCard icon={<Trophy size={16}/>} title="Top Rewards" />
        </div>
      </section>

      {/* ===== 3. CATEGORY & PRODUCTS (តូចបំផុតសម្រាប់ Mobile) ===== */}
      <main className="max-w-7xl mx-auto px-4 md:px-16 py-6 md:py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-3">
          <div>
            <h2 className="text-lg md:text-5xl font-black italic uppercase tracking-tighter text-gray-900">
              Our <span className="text-orange-600">Collections</span>
            </h2>
            <div className="w-20 h-1 bg-orange-600 mt-1"></div>
          </div>

          {/* Categories: រាងធំល្មម និងមាន Hover ពណ៌ក្រូច */}
        <div className="w-full md:w-auto">
          <div className="flex overflow-x-auto no-scrollbar gap-2.5 py-2 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setCategory(cat))}
                className={`whitespace-nowrap px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-black uppercase text-[10px] md:text-[11px] tracking-wide transition-all duration-300 shadow-sm ${
                  selectedCategory === cat 
                    ? "bg-orange-600 text-white scale-105" // ប្តូរ bg-black ទៅ bg-orange-600
                    : "bg-black/20 text-gray-600 hover:bg-orange-600 hover:text-white" // បន្ថែម hover:bg-orange-600
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        </div>

        <ProductGrid />
      </main>

      <Footer />

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes marquee-text { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-text { animation: marquee-text 20s linear infinite; }
        .typewriter-text {
          display: inline-block;
          overflow: hidden; 
          width: 0; 
          animation: typing 8s steps(25, end) infinite alternate, blink-caret 0.75s step-end infinite;
        }
        @keyframes typing { 0% { width: 0; } 45% { width: 100%; } 75% { width: 100%; } 100% { width: 0; } }
        @keyframes blink-caret { from, to { border-color: transparent; } 50% { border-color: #ea580c; } }
      `}</style>
    </div>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="bg-white min-w-[120px] md:min-w-0 p-3 md:p-6 rounded-xl md:rounded-[24px] shadow-md border border-gray-50 flex flex-col items-center text-center flex-1">
    <div className="mb-2 p-2 bg-orange-50 rounded-lg text-orange-600">{icon}</div>
    <h3 className="font-black text-[8px] md:text-[11px] uppercase tracking-wider text-gray-900">{title}</h3>
  </div>
);

export default Home;