"use client"
import { useState, useEffect } from "react"

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

export default function AirtimePage() {
  const [phone, setPhone] = useState("")
  const [amount, setAmount] = useState("")
  const [network, setNetwork] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(phone.length >= 4){
      setNetwork(detectNetwork(phone))
    } else {
      setNetwork("")
    }
  }, [phone])

  const handleBuy = async () => {
    if(!phone || phone.length < 11){
      alert("Enter valid 11 digit number")
      return
    }
    if(!amount || Number(amount) < 50){
      alert("Minimum airtime is ₦50")
      return
    }
    setLoading(true)
    const res = await fetch("/api/buy", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ service: "airtime", phone: phone, amount: Number(amount), network: network })
    })
    const data = await res.json()
    alert(data.message || data.status)
    setLoading(false)
  }

  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <div className="bg-yellow-100 p-3 rounded-lg mb-4 text-center text-sm font-semibold">Advertise</div>
      
      <div className="flex items-center gap-2 mb-2">
        <select className="border p-2 rounded font-bold text-purple-600 bg-white">
          <option>{network || "Network"}</option>
        </select>
        <input 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="080xxxxxxxxx" 
          type="tel"
          maxLength={11}
          className="border p-3 flex-1 rounded-lg text-lg" 
        />
      </div>
      
      <p className="text-sm text-gray-500 mb-4">Name on Sim Card</p>

      <input 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount" 
        type="number"
        className="border p-3 w-full rounded-lg mb-4 text-lg" 
      />

      <button 
        onClick={handleBuy}
        disabled={loading}
        className="bg-purple-600 text-white w-full p-4 rounded-lg font-bold text-lg active:scale-95"
      >
        {loading? "Processing..." : "Buy Airtime"}
      </button>
    </main>
  )
             }
