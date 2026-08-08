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
  
  // OTHER
  { id: 43, name: "Padi", amount: 4356 },
  { id: 90, name: "SUPER DISH 1MONTH", amount: 9800 },
  { id: 95, name: "SUPER DISH 1WEEK", amount: 3300 },
  { id: 88, name: "BASIC DISH 1MONTH", amount: 5100 },
  { id: 93, name: "BASIC DISH 1WEEK", amount: 1700 },
]

export default function CablePage() {
  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Cable TV Subscription</h1>
      {cablePlans.map(plan => (
        <div key={plan.id} className="bg-white p-4 rounded-xl shadow mb-3">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">{plan.name}</p>
              <p className="text-xs text-gray-500">ID: {plan.id}</p>
            </div>
            <p className="font-bold text-purple-600">₦{plan.amount}</p>
          </div>
          <input placeholder="Smartcard/IUC Number" className="border p-2 w-full rounded-lg mt-2 mb-2" />
          <button className="bg-purple-600 text-white w-full p-2 rounded-lg">Subscribe Now</button>
        </div>
      ))}
    </main>
  )
   }
