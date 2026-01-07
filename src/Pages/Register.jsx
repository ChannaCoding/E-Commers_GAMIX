import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../Features/Auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, X, CheckCircle2, ArrowRight } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newUser = { name, email, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    dispatch(registerSuccess(newUser));
    setMessage("Account created successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] font-sans p-4">
      <div className="w-full max-w-[340px] bg-white rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">
        
        {/* Compact Dark Header */}
        <div className="bg-[#111] py-8 px-6 text-center relative">
          <button 
            type="button"
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
          
          <h1 className="text-2xl font-[1000] italic tracking-tighter text-white">
            GAM<span className="text-orange-500">MAX</span>
          </h1>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mt-1">
            Create Elite Account
          </p>
        </div>

        <div className="p-7">
          <form onSubmit={handleRegister} className="space-y-3.5">
            {/* Name Input - Bold & Clear Color */}
            <div className="relative group">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-10 pr-4 rounded-2xl outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm font-bold text-gray-800 placeholder:text-gray-400 placeholder:font-normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-10 pr-4 rounded-2xl outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm font-bold text-gray-800 placeholder:text-gray-400 placeholder:font-normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={16} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-10 pr-4 rounded-2xl outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm font-bold text-gray-800 placeholder:text-gray-400 placeholder:font-normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-all active:scale-[0.97] mt-2 shadow-lg shadow-black/5"
            >
              Sign Up <ArrowRight size={14} />
            </button>

            {message && (
              <div className="flex items-center justify-center gap-2 mt-2 py-2 px-4 bg-green-50 rounded-xl animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={14} className="text-green-600" />
                <p className="text-[10px] font-bold text-green-600 tracking-tight">{message}</p>
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs font-bold text-gray-400">
              Already a member?{" "}
              <Link to="/login" className="text-orange-600 hover:text-orange-700 underline underline-offset-4 decoration-2 font-black">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;