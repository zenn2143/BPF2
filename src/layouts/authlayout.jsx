import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6E3]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-slate-100">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-4xl font-extrabold">
            <span className="text-slate-800">Toko </span>
            <span className="text-[#10B981]">HPAI</span>
          </h1>
        </div>
        
        {/* Konten form Login/Register akan muncul di sini */}
        <Outlet />
        
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2026 Toko HPAI Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
}