const discos = [
  { id: 1, name: "Ikeja Electric" },
  { id: 2, name: "Eko Electric" },
  { id: 3, name: "Abuja Electric" },
  { id: 4, name: "Kano Electric" },
  { id: 5, name: "Enugu Electric" },
  { id: 6, name: "Port Harcourt Electric" },
  { id: 7, name: "Ibadan Electric" },
  { id: 8, name: "Kaduna Electric" },
  { id: 9, name: "Jos Electric" },
  { id: 11, name: "Yola Electric" },
  { id: 12, name: "Benin Electric" },
  { id: 13, name: "ABA Electric" },
]

export default function ElectricityPage() {
  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Buy Electricity</h1>
      <input placeholder="Meter Number" className="border p-3 w-full rounded-lg mb-3" />
      <input placeholder="Amount ₦" className="border p-3 w-full rounded-lg mb-4" />
      
      <h2 className="font-semibold mb-2">Select Disco</h2>
      {discos.map(disco => (
        <div key={disco.id} className="bg-white p-4 rounded-xl shadow mb-3 flex justify-between items-center">
          <div>
            <p className="font-semibold">{disco.name}</p>
            <p className="text-xs text-gray-500">ID: {disco.id}</p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Select</button>
        </div>
      ))}
    </main>
  )
}
