export default function HomePage() {
  const bills = [
    { name: "Airtime", icon: "📱", link: "/airtime" },
    { name: "Data", icon: "🌐", link: "/data" },
    { name: "Electricity", icon: "💡", link: "/electricity" },
    { name: "Cable TV", icon: "📺", link: "/cable" },
  ]

  return (
    <main className="bg-gray-100 min-h-screen pb-20">
      
      {/* TOP WALLET CARD */}
      <div className="bg-purple-700 text-white p-5 rounded-b-3xl">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-lg">Roukassah</p>
          <div className="flex gap-4 text-xl">
            <span>🔔</span>
            <span>❓</span>
          </div>
        </div>
        
        <div className="bg-white/20 p-4 rounded-xl">
          <p className="text-sm opacity-80">Wallet Balance</p>
          <h2 className="text-3xl font-bold">₦0.00</h2>
          <p className="text-xs mt-1 opacity-80">₦0.00 Share Bonus</p>
        </div>

        {/* Quick Actions - FUND IS HERE */}
        <div className="flex justify-around mt-4">
          <a href="/airtime" className="flex flex-col items-center">
            <div className="bg-white text-purple-700 p-3 rounded-full text-xl">📱</div>
            <p className="text-xs mt-1 font-medium">Airtime</p>
          </a>
          <a href="/data" className="flex flex-col items-center">
            <div className="bg-white text-purple-700 p-3 rounded-full text-xl">🌐</div>
            <p className="text-xs mt-1 font-medium">Data</p>
          </a>
          <a href="/fund" className="flex flex-col items-center">
            <div className="bg-white text-purple-700 p-3 rounded-full text-xl">💳</div>
            <p className="text-xs mt-1 font-medium">Fund</p>
          </a>
        </div>
      </div>

      {/* BILLS GRID - ONLY 4 VTUKONNECT SERVICES */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-3">Bills</h3>
        <div className="grid grid-cols-4 gap-4">
          {bills.map((bill) => (
            <a href={bill.link} key={bill.name} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-md w-full flex items-center justify-center h-16 hover:shadow-lg transition">
                <span className="text-2xl">{bill.icon}</span>
              </div>
              <p className="text-xs mt-1 text-center font-medium text-gray-700">{bill.name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM NAV - HISTORY NOT MENU */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around p-3">
        <button className="flex flex-col items-center text-purple-700">
          <span className="text-xl">🏠</span>
          <p className="text-xs font-semibold">Home</p>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <span className="text-xl">📜</span>
          <p className="text-xs">History</p>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <span className="text-xl">🎁</span>
          <p className="text-xs">Redeem</p>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <span className="text-xl">👤</span>
          <p className="text-xs">Me</p>
        </button>
      </div>

    </main>
  )
}
