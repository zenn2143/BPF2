export default function Forgot() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">Forgot Your Password? 🔒</h2>
      <p className="text-sm text-center text-slate-500 mb-6">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      <form>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-600 mb-1">Email Address</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981]" 
            placeholder="admin@hpai.com" 
          />
        </div>
        
        <button 
          type="button" 
          className="w-full bg-[#10B981] text-white font-bold py-3 rounded-xl hover:bg-[#059669] transition-all"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}