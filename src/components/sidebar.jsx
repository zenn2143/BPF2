import { NavLink } from 'react-router-dom';
import { MdLocalPharmacy } from "react-icons/md"; // Import ikon dari react-icons/md

const Sidebar = () => {
  // Menambahkan Produk HPAI dan properti icon ke dalam array
  const menus = [
    { name: 'Dashboard', path: '/' },
    { 
      name: 'Produk HPAI', 
      path: '/products', 
      id: 'menu-products',
      icon: <MdLocalPharmacy className="mr-4 text-xl" /> 
    },
    { name: 'Categories', path: '/categories' },
    { name: 'Orders', path: '/orders' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-72 bg-[#064E3B] h-screen p-6 flex flex-col text-white shadow-2xl z-20">
      <div className="mb-12 px-4">
        <h1 className="text-[#10B981] text-3xl font-black tracking-tight">Toko HPAI</h1>
        <p className="text-emerald-400 text-xs">Herbal Penawar Alami</p>
      </div>
      
      <nav className="flex flex-col gap-3">
        {menus.map((menu) => (
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