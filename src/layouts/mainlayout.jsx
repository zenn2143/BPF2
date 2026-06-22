import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar.jsx';
import Header from '../components/header.jsx';

export default function MainLayout() {
  // 1. Ambil data sesi dari localStorage
  const isAuthenticated = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  
  // Mengambil informasi URL saat ini
  const location = useLocation();

  // 2. Jika tidak ada token (belum login), langsung arahkan ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 3. Jika customer mencoba mengakses root ("/") yang merupakan Dashboard Owner, 
  // arahkan mereka ke Customer Dashboard
  if (userRole === 'customer' && location.pathname === '/') {
    return <Navigate to="/customer-dashboard" replace />;
  }

  // Jika lolos pengecekan di atas, render layout seperti biasa
  return (
    <div className="flex min-h-screen bg-[#FDF6E3]">
      {/* Sidebar Kiri */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header Atas */}
        <Header />
        
        {/* Area Konten dengan Scroll Internal */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          {/* Komponen halaman (Dashboard, Orders, dll) akan dirender di sini */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}