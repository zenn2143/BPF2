import React from 'react';

const Categories = () => {
  // Data dummy (sementara) untuk kategori produk HPAI
  const categoriesData = [
    { id: 1, nama: 'Minuman Herbal', deskripsi: 'Kopi, teh, dan susu kesehatan', icon: '☕' },
    { id: 2, nama: 'Suplemen & Vitamin', deskripsi: 'Nutrisi tambahan untuk daya tahan tubuh', icon: '💊' },
    { id: 3, nama: 'Perawatan Tubuh', deskripsi: 'Sabun, pasta gigi, dan perawatan luar', icon: '🧴' },
    { id: 4, nama: 'Kosmetik Herbal', deskripsi: 'Perawatan wajah dan kecantikan alami', icon: '✨' },
    { id: 5, nama: 'Kebutuhan Harian', deskripsi: 'Produk kebutuhan rumah tangga Islami', icon: '🛍️' },
  ];

  return (
    <div className="p-8">
      {/* Bagian Header Halaman */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-emerald-800 mb-2">Kategori Produk</h1>
          <p className="text-gray-600">Kelola daftar kategori produk Toko HPAI di sini.</p>
        </div>
        {/* Tombol Tambah */}
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition duration-300">
          + Tambah Kategori
        </button>
      </div>

      {/* Bagian Grid Kartu Kategori */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoriesData.map((kategori) => (
          <div 
            key={kategori.id} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300 group cursor-pointer"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
              {kategori.icon}
            </div>
            <h3 className="text-xl font-bold text-emerald-700 mb-2">{kategori.nama}</h3>
            <p className="text-gray-500 text-sm mb-4">{kategori.deskripsi}</p>
            
            {/* Tombol Aksi */}
            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
              <button className="text-sm text-emerald-600 font-medium hover:text-emerald-800">Edit</button>
              <button className="text-sm text-red-500 font-medium hover:text-red-700">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;