import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "", 
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://dummyjson.com/user/login", {
        username: dataForm.email, 
        password: dataForm.password,
      });

      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "An error occurred");
      } else {
        setError(err.message || "An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-4 text-sm font-light text-gray-700 rounded-lg flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-4 text-sm rounded-lg flex items-center text-gray-700 font-medium">
      <ImSpinner2 className="me-2 animate-spin text-lg text-[#10B981]" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Username (try: emilys)
          </label>
          <input 
            type="text" 
            name="email"
            value={dataForm.email} // Sinkronisasi state
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" 
            placeholder="Enter username" 
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-600 mb-1">
            Password (try: emilyspass)
          </label>
          <input 
            type="password" 
            name="password"
            value={dataForm.password} // Sinkronisasi state
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" 
            placeholder="••••••••" 
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-xl transition-all ${
            loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#10B981] hover:bg-[#059669]'
          }`}
        >
          {loading ? 'Processing...' : 'Login'}
        </button>
      </form>
    </div>
  );
}