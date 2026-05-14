import { FaSearch, FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#E6D5B8] p-4 shadow-sm w-full">
      {/* Kiri: Menu & Cart */}
      <div className="flex items-center space-x-4 ml-4">
        <FaBars className="text-gray-600 cursor-pointer" size={20} />
        <FaShoppingCart className="text-gray-600 cursor-pointer" size={20} />
      </div>

      {/* Tengah: Search Bar */}
      <div className="relative flex w-full max-w-xl items-center">
        <input 
          type="text" 
          placeholder="Search Here..." 
          className="w-full bg-[#F5EEDC] text-gray-600 text-sm rounded-md px-4 py-2 outline-none" 
        />
        <FaSearch className="absolute right-4 text-gray-400 text-sm" />
      </div>

      {/* Kanan: Profil */}
      <div className="flex items-center space-x-3 mr-4 text-gray-600">
        <FaUserCircle size={24} />
        <span className="text-xs font-medium">Hello, Name</span>
      </div>
    </div>
  );
}
