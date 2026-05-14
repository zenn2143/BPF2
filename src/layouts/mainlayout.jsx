import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar.jsx';
import Header from '../components/header.jsx';

export default function MainLayout() {
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