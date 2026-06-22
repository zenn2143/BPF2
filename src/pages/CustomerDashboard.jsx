import React from 'react';
import PageHeader from '../components/pageheader';

const CustomerDashboard = () => {
  return (
    <div className="p-4">
      <PageHeader title="Customer Dashboard" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Card Ringkasan 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700">Pesanan Aktif</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">2</p>
        </div>
        
        {/* Card Ringkasan 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700">Total Transaksi</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">15</p>
        </div>
        
        {/* Card Ringkasan 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700">Poin Member</h3>
          <p className="text-3xl font-bold text-yellow-500 mt-2">120</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Pesanan Terakhir</h3>
        <p className="text-gray-500">Belum ada data pesanan yang ditampilkan.</p>
        {/* Di sini Anda bisa menambahkan tabel riwayat pesanan */}
      </div>
    </div>
  );
};

export default CustomerDashboard;