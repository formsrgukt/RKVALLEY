export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Dashboard Overview
      </h1>
      <p className="text-slate-500 mb-8">
        Welcome to the RGUKT RK Valley portal management system.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Active Notices", value: "12", color: "text-blue-500" },
          { title: "Open Tenders", value: "5", color: "text-emerald-500" },
          { title: "Recent Updates", value: "8", color: "text-amber-500" },
          { title: "System Health", value: "Good", color: "text-violet-500" }
        ].map(stat => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-sm text-slate-500 font-semibold mb-2">{stat.title}</h3>
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
