import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../Features/Favorite/favoriteSlice";
import { addToCart } from "../../Features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ទាញទិន្នន័យពី Redux
  const { isAuthenticated } = useSelector((state) => state.auth);
  const favorites = useSelector((state) => state.favorite.items);
  const isFavorite = favorites.some((p) => p.id === product.id);

  const handleFavorite = (e) => {
    e.preventDefault(); // ការពារកុំឱ្យវា Navigate ទៅទំព័រ Detail ពេលចុចបេះដូង
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    dispatch(toggleFavorite(product));
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // ការពារកុំឱ្យវា Navigate ទៅទំព័រ Detail
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-100 hover:border-orange-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden flex flex-col h-full relative">
      
      {/* --- Favorite Button Overlay --- */}
      <button
        onClick={handleFavorite}
        className={`absolute top-4 right-4 z-10 p-2.5 rounded-full shadow-sm border transition-all duration-300 ${
          isFavorite 
            ? "bg-red-500 border-red-500 text-white scale-110" 
            : "bg-white/80 backdrop-blur-sm border-gray-200 text-gray-500 hover:text-red-500"
        }`}
      >
        <Heart size={18} className={isFavorite ? "fill-white" : ""} />
      </button>

      <Link to={`/product/${product.id}`} className="flex flex-col h-full">
        {/* --- Image Section --- */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 p-5">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Quick Add To Cart Overlay */}
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-orange-600 text-white py-3 font-bold uppercase text-[10px] tracking-[0.2em] translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={14} /> Add To Bag
          </button>
        </div>

        {/* --- Content Section --- */}
        <div className="p-5 flex flex-col flex-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-2">
            {product.category}
          </span>
          
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">
            {product.title}
          </h2>

          <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Bottom section */}
          <div className="flex justify-between items-end mt-auto pt-4 border-t border-gray-50">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Price</p>
              <p className="text-2xl font-black text-gray-900 tracking-tighter italic">
                ${product.price}
              </p>
            </div>
            
            <div className="flex items-center gap-1 text-orange-600 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
              Details <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;