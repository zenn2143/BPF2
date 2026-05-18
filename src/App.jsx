import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts (Tetap import biasa karena ini struktur utama)
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';

// Komponen Loading yang baru dibuat
import Loading from './components/Loading.jsx';

// Pages (Diubah menjadi Lazy Import agar dimuat dinamis)
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const Login = React.lazy(() => import('./pages/auth/Login.jsx'));
const Register = React.lazy(() => import('./pages/auth/Register.jsx'));
const Forgot = React.lazy(() => import('./pages/auth/Forgot.jsx'));
const Categories = React.lazy(() => import('./pages/Categories.jsx'));

function App() {
  return (
    // Membungkus seluruh rute dengan Suspense
    <Suspense fallback={<Loading />}>
   <Routes>
  {/* 🟢 ROUTE UNTUK DASHBOARD */}
  <Route element={<MainLayout />}>
    <Route path="/" element={<Dashboard />} />
    <Route path="/categories" element={<Categories />} /> {/* Baris 25 yang bener */}
    <Route path="/orders" element={<div className="p-10 text-2xl">Halaman Orders</div>} />
    <Route path="/settings" element={<div className="p-10 text-2xl">Halaman Settings</div>} />
  </Route>

        {/* 🔵 ROUTE UNTUK HALAMAN AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;