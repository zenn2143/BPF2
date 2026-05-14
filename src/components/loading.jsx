export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FDF6E3] w-full">
      <div className="text-center flex flex-col items-center">
        {/* Lingkaran Loading berputar */}
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-[#10B981] rounded-full animate-spin mb-4"></div>
        <p className="text-lg font-bold text-slate-700">Loading...</p>
      </div>
    </div>
  );
}