import { NavLink } from 'react-router-dom';
// Import ikon tambahan dari react-icons/md agar seragam
import { 
  MdLocalPharmacy, 
  MdDashboard, 
  MdCategory, 
  MdShoppingCart, 
  MdSettings,
  MdPerson
} from "react-icons/md"; 

const Sidebar = () => {
  // Simulasi mengecek role user (Bisa disesuaikan dengan State/Context/LocalStorage Anda)
  // Ubah 'customer' menjadi 'owner' jika ingin melihat versi admin
  const userRole = localStorage.getItem('role') || 'customer'; 

  // 1. Array Menu Khusus Owner
  const ownerMenus = [
    { name: 'Dashboard', path: '/', icon: <MdDashboard className="mr-4 text-xl" /> },
    { 
      name: 'Kelola Produk', 
      path: '/products', 
      id: 'menu-products',
      icon: <MdLocalPharmacy className="mr-4 text-xl" /> 
    },
    { name: 'Categories', path: '/categories', icon: <MdCategory className="mr-4 text-xl" /> },
    { name: 'Orders', path: '/orders', icon: <MdShoppingCart className="mr-4 text-xl" /> },
    { name: 'Settings', path: '/settings', icon: <MdSettings className="mr-4 text-xl" /> },
  ];

  // 2. Array Menu Khusus Customer
  const customerMenus = [
    { name: 'Dashboard Saya', path: '/customer-dashboard', icon: <MdPerson className="mr-4 text-xl" /> },
    { 
      name: 'Beli Produk', 
      path: '/products', 
      id: 'menu-products',
      icon: <MdLocalPharmacy className="mr-4 text-xl" /> 
    },
    { name: 'Pesanan Saya', path: '/orders', icon: <MdShoppingCart className="mr-4 text-xl" /> },
    { name: 'Settings', path: '/settings', icon: <MdSettings className="mr-4 text-xl" /> },
  ];

  // 3. Tentukan menu mana yang dirender berdasarkan role
  const displayedMenus = userRole === 'owner' ? ownerMenus : customerMenus;

  return (
    <aside className="w-72 bg-[#064E3B] h-screen p-6 flex flex-col text-white shadow-2xl z-20">
      <div className="mb-12 px-4">
        <h1 className="text-[#10B981] text-3xl font-black tracking-tight">Toko HPAI</h1>
        <p className="text-emerald-400 text-xs">Herbal Penawar Alami</p>
      </div>
      
      <nav className="flex flex-col gap-3">
        {displayedMenus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            id={menu.id} // Menambahkan id (jika ada di dalam array)
            className={({ isActive }) =>
              `px-6 py-4 rounded-2xl transition-all duration-300 font-bold flex items-center ${
                isActive 
                ? 'bg-[#10B981] text-white shadow-lg shadow-emerald-900/50 scale-105' 
                : 'text-emerald-100 hover:bg-[#065F46] hover:translate-x-2'
              }`
            }
          >
            {/* Render ikon jika tersedia di data menu */}
            {menu.icon && menu.icon}
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;