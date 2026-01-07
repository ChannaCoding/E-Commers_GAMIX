import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heart, ShoppingCart, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toggleFavorite } from "../Features/Favorite/favoriteSlice";
import { addToCart } from "../Features/cart/cartSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoriteItems = useSelector((state) => state.favorite.items);
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated || state.auth.isLoggedIn
  );

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/favorites" } });
      return;
    }
    dispatch(addToCart(product));
    // អ្នកអាចប្រើ Toast notification នៅទីនេះជំនួស alert ដើម្បីឱ្យកាន់តែស្អាត
  };

  if (favoriteItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <Heart size={40} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-sm">
          Save items you love here! They will be waiting for you when you're ready to make them yours.
        </p>
        <Link
          to="/"
          className="bg-black text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-[1000] italic text-gray-900 tracking-tighter">
              MY <span className="text-orange-600">FAVORITES</span>
            </h1>
            <p className="text-gray-500 font-medium text-sm mt-1">
              You have {favoriteItems.length} items in your wishlist
            </p>
          </div>
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={18} /> Continue Shopping
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteItems.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-4 relative border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300"
            >
              {/* ❤️ Remove favorite button */}
              <button
                onClick={() => dispatch(toggleFavorite(product))}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-red-500 shadow-sm hover:bg-red-50 transition-all active:scale-90"
                title="Remove from favorites"
              >
                <Heart className="fill-red-500 w-5 h-5" />
              </button>

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-4">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="px-1">
                <h3 className="font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-[1000] text-gray-900">
                    ${product.price}
                  </span>
                  {/* បន្ថែមតម្លៃបញ្ចុះតម្លៃសិប្បនិម្មិតដើម្បីមើលទៅស្អាត */}
                  <span className="text-xs text-gray-400 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                </div>

                {/* Actions Group */}
                <div className="flex items-center gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 text-center bg-gray-900 text-white py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-colors"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-2.5 rounded-xl bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20 active:scale-90"
                    title="Add to Cart"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;