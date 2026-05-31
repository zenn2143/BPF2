import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import PageHeader from "../components/pageheader";

export default function Products() {
    const breadcrumb = ["Dashboard", "Katalog Produk HPAI"];
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Karena menggunakan file statis di folder public,
            // cukup panggil nama filenya secara langsung
            axios
                .get("/product-hpai.json")
                .then((response) => {
                    // Cek apakah response.data adalah array (untuk mencegah error .map)
                    const data = Array.isArray(response.data) ? response.data : [];
                    
                    // Fitur pencarian sederhana untuk data statis
                    // (Karena file lokal tidak bisa dipanggil dengan "?q=search" seperti API betulan)
                    if (query) {
                        const filteredData = data.filter(item => 
                            item.title.toLowerCase().includes(query.toLowerCase()) || 
                            item.category.toLowerCase().includes(query.toLowerCase())
                        );
                        setProducts(filteredData);
                    } else {
                        setProducts(data);
                    }
                })
                .catch((err) => {
                    setError(err.message || "Gagal memuat data produk HPAI");
                });
        }, 500); // Debounce 500ms

        return () => clearTimeout(timeout);
    }, [query]);

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    return (
        <div className="p-6">
            <PageHeader title="Katalog Produk HPAI" breadcrumb={breadcrumb} />
            
            {errorInfo}

            {/* Input Pencarian */}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk HPAI (MHS, Spirulina, Kopi Sevel...)"
                className="mb-6 p-3 w-full bg-white rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {/* Tabel Data Produk HPAI */}
            <div className="overflow-x-auto rounded-2xl shadow-lg">
                <table className="min-w-full divide-y divide-gray-200 text-left">
                    <thead>
                        <tr className="bg-emerald-600 text-white text-sm font-semibold">
                            <th className="px-6 py-4">#</th>
                            <th className="px-6 py-4">Nama Produk</th>
                            <th className="px-6 py-4">Kategori</th>
                            <th className="px-6 py-4">Harga Konsumen</th>
                            <th className="px-6 py-4">Harga Member</th>
                            <th className="px-6 py-4">Point Value (PV)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                        {Array.isArray(products) && products.length > 0 ? (
                            products.map((item, index) => (
                                <tr key={item.id} className="hover:bg-emerald-50 transition-colors duration-200">
                                    <td className="px-6 py-4 font-medium text-gray-700">{index + 1}.</td>
                                    <td className="px-6 py-4">
                                        <Link to={`/products/${item.id}`} className="text-emerald-600 font-semibold hover:text-emerald-800 underline">
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">{item.category}</td>
                                    <td className="px-6 py-4">Rp {item.price_customer?.toLocaleString("id-ID") || 0}</td>
                                    <td className="px-6 py-4 font-medium text-emerald-700">Rp {item.price_member?.toLocaleString("id-ID") || 0}</td>
                                    <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 py-1 px-2.5 rounded-full text-xs font-bold">{item.pv} PV</span></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                    Data produk HPAI tidak ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}