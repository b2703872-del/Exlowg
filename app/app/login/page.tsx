'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if(!email || !password){
      alert("Please fill all fields")
      return
    }
    
    // For now we no dey check password. Later we go connect database
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userName', 'Babarinde Wasiu') 
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-6">Login to EXLOWG</p>
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6"
        />
        
        <button 
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold"
        >
          Login
        </button>
      </div>
    </div>
  )
}
