'use client'
import { useState } from 'react'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    if(!name || !email || !password){
      alert("Please fill all fields")
      return
    }
    
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    
    const data = await res.json()
    
    if(data.success){
      alert("Account created! Welcome to EXLOWG - " + name)
      window.location.href = '/login'
    } else {
      alert("Error: " + data.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-gray-500 text-center mb-6">Join EXLOWG today</p>
        
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />
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
          onClick={handleSignup}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold mb-4"
        >
          Create Account
        </button>
        
        <p className="text-center text-gray-600">
          Already have an account? <a href="/login" className="text-purple-600 font-bold">Login</a>
        </p>
      </div>
    </div>
  )
  }
