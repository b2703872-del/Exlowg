export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">EXLOWG</h1>
        <p className="text-xl mb-8">Cheapest Data, Airtime & Bills in Nigeria</p>
        <p className="text-lg mb-6">VTU Platform Powered by Speed</p>
        <a 
          href="/login" 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </main>
  )
    }
