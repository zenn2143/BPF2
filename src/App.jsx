import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts (Tetap import biasa karena ini struktur utama)
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';

// Komponen Loading yang baru dibuat
import Loading from './components/Loading.jsx';

// Pages (Diubah menjadi Lazy Import agar dimuat dinamis)
const Dashboard = React.lazy(() => import('./pages/Ownerdashboard.jsx'));

// 🟠 TAMBAHAN BARU: Lazy import untuk Customer Dashboard
const CustomerDashboard = React.lazy(() => import('./pages/CustomerDashboard.jsx'));

const Login = React.lazy(() => import('./pages/auth/Login.jsx'));
const Register = React.lazy(() => import('./pages/auth/Register.jsx'));
const Forgot = React.lazy(() => import('./pages/auth/Forgot.jsx'));
const Categories = React.lazy(() => import('./pages/Categories.jsx'));
const Settings = React.lazy(() => import('./pages/Settings.jsx'));

// 🟢 Tambahkan Lazy Import untuk Products dan ProductDetail di sini
const Products = React.lazy(() => import('./pages/Products.jsx'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail.jsx'));
const Orders = React.lazy(() => import('./pages/Orders.jsx'));

function App() {
  return (
    // Membungkus seluruh rute dengan Suspense
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* 🟢 ROUTE UNTUK DASHBOARD */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          
          {/* 🟠 TAMBAHAN BARU: Route untuk Customer Dashboard */}
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />

          <Route path="/categories" element={<Categories />} />
          
          {/* 🟢 Tambahkan 2 Route Baru di sini */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
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