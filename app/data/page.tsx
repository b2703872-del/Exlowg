"use client"
import { useState, useEffect } from "react"

function getSize(id: number, network: string) {
  const sizes: any = {
    AIRTEL: { 336: "2GB", 338: "4GB", 339: "7GB", 340: "10GB", 330: "18GB" },
    MTN: { 347: "1GB", 348: "2.5GB", 349: "5.6GB", 346: "10GB" },
    GLO: { 237: "750MB", 238: "1.5GB", 240: "2.5GB", 241: "10GB" }
  }
  return sizes[network]?.[id] || "Data"
}

const dataPlans = {
  AIRTEL: [
    { id: 336, selling_price: 650 }, // VTU cost: 515
    { id: 338, selling_price: 1100 }, // VTU cost: 765
    { id: 339, selling_price: 2300 }, // VTU cost: 2060
    { id: 340, selling_price: 3300 }, // VTU cost: 3060
    { id: 330, selling_price: 6200 }, // VTU cost: 5820
  ],
  MTN: [
    { id: 347, selling_price: 740 }, // VTU cost: 235
    { id: 348, selling_price: 700 }, // VTU cost: 535
    { id: 349, selling_price: 1600 }, // VTU cost: 1250
    { id: 346, selling_price: 3500 }, // VTU cost: 3228
  ],
  GLO: [
    { id: 237, selling_price: 250 }, // VTU cost: 187
    { id: 238, selling_price: 350 }, // VTU cost: 280
    { id: 240, selling_price: 570 }, // VTU cost: 467
    { id: 241, selling_price: 2200 }, // VTU cost: 1370
  ]
}

function detectNetwork(phone: string) {
  const num = phone.slice(0,4)
  const prefixes: any = {
    MTN: ["0803","0806","0703","0706","0813","0814","0816","0903","0906"],
    GLO: ["0805","0807","0705","0811","0815","0905"],
    AIRTEL: ["0802","0808","0708","0812","0902","0907"]
  }
  for(let net in prefixes){
    if(prefixes[net].includes(num)) return net
  }
  return ""
}

export default function DataPage() {
  const [phone, setPhone] = useState("")
  const [network, setNetwork] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(phone.length >= 4){
      setNetwork(detectNetwork(phone))
    } else {
      setNetwork("")
    }
  }, [phone])

  const handleBuy = async (plan: any) => {
    if(!phone || phone.length < 11){
      alert("Enter valid 11 digit number")
      return
    }
    setLoading(true)
    const res = await fetch("/api/buy", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        service: "data",
        phone: phone,
        plan_id: plan.id // send VTU ID to backend
      })
    })
    const data = await res.json()
    alert(data.message || data.status)
    setLoading(false)
  }

  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <div className="bg-yellow-100 p-3 rounded-lg mb-4 text-center text-sm font-semibold">Advertise</div>
      
      <input 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="080xxxxxxxxx" 
        type="tel"
        maxLength={11}
        className="border p-3 w-full rounded-lg mb-2 text-lg" 
      />
      
      {network && (
        <div className="flex items-center mb-4">
          <span className="font-bold text-purple-600 text-lg">{network}</span>
          <span className="text-sm text-gray-500 ml-2">Name on Sim Card</span>
        </div>
      )}

      {network && (
        <div className="grid grid-cols-2 gap-3">
          {dataPlans[network as keyof typeof dataPlans]?.map(plan => (
            <button 
              key={plan.id}
              onClick={() => handleBuy(plan)}
              disabled={loading}
              className="bg-white p-6 rounded-xl shadow-md border-gray-200 active:scale-95"
            >
              <p className="font-bold text-2xl mb-1">{getSize(plan.id, network)}</p>
              <p className="text-purple-600 font-bold text-lg">₦{plan.selling_price}</p> {/* OUR PRICE */}
            </button>
          ))}
        </div>
      )}
    </main>
  )
    }
