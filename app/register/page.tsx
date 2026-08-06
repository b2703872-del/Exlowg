'use client'
import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({name: '', email: '', phone: '', password: ''})

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Account created! Welcome to EXLOWG - ' + form.name)
  }

  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{background: '#fff', width: '100%', maxWidth: '400px', borderRadius: '28px', padding: '40px 28px', boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)'}}>
        
        <h1 style={{fontSize: '24px', fontWeight: '800', color: '#1e293b', textAlign: 'center', marginBottom: '8px'}}>Create Account</h1>
        <p style={{color: '#64748b', fontSize: '14px', textAlign: 'center', marginBottom: '24px'}}>Join EXLOWG today</p>

        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          
          <div>
            <label style={{fontSize: '14px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px'}}>Full Name</label>
            <input type="text" required placeholder="John Doe" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px'}}/>
          </div>

          <div>
            <label style={{fontSize: '14px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px'}}>Email</label>
            <input type="email" required placeholder="you@email.com" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px'}}/>
          </div>

          <div>
            <label style={{fontSize: '14px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px'}}>Phone Number</label>
            <input type="tel" required placeholder="080xxxxxxxx" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px'}}/>
          </div>

          <div>
            <label style={{fontSize: '14px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '6px'}}>Password</label>
            <input type="password" required placeholder="Min 6 characters" value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px'}}/>
          </div>

          <button type="submit" style={{padding: '16px', borderRadius: '14px', fontWeight: '700', fontSize: '16px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', border: 'none', marginTop: '8px'}}>Create Account</button>
        </form>

        <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#64748b'}}>
          Already have an account? <a href="/login" style={{color: '#6366f1', fontWeight: '700', textDecoration: 'none'}}>Login</a>
        </p>

      </div>
    </main>
  )
                  }
