import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen relative" style={{background: 'linear-gradient(rgba(10,132,255,0.6), rgba(10,132,255,0.6)), url(/nigerian-family.jpg) center/cover'}}>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white rounded-[20px] shadow-2xl max-w-md w-full p-8">
          
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold" style={{color: '#0A84FF'}}>EXLOWG</h1>
            <p className="text-sm" style={{color: '#0A84FF'}}>Fast • Reliable • Affordable</p>
          </div>

          <div className="bg-[#00C851] text-white text-center py-2 rounded-lg text-sm font-semibold mb-4">
            Join 10,000+ Members Saving Daily
          </div>

          <h2 className="text-2xl font-bold text-center mb-2" style={{color: '#0A84FF'}}>
            Your One-Stop Platform for Data, Airtime & Bills
          </h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            Join 10K+ Nigerians saving money on MTN, AIRTEL, GLO every day
          </p>

          <Link href="/register" className="w-full block text-center text-white py-3 rounded-lg font-bold mb-3" style={{background: '#0A84FF'}}>
            Create Free Account
          </Link>
          <Link href="/login" className="w-full block text-center py-3 rounded-lg font-bold border-2" style={{borderColor: '#0A84FF', color: '#0A84FF'}}>
            Login
          </Link>

          <div className="flex justify-between mt-6 text-xs text-gray-600">
            <span>⚡ Instant Delivery</span>
            <span>💰 Cheapest Rates</span>
            <span>🎧 24/7 Support</span>
          </div>

          <p className="text-center font-bold mt-4" style={{color: '#0A84FF'}}>₦50M+ Transactions Processed</p>
          
          <p className="text-center text-xs text-gray-400 mt-6">© 2026 EXLOWG. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
            }
