import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../components/pageheader";

export default function ProductDetail() {
    // Ambil ID dari URL (contoh: pada /products/1, id = "1")
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Panggil file JSON statis kita
        axios
            .get("/product-hpai.json")
            .then((response) => {
                // Cari produk yang ID-nya sesuai dengan ID di URL
                // Kita gunakan '==' karena id dari useParams berupa string, sedangkan di JSON berupa angka (number)
                const foundProduct = response.data.find(item => item.id == id);
                
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError("Data produk HPAI tidak ditemukan.");
                }
            })
            .catch((err) => {
                setError(err.message || "Gagal memuat detail produk");
            });
    }, [id]);

    if (error) return <div className="text-red-600 p-6 text-center bg-red-100 m-6 rounded-lg">{error}</div>;
    if (!product) return <div className="p-6 text-center text-emerald-600 font-semibold mt-10">Memuat rincian produk HPAI...</div>;

    const breadcrumb = ["Dashboard", "Katalog Produk", product.title];

    return (
        <div className="p-6">
            <PageHeader title="Rincian Produk HPAI" breadcrumb={breadcrumb} />

            <div className="bg-white rounded-2xl shadow-lg max-w-4xl mx-auto mt-6 overflow-hidden flex flex-col md:flex-row">
                {/* Bagian Gambar */}
                <div className="md:w-1/2 p-6 bg-gray-50 flex justify-center items-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-xl w-full max-h-72 object-contain shadow-sm border border-gray-100"
                    />
                </div>
                
                {/* Bagian Informasi Atribut HPAI */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-2.5 py-1 rounded">
                            {product.category}
                        </span>
                        <span className="text-xs font-bold text-white bg-orange-500 px-2.5 py-1 rounded-full">
                            {product.pv} PV (Point Value)
                        </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">{product.title}</h2>
                    <p className="text-gray-500 text-sm mb-4">Brand: <span className="font-semibold text-gray-700">{product.brand}</span></p>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {product.description}
                    </p>
                    
                    {/* Perbandingan Harga (ditambahkan ?. agar tidak error jika data kosong) */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-4 mb-6">
                        <div>
                            <p className="text-gray-400 text-xs mb-1">Harga Konsumen</p>
                            <p className="text-gray-500 font-semibold text-base line-through">
                                Rp {product.price_customer?.toLocaleString("id-ID")}
                            </p>
                        </div>
                        <div>
                            <p className="text-emerald-600 text-xs mb-1 font-bold">Harga Member (Agen)</p>
                            <p className="text-emerald-600 font-extrabold text-2xl">
                                Rp {product.price_member?.toLocaleString("id-ID")}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/products" className="px-5 py-2.5 border border-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition text-sm">
                            Kembali ke Katalog
                        </Link>
                        <button className="flex-1 px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition shadow-md text-sm text-center">
                            Tambah ke Transaksi POS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}