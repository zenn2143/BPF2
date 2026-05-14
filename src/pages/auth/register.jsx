export default function Register() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Create Your Account ✨</h2>
      
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-600 mb-1">Email Address</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" 
            placeholder="admin@hpai.com" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-600 mb-1">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" 
            placeholder="••••••••" 
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-600 mb-1">Confirm Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" 
            placeholder="••••••••" 
          />
        </div>
        
        <button 
          type="button" 
          className="w-full bg-[#10B981] text-white font-bold py-3 rounded-xl hover:bg-[#059669] transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
}