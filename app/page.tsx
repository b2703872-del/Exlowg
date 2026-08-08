"use client"
import Link from "next/link"

export default function HomePage() {
  const services = [
    { name: "Airtime", icon: "📱", link: "/airtime", color: "bg-green-500" },
    { name: "Data", icon: "🌐", link: "/data", color: "bg-purple-600" },
    { name: "Cable TV", icon: "📺", link: "/cable", color: "bg-blue-500" },
    { name: "Electricity", icon: "💡", link: "/electricity", color: "bg-yellow-500" },
  ]

  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <div className="bg-yellow-100 p-3 rounded-lg mb-4 text-center text-sm font-semibold">Advertise</div>
      
      <h1 className="text-2xl font-bold mb-2">Welcome to Exlowg</h1>
      <p className="text-gray-500 mb-6">Buy Airtime, Data, Bills & more</p>

      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <Link 
            key={service.name}
            href={service.link}
            className={`${service.color} text-white p-6 rounded-2xl shadow-lg active:scale-95 flex-col items-center justify-center h-32`}
          >
            <span className="text-4xl mb-2">{service.icon}</span>
            <span className="font-bold text-lg">{service.name}</span>
          </Link>
        ))}
      </div>
    </main>
  )
            }
