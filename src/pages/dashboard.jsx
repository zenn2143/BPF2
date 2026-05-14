const Dashboard = () => {
  const products = [
    {
      id: 1,
      name: "Kopi HPAI (HC)",
      desc: "Kopi kesehatan dengan herba pilihan untuk stamina dan vitalitas.",
      price: "Rp 125.000",
      // Mengarah ke folder public/images/ di project Vite kamu
      image: "/images/kopi.jpg" 
    },
    {
      id: 2,
      name: "Extra Food",
      desc: "Suplemen kesehatan dari 23 buah dan sayuran untuk daya tahan tubuh.",
      price: "Rp 80.000",
      image: "/images/extra-food.jpg"
    },
    {
      id: 3,
      name: "Susu Kambing EGM",
      desc: "Susu kambing etawa untuk kesehatan tulang, gigi, dan pernapasan.",
      price: "Rp 75.000",
      image: "/images/egm.jpg"
    }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Banner Promo */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-10 flex items-center justify-between relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl font-extrabold text-[#064E3B] mb-4">Promo Produk Herbal</h2>
          <p className="text-slate-500 text-lg">Dapatkan kesehatan alami dengan produk original HPAI. Tersedia diskon khusus member!</p>
          <button className="mt-6 bg-[#10B981] text-white px-8 py-3 rounded-full font-bold hover:bg-[#059669] transition-all shadow-lg shadow-emerald-200">
            Lihat Detail
          </button>
        </div>
        <div className="hidden md:flex w-56 h-56 bg-emerald-50 rounded-full items-center justify-center border-4 border-white shadow-inner">
           <span className="text-[#10B981] font-black text-xl">TOKO HPAI</span>
        </div>
      </div>

      {/* Grid Produk */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 px-2">Produk Terlaris</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-[2.5rem] p-6 text-white shadow-xl shadow-emerald-900/10 hover:-translate-y-2 transition-all duration-300 group">
              {/* Box Gambar Produk */}
              <div className="w-full h-48 bg-white rounded-3xl mb-6 overflow-hidden flex items-center justify-center p-4 shadow-inner group-hover:scale-95 transition-transform duration-500">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="max-h-full object-contain"
                  onError={(e) => { 
                    e.target.onerror = null; // Mencegah infinite loop
                    e.target.src = ''; 
                  }}
                />
              </div>
              
              {/* Detail Produk */}
              <div className="text-center space-y-2">
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-emerald-50 text-sm opacity-90 line-clamp-2 h-10">{item.desc}</p>
                <div className="mt-4 inline-block bg-white text-[#064E3B] rounded-2xl px-6 py-2 font-black text-lg shadow-md">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;