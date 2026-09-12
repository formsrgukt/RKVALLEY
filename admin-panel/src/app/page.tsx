export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Total Notices", count: "124", color: "bg-blue-500", icon: "??" },
          { title: "Active Tenders", count: "8", color: "bg-emerald-500", icon: "??" },
          { title: "Recent News", count: "12", color: "bg-purple-500", icon: "??" }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/50 flex items-center justify-between hover:shadow-md transition-all duration-300">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-slate-900">{stat.count}</h3>
            </div>
            <div className={`w-14 h-14 rounded-2xl ${stat.color} text-white flex items-center justify-center text-2xl shadow-inner`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm ring-1 ring-slate-200/50 p-10 flex flex-col items-center justify-center text-center min-h-[300px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-800 to-red-500"></div>
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 ring-8 ring-slate-50/80 shadow-inner">
          <span className="text-5xl">??</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">Welcome to RGUKT Admin</h2>
        <p className="text-slate-500 max-w-lg text-lg leading-relaxed">
          Manage institutional notices, academic circulars, tenders, and news from the navigation menu on the left.
        </p>
      </div>
    </div>
  );
}
