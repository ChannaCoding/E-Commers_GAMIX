import React from "react";
import { ShoppingCart, Heart, ArrowLeft, ShieldCheck, Truck, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../Features/cart/cartSlice";
import { toggleFavorite } from "../Features/favorite/favoriteSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
         
  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id))
  );

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated || state.auth.isLoggedIn);
  const favorites = useSelector((state) => state.favorite.items);
  const isFavorite = favorites.some((p) => p.id === product?.id);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: `/product/${id}` } });
      return;
    }
    dispatch(addToCart(product));
  };

  if (!product) return <div className="text-center py-20 font-bold">Product Not Found</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-10">
        
        {/* Back Button - Small & Minimal */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: IMAGE (រក្សាទំហំឱ្យនៅស្អាត) */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 flex justify-center items-center border border-gray-100 shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[400px] object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
              />
            </div>
            <button
              onClick={() => {
                if (!isAuthenticated) navigate("/login");
                else dispatch(toggleFavorite(product));
              }}
              className={`absolute top-4 right-4 p-3 rounded-full shadow-md transition-all ${
                isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-300 hover:text-red-500"
              }`}
            >
              <Heart size={20} className={isFavorite ? "fill-white" : ""} />
            </button>
          </div>

          {/* RIGHT: DETAILS (បន្ថយទំហំអក្សរឱ្យសមសួន) */}
          <div className="flex flex-col pt-2">
            {/* Category - Small & Clean */}
            <span className="text-orange-600 font-bold uppercase tracking-widest text-[10px] mb-2">
              {product.category}
            </span>
            
            {/* Title - បន្ថយមកត្រឹម text-2xl ឬ 3xl */}
            <h1 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            {/* Rating - បន្ថែមឱ្យមើលទៅដូចវេបសាយទិញទំនិញពិតៗ */}
            <div className="flex items-center gap-1 mb-6 text-orange-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              <span className="text-gray-400 text-xs ml-2 font-medium">(120 Reviews)</span>
            </div>

            {/* Price - ឱ្យវាធ្លោតែមិនរីកធំពេក */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-gray-900 tracking-tighter italic">
                ${product.price}
              </span>
              <span className="text-gray-400 line-through text-sm font-medium">${(product.price * 1.2).toFixed(2)}</span>
            </div>

            {/* Description - ទំហំអក្សរតូចល្មមអានស្រួល */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* CTA Button - បង្រួមប៊ូតុងឱ្យមកសមល្មម */}
            <div className="flex gap-4 mb-10">
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg active:scale-95"
              >
                <ShoppingCart size={16} />
                Add To Cart
              </button>
            </div>

            {/* Minimal Info Badges */}
            <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                <Truck size={14} className="text-orange-600" />
                Free Shipping on orders over $50
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-orange-600" />
                2 Year Premium Warranty
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;