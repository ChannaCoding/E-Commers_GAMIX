import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "../Features/Auth/authSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, X, ArrowRight, AlertCircle } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error } = useSelector((state) => state.auth);
  const from = location.state?.from || "/";

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate(from);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4 font-sans">
      <div className="w-full max-w-[350px] bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden relative">
        <div className="bg-[#111] py-8 px-6 text-center relative">
          <button onClick={() => navigate("/")} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
            <X size={18} />
          </button>
          <h1 className="text-2xl font-[1000] italic tracking-tighter text-white">GAM<span className="text-orange-500">MAX</span></h1>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mt-1">Sign in to play</p>
        </div>

        <div className="p-7">
          {error && (
            <div className="mb-4 p-3 bg-red-50 rounded-xl flex items-center gap-2 text-red-600 border border-red-100">
              <AlertCircle size={14} />
              <p className="text-[10px] font-bold">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
              <input
                type="email" placeholder="Email"
                className="w-full bg-gray-50 border border-transparent py-3 pl-10 pr-4 rounded-2xl outline-none focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm font-bold"
                value={email} onChange={(e) => setEmail(e.target.value)} required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
              <input
                type="password" placeholder="Password"
                className="w-full bg-gray-50 border border-transparent py-3 pl-10 pr-4 rounded-2xl outline-none focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm font-bold"
                value={password} onChange={(e) => setPassword(e.target.value)} required
              />
            </div>

            <button disabled={loading} className="w-full bg-black text-white py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-all active:scale-[0.97] mt-2 disabled:bg-gray-400">
              {loading ? "Authenticating..." : "Login"} <ArrowRight size={14} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs font-bold text-gray-400">New here? <Link to="/register" className="text-orange-600 hover:text-orange-700 underline underline-offset-4 font-black">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;