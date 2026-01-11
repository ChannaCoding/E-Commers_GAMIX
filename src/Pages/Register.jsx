import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../Features/Auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, X, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    const result = await dispatch(registerUser({ name, email, password }));
    if (registerUser.fulfilled.match(result)) {
      setSuccessMsg("Account created! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4 font-sans">
      <div className="w-full max-w-[340px] bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden relative">
        <div className="bg-[#111] py-8 px-6 text-center relative">
          <button type="button" onClick={() => navigate("/")} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
            <X size={18} />
          </button>
          <h1 className="text-2xl font-[1000] italic tracking-tighter text-white">GAM<span className="text-orange-500">MAX</span></h1>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mt-1">Create Elite Account</p>
        </div>

        <div className="p-7">
          {error && (
            <div className="mb-4 p-3 bg-red-50 rounded-xl flex items-center gap-2 text-red-600 border border-red-100">
              <AlertCircle size={14} />
              <p className="text-[10px] font-bold">{error}</p>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-3.5">
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text" placeholder="Full Name"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-10 pr-4 rounded-2xl outline-none focus:border-orange-500 transition-all text-sm font-bold"
                value={name} onChange={(e) => setName(e.target.value)} required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="email" placeholder="Email Address"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-10 pr-4 rounded-2xl outline-none focus:border-orange-500 transition-all text-sm font-bold"
                value={email} onChange={(e) => setEmail(e.target.value)} required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="password" placeholder="Password"
                className="w-full bg-gray-50 border border-gray-200 py-3 pl-10 pr-4 rounded-2xl outline-none focus:border-orange-500 transition-all text-sm font-bold"
                value={password} onChange={(e) => setPassword(e.target.value)} required
              />
            </div>

            <button disabled={loading} className="w-full bg-black text-white py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg disabled:bg-gray-400">
              {loading ? "Creating..." : "Sign Up"} <ArrowRight size={14} />
            </button>

            {successMsg && (
              <div className="flex items-center justify-center gap-2 mt-2 py-2 px-4 bg-green-50 rounded-xl">
                <CheckCircle2 size={14} className="text-green-600" />
                <p className="text-[10px] font-bold text-green-600">{successMsg}</p>
              </div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs font-bold text-gray-400">Already a member? <Link to="/login" className="text-orange-600 hover:text-orange-700 underline font-black">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;