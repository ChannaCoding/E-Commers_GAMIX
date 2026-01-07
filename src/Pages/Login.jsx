import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Features/auth/authSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, X, ArrowRight } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (!foundUser) {
      alert("Account not found.");
      return;
    }

    dispatch(loginSuccess(foundUser));
    navigate(from);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] font-sans p-4">
      {/* Slim Glass Card */}
      <div className="w-full max-w-[350px] bg-white rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">
        
        {/* Compact Dark Header */}
        <div className="bg-[#111] py-8 px-6 text-center relative">
          <button 
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
          
          <h1 className="text-2xl font-[1000] italic tracking-tighter text-white">
            GAM<span className="text-orange-500">MAX</span>
          </h1>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mt-1">
            Sign in to play
          </p>
        </div>

        {/* Form Body - More Compact Padding */}
        <div className="p-7">
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email */}
            <div className="space-y-1.5">
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-50 border border-transparent py-3 pl-10 pr-4 rounded-2xl outline-none focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm font-bold placeholder:text-gray-300 placeholder:font-normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-50 border border-transparent py-3 pl-10 pr-4 rounded-2xl outline-none focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm font-bold placeholder:text-gray-300 placeholder:font-normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Login Button - Sleeker height */}
            <button className="w-full bg-black text-white py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-all active:scale-[0.97] mt-2 shadow-lg shadow-black/5">
              Login <ArrowRight size={14} />
            </button>
          </form>

          {/* Compact Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs font-bold text-gray-400">
              New here?{" "}
              <Link to="/register" className="text-orange-600 hover:text-orange-700 underline underline-offset-4">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;