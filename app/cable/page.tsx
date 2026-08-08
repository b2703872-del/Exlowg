"use client"
import { useState } from "react"

const cablePlans = [
  // GOTV
  { id: 2, name: "GOtv Max", amount: 8415 },
  { id: 16, name: "GOtv Jinja Bouquet", amount: 3861 },
  { id: 17, name: "GOtv Jolli", amount: 5742 },
  { id: 53, name: "GOtv Smallie-Monthly", amount: 1881 },
  { id: 84, name: "GOtv Supa", amount: 11286 },
  { id: 85, name: "GOtv Supa Plus", amount: 16632 },
  
  // DSTV
  { id: 44, name: "DSTV Yanga Bouquet E36", amount: 5940 },
  { id: 45, name: "DSTV Confam Bouquet E36", amount: 10890 },
  { id: 47, name: "DSTV Compact Plus", amount: 29700 },
  { id: 48, name: "DSTV Premium", amount: 43855 },
  { id: 49, name: "DSTV Compact", amount: 18810 },
]

export default function CablePage() {
  const [smartcard, setSmartcard] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (plan: any) => {
    if(!smartcard){
      alert("Please enter Smartcard/IUC Number")
      return
    }
    setLoading(true)
    const res = await fetch("/api/buy", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        service: "cable",
        smartcard: smartcard,
        plan_id: plan.id
      })
    })
    const data = await res.json()
    alert(data.message || data.status)
    setLoading(false)
  }

  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Cable TV Subscription</h1>
      
      <input 
        value={smartcard}
        onChange={(e) => setSmartcard(e.target.value)}
        placeholder="Smartcard/IUC Number" 
        className="border p-3 w-full rounded-lg mb-4" 
      />

      {cablePlans.map(plan => (
        <div key={plan.id} className="bg-white p-4 rounded-xl shadow mb-3">
          <div className="flex justify-between mb-2">
            <div>
              <p className="font-bold">{plan.name}</p>
              <p className="text-xs text-gray-500">ID: {plan.id}</p>
            </div>
            <p className="font-bold text-purple-600">₦{plan.amount}</p>
          </div>
          <button 
            onClick={() => handleSubscribe(plan)}
            disabled={loading}
            className="bg-purple-600 text-white w-full p-2 rounded-lg disabled:bg-gray-400"
          >
            {loading ? "Processing..." : "Subscribe Now"}
          </button>
        </div>
      ))}
    </main>
  )
   }
