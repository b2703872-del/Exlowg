'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [form, setForm] = useState({email: '', password: ''})
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Login successful! Welcome back - ' + form.email)
  }

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{background: '#fff', width: '100%', maxWidth: '400px', borderRadius: '28px', padding: '40px 28px', boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)'}}>
        
        <h1 style={{fontSize: '24px', fontWeight: '800', color: '#1e293b', textAlign: 'center', marginBottom: '8px'}}>Welcome Back</h1>
        <p style={{color: '#64748b', fontSize: '14px', textAlign: 'center', marginBottom: '24px'}}>Login to your EXLOWG account</p>

        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          
          <div>
            <label style={{fontSize: '14px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px'}}>Email</label>
            <input type="email" required placeholder="you@email.com" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px'}}/>
          </div>

          <div>
            <label style={{fontSize: '14px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px'}}>Password</label>
            <div style={{position: 'relative'}}>
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                placeholder="Enter password" 
                value={form.password} 
                onChange={(e)=>setForm({...form, password: e.target.value})} 
                style={{width: '100%', padding: '14px 45px 14px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px'}}
              />
              <button 
                type="button" 
                onClick={()=>setShowPassword(!showPassword)}
                style={{position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer'}}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button type="submit" style={{padding: '16px', borderRadius: '14px', fontWeight: '700', fontSize: '16px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', border: 'none', marginTop: '8px'}}>Login</button>
        </form>

        <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#64748b'}}>
          Don't have an account? <a href="/register" style={{color: '#6366f1', fontWeight: '700', textDecoration: 'none'}}>Register</a>
        </p>

      </div>
    </main>
  )
                   }
