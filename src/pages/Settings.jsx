import React, { useMemo, useState } from 'react';
import PageHeader from '../components/pageheader';

export default function Settings() {
  const userData = useMemo(() => {
    const stored = localStorage.getItem('userData');
    return stored ? JSON.parse(stored) : null;
  }, []);

  const [form, setForm] = useState({
    fullName: userData?.firstName ? `${userData.firstName} ${userData.lastName}` : 'User Name',
    email: userData?.email || 'user@example.com',
    phone: userData?.phone || '+62 812 3456 789',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    appNotifications: true,
    darkMode: false,
    biometricLogin: false,
  });

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Perubahan disimpan.');
  };

  return (
    <div className="p-6">
      <PageHeader title="Pengaturan" breadcrumb={["Dashboard", "Pengaturan"]} />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] mt-6">
        <section className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Profil Akun</h2>
            <p className="text-sm text-slate-500 mb-6">Perbarui informasi dasar akun Anda untuk tetap terkini.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Nama Lengkap
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Nomor Telepon
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </label>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Keamanan</h2>
            <p className="text-sm text-slate-500 mb-6">Ubah kata sandi Anda secara berkala untuk keamanan yang lebih baik.</p>
            <div className="grid gap-4">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Kata Sandi Saat Ini
                <input
                  type="password"
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  placeholder="••••••••"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Kata Sandi Baru
                  <input
                    type="password"
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    placeholder="••••••••"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Konfirmasi Kata Sandi
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    placeholder="••••••••"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-800">Notifikasi</h2>
                <p className="text-sm text-slate-500 mt-1">Kelola preferensi notifikasi Anda.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { label: 'Email Notifikasi', name: 'emailNotifications' },
                { label: 'Notifikasi Aplikasi', name: 'appNotifications' },
                { label: 'Login Biometrik', name: 'biometricLogin' },
                { label: 'Tema Gelap', name: 'darkMode' },
              ].map((item) => (
                <label
                  key={item.name}
                  className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={form[item.name]}
                    onChange={handleChange}
                    className="h-5 w-5 rounded bg-white text-emerald-600 focus:ring-emerald-500"
                  />
                </label>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-slate-900 p-6 text-white shadow-xl shadow-emerald-900/20">
            <h3 className="text-xl font-semibold">Tips Keamanan</h3>
            <p className="mt-3 text-sm leading-6 text-emerald-100/90">
              Pastikan kata sandi Anda unik, gunakan kombinasi angka dan simbol, dan update secara berkala.
            </p>
            <div className="mt-6 space-y-3 text-sm text-emerald-100/90">
              <div className="rounded-2xl bg-white/10 p-4">Gunakan kata sandi setidaknya 8 karakter.</div>
              <div className="rounded-2xl bg-white/10 p-4">Aktifkan notifikasi agar tidak melewatkan update akun.</div>
              <div className="rounded-2xl bg-white/10 p-4">Jangan bagikan kata sandi kepada pihak lain.</div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-800">Akun Anda</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-medium text-slate-800">Role</p>
                <p>{userData?.username === 'emilys' ? 'Owner' : 'Customer'}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-medium text-slate-800">Username</p>
                <p>{userData?.username || '-'}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-800">Bantuan</h3>
            <p className="mt-3 text-sm text-slate-500">Hubungi support kami jika Anda butuh bantuan lebih lanjut terkait akun.</p>
            <button className="mt-5 w-full rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition-all">
              Kirim Permintaan Support
            </button>
          </div>
        </aside>
      </div>

      <div className="mt-8 flex items-center justify-end gap-3">
        <button
          type="button"
          className="rounded-3xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
        >
          Batal
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-3xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition-all"
        >
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
}
