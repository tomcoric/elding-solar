const stats = [
  { value: "30+", label: "Završenih projekata", icon: "🏗️" },
  { value: "250+", label: "kW instalirane snage", icon: "⚡" },
  { value: "100%", label: "Zadovoljnih klijenata", icon: "⭐" },
  { value: "10+", label: "Godina iskustva", icon: "📅" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-amber-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-amber-900 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
