import {
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  Info,
  Home,
  HelpCircle,
  Mail,
  Search,
  LogOut,
  Settings,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setSearchTerm } from "../../Features/products/ProductSlice";
import { logout } from "../../Features/Auth/authSlice";

const Navbar = () => {
  const [userMenu, setUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchTerm = useSelector((state) => state.product.searchTerm);
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorite.items);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const favoriteCount = favoriteItems.length;

  const requireAuth = (path) => {
    if (!isAuthenticated) {
      navigate("/login");
      setMobileOpen(false);
      return;
    }
    navigate(path);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setUserMenu(false);
    setMobileOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-[100] font-sans shadow-sm border-b border-gray-100">
      
      {/* 1. TOP BAR (Desktop) */}
      <div className="hidden md:flex max-w-7xl mx-auto px-20 py-2.5 justify-between items-center border-b border-gray-50">
        <ul className="flex gap-8">
          {["Home", "About", "FAQs", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  isActive ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-orange-600"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Cambodia Store
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="max-w-7xl mx-auto px-4 md:px-20 py-4 flex justify-between items-center">
        
        {/* --- FIXED MOBILE LAYOUT --- */}
        <div className="flex flex-col w-full md:hidden gap-4">
          <div className="flex justify-between items-center w-full">
            <button className="p-1 text-gray-800" onClick={() => setMobileOpen(true)}>
              <Menu size={26} strokeWidth={2.5} />
            </button>
            <div className="relative">
              {!isAuthenticated ? (
                <button onClick={() => navigate("/login")} className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                  <User size={18} strokeWidth={2.5} />
                </button>
              ) : (
                <button onClick={() => setUserMenu(!userMenu)} className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-orange-600/20">
                  {user?.name?.charAt(0).toUpperCase()}
                </button>
              )}
            </div>
          </div>
          
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="text-2xl font-[1000] italic text-gray-900 tracking-tighter">
              GAM<span className="text-orange-600">MAX</span>
            </Link>
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-800" onClick={() => setShowMobileSearch(!showMobileSearch)}>
                <Search size={24} strokeWidth={2.5} />
              </button>

              {/* Mobile Favorite Badge */}
              <button onClick={() => requireAuth("/favorites")} className="relative p-2 text-gray-800">
                <Heart size={24} strokeWidth={2.5} className={isAuthenticated && favoriteCount > 0 ? "fill-red-500 text-red-500" : ""} />
                {isAuthenticated && favoriteCount > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black ring-1 ring-white">
                    {favoriteCount}
                  </span>
                )}
              </button>

              {/* Mobile Cart Badge */}
              <button onClick={() => requireAuth("/cart")} className="relative p-2 text-gray-800">
                <ShoppingCart size={24} strokeWidth={2.5} />
                {isAuthenticated && cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-orange-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black ring-1 ring-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full justify-between items-center">
          <Link to="/" className="text-3xl font-[1000] italic text-gray-900 tracking-tighter shrink-0">
            GAM<span className="text-orange-600">MAX</span>
          </Link>
          <div className="flex-1 max-w-lg mx-10 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search premium gear..."
              className="w-full bg-gray-50 border border-gray-100 rounded-full pl-11 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-600/10 text-sm font-medium transition-all"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          </div>

          <div className="flex items-center gap-4" ref={menuRef}>
            <button onClick={() => requireAuth("/favorites")} className="relative p-2 text-gray-800 hover:text-red-500 transition-colors">
              <Heart size={24} strokeWidth={2.5} className={isAuthenticated && favoriteCount > 0 ? "fill-red-500 text-red-500" : ""} />
              {isAuthenticated && favoriteCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black ring-2 ring-white">{favoriteCount}</span>
              )}
            </button>
            <button onClick={() => requireAuth("/cart")} className="relative p-2 text-gray-800 hover:text-orange-600 transition-colors">
              <ShoppingCart size={24} strokeWidth={2.5} />
              {isAuthenticated && cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-orange-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black ring-2 ring-white">{cartCount}</span>
              )}
            </button>
            <div className="relative ml-2">
              {!isAuthenticated ? (
                <button onClick={() => navigate("/login")} className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all">
                  <User size={20} strokeWidth={2.5} />
                </button>
              ) : (
                <button onClick={() => setUserMenu(!userMenu)} className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-orange-600/20 hover:scale-110 transition-all">
                  {user?.name?.charAt(0).toUpperCase()}
                </button>
              )}
              {userMenu && (
                <div className="absolute right-0 mt-4 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-50 mb-1">
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Account</p>
                    <p className="text-xs font-bold truncate text-gray-800">{user?.name}</p>
                  </div>
                  {/* រក្សាកូដដដែល គ្រាន់តែផ្ទៀងផ្ទាត់កន្លែងនេះ */}
                  <button 
                    onClick={() => {
                      navigate("/settings"); 
                      setUserMenu(false); // ត្រូវប្រាកដថាបិទ Menu ក្រោយពេលចុច
                    }} 
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-all"
                  >
                    <Settings size={16}/> Settings
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-black text-red-500 hover:bg-red-50 border-t border-gray-50 mt-1 transition-all"><LogOut size={16}/> Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE SIDEBAR (Drawer) */}
      <div className={`fixed inset-0 z-[110] md:hidden transition-all duration-300 ${mobileOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMobileOpen(false)} />
        
        <div className={`fixed top-0 left-0 h-full w-[290px] bg-white z-[120] shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="relative p-8 bg-[#111] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 blur-[50px] rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-600/10 blur-[40px] rounded-full -ml-12 -mb-12" />

            <div className="relative z-10 flex flex-col gap-1.5">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-3xl font-[1000] italic tracking-tighter flex items-center">
                <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">GAM</span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">MAX</span>
                  <span className="absolute -right-2 top-0 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#ea580c]" />
                </span>
              </Link>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-5 bg-orange-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Premium Store</span>
              </div>
            </div>
            <button onClick={() => setMobileOpen(false)} className="absolute top-8 right-6 p-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-xl border border-white/10 transition-all active:scale-90">
              <X size={18} strokeWidth={3} />
            </button>
          </div>

          <div className="flex-1 p-6 space-y-1 bg-white">
            <MobileLink to="/" icon={<Home size={20} />} label="Home" onClick={() => setMobileOpen(false)} />
            <MobileLink to="/about" icon={<Info size={20} />} label="About Us" onClick={() => setMobileOpen(false)} />
            <MobileLink to="/faqs" icon={<HelpCircle size={20} />} label="FAQs" onClick={() => setMobileOpen(false)} />
            <MobileLink to="/contact" icon={<Mail size={20} />} label="Contact" onClick={() => setMobileOpen(false)} />
            
            <div className="my-6 border-t border-gray-50 mx-4" />
            <p className="px-4 text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2">Account & Shop</p>
            
            <div onClick={() => requireAuth("/favorites")} className="flex items-center gap-5 p-4 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 cursor-pointer transition-all active:bg-orange-50">
               <Heart size={20} /> 
               <span className="text-[13px] uppercase tracking-widest">Wishlist</span>
               {isAuthenticated && favoriteCount > 0 && (
                 <span className="ml-auto bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">{favoriteCount}</span>
               )}
            </div>
            <div onClick={() => requireAuth("/cart")} className="flex items-center gap-5 p-4 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 cursor-pointer transition-all active:bg-orange-50">
               <ShoppingCart size={20} /> 
               <span className="text-[13px] uppercase tracking-widest">My Cart</span>
               {isAuthenticated && cartCount > 0 && (
                 <span className="ml-auto bg-orange-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black">{cartCount}</span>
               )}
            </div>
          </div>

          <div className="p-8 border-t border-gray-100 bg-gray-50/50">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 bg-red-50 text-red-600 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-sm active:scale-95 transition-all">
                <LogOut size={18} /> Logout Account
              </button>
            ) : (
              <button onClick={() => {navigate("/login"); setMobileOpen(false)}} className="w-full bg-black text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                Login / Register
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileLink = ({ to, icon, label, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    {({ isActive }) => (
      <div className={`flex items-center gap-5 p-4 rounded-2xl transition-all ${isActive ? "bg-orange-50 text-orange-600 font-black shadow-sm" : "text-gray-500 font-bold hover:bg-gray-50"}`}>
        <span className={`p-2 rounded-xl transition-all ${isActive ? "bg-white text-orange-600 shadow-sm" : ""}`}>{icon}</span>
        <span className="text-[13px] uppercase tracking-widest">{label}</span>
      </div>
    )}
  </NavLink>
);

export default Navbar;