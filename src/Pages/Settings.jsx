import React, { useState } from 'react';
import { User, Lock, ShoppingBag, Bell, Camera, Package, CreditCard } from "lucide-react";
import pic from "../assets/Images/pic1.jpg"; 

const Settings = () => {
  const [activeTab, setActiveTab] = useState("General Profile");

  // មុខងារសម្រាប់បង្ហាញ Content ទៅតាម Tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "General Profile":
        return <GeneralProfile />;
      case "Security & Password":
        return <SecuritySettings />;
      case "Order History":
        return <OrderHistory />;
      case "Notifications":
        return <NotificationSettings />;
      default:
        return <GeneralProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfb] py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-[1000] italic uppercase tracking-tighter text-gray-900">
            Account <span className="text-orange-600">Settings</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 space-y-3">
            <MenuButton icon={<User size={20}/>} label="General Profile" active={activeTab === "General Profile"} onClick={() => setActiveTab("General Profile")} />
            <MenuButton icon={<Lock size={20}/>} label="Security & Password" active={activeTab === "Security & Password"} onClick={() => setActiveTab("Security & Password")} />
            <MenuButton icon={<ShoppingBag size={20}/>} label="Order History" active={activeTab === "Order History"} onClick={() => setActiveTab("Order History")} />
            <MenuButton icon={<Bell size={20}/>} label="Notifications" active={activeTab === "Notifications"} onClick={() => setActiveTab("Notifications")} />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 1. Page: General Profile ---
const GeneralProfile = () => (
  <div className="animate-in fade-in duration-500">
    <div className="flex items-center gap-6 mb-10 pb-10 border-b border-gray-100">
      <div className="relative">
        <img src={pic} className="w-24 h-24 rounded-full object-cover border-4 border-orange-50" alt="profile" />
        <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-100"><Camera size={14}/></button>
      </div>
      <div>
        <h3 className="font-black text-2xl text-gray-900 uppercase italic">Sam Channa</h3>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Lead Developer</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <InputGroup label="Full Name" value="Sam Channa" />
      <InputGroup label="Email Address" value="channa.sam@example.com" />
      <InputGroup label="Phone Number" value="+855 12 345 678" />
      <InputGroup label="Location" value="Phnom Penh, Cambodia" />
    </div>
    <button className="mt-10 bg-orange-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-lg shadow-orange-600/20">Save Changes</button>
  </div>
);

// --- 2. Page: Security & Password ---
const SecuritySettings = () => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <h3 className="text-xl font-black uppercase italic mb-8">Password & Security</h3>
    <div className="space-y-6 max-w-md">
      <InputGroup label="Current Password" type="password" />
      <InputGroup label="New Password" type="password" />
      <InputGroup label="Confirm New Password" type="password" />
      <button className="bg-black text-white px-10 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest">Update Password</button>
    </div>
  </div>
);

// --- 3. Page: Order History ---
const OrderHistory = () => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <h3 className="text-xl font-black uppercase italic mb-8">Recent Orders</h3>
    <div className="space-y-4">
      {[1, 2].map((order) => (
        <div key={order} className="flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white rounded-2xl text-orange-600 shadow-sm"><Package size={24}/></div>
            <div>
              <p className="font-black text-sm uppercase">Order #GM-20240{order}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Pending Payment • 12 Oct 2024</p>
            </div>
          </div>
          <p className="font-[1000] text-orange-600">$1,299.00</p>
        </div>
      ))}
    </div>
  </div>
);

// --- 4. Page: Notifications ---
const NotificationSettings = () => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <h3 className="text-xl font-black uppercase italic mb-8">Notifications</h3>
    <div className="space-y-4">
      <ToggleItem label="Email Notifications" desc="Get updates about your orders via email" />
      <ToggleItem label="Promotion Alerts" desc="Receive news about sales and new gear" />
    </div>
  </div>
);

// --- Small UI Components ---
const MenuButton = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-8 py-5 rounded-[2rem] font-black uppercase text-[10px] tracking-widest transition-all ${active ? "bg-orange-600 text-white shadow-xl shadow-orange-600/30" : "bg-white text-gray-400 border border-gray-50 hover:bg-orange-50"}`}>
    {icon} {label}
  </button>
);

const InputGroup = ({ label, value, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">{label}</label>
    <input type={type} defaultValue={value} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-orange-600" />
  </div>
);

const ToggleItem = ({ label, desc }) => (
  <div className="flex items-center justify-between p-6 border border-gray-100 rounded-[2rem]">
    <div>
      <p className="font-black text-sm uppercase tracking-tight">{label}</p>
      <p className="text-[10px] text-gray-400 font-bold">{desc}</p>
    </div>
    <div className="w-12 h-6 bg-orange-600 rounded-full relative shadow-inner"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
  </div>
);

export default Settings;