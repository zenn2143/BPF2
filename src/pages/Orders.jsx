import React from 'react';
import PageHeader from '../components/pageheader';

const orders = [
  {
    id: 'ORD-1001',
    date: '2026-06-18',
    customer: 'Anisa Putri',
    total: 'Rp 1.250.000',
    status: 'Diproses',
    items: 3,
  },
  {
    id: 'ORD-1002',
    date: '2026-06-15',
    customer: 'Budi Santoso',
    total: 'Rp 750.000',
    status: 'Terkirim',
    items: 2,
  },
  {
    id: 'ORD-1003',
    date: '2026-06-12',
    customer: 'Wulan Sari',
    total: 'Rp 1.850.000',
    status: 'Menunggu Pembayaran',
    items: 5,
  },
];

export default function Orders() {
  return (
    <div className="p-6">
      <PageHeader title="Pesanan" breadcrumb={["Dashboard", "Pesanan"]} />

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-card border border-main p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Pesanan</p>
          <p className="mt-4 text-3xl font-bold text-main">{orders.length}</p>
        </div>
        <div className="rounded-3xl bg-card border border-main p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Pesanan Aktif</p>
          <p className="mt-4 text-3xl font-bold text-main">2</p>
        </div>
        <div className="rounded-3xl bg-card border border-main p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Pendapatan</p>
          <p className="mt-4 text-3xl font-bold text-main">Rp 3.850.000</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-3xl border border-main bg-card shadow-sm">
        <table className="min-w-full divide-y divide-main text-left">
          <thead className="bg-header text-main">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold">No</th>
              <th className="px-6 py-4 text-sm font-semibold">Order ID</th>
              <th className="px-6 py-4 text-sm font-semibold">Tanggal</th>
              <th className="px-6 py-4 text-sm font-semibold">Pelanggan</th>
              <th className="px-6 py-4 text-sm font-semibold">Items</th>
              <th className="px-6 py-4 text-sm font-semibold">Total</th>
              <th className="px-6 py-4 text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-main">
            {orders.map((order, index) => (
              <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{index + 1}</td>
                <td className="px-6 py-4 text-sm font-medium text-main">{order.id}</td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{order.date}</td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{order.items}</td>
                <td className="px-6 py-4 text-sm font-semibold text-main">{order.total}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    order.status === 'Terkirim' ? 'bg-emerald-100 text-emerald-800' :
                    order.status === 'Diproses' ? 'bg-yellow-100 text-amber-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
