'use client' // ADD THIS LINE ON TOP - VERY IMPORTANT

export default function LandingPage() {
  return (
    <main style={{minHeight: '100vh', background: 'linear-gradient(180deg, #5B3DF1 0%, #7C5CFF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{background: '#fff', width: '100%', maxWidth: '400px', borderRadius: '28px', padding: '40px 28px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', textAlign: 'center'}}>
        
        <div style={{width: '64px', height: '64px', background: 'linear-gradient(135deg, #5B3DF1, #7C5CFF)', color: 'white', fontSize: '32px', fontWeight: '900', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>E</div>

        <h1 style={{fontSize: '28px', fontWeight: '800', color: '#1e293b', marginBottom: '8px'}}>Welcome to EXLOWG</h1>
        <p style={{color: '#64748b', fontSize: '15px', marginBottom: '32px'}}>Buy your cheap service here</p>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px'}}>
          <a href="/login" style={{padding: '16px', borderRadius: '14px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', background: '#5B3DF1', color: 'white', display: 'block'}}>Login</a>
          <a href="/register" style={{padding: '16px', borderRadius: '14px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', background: 'white', color: '#5B3DF1', border: '2px solid #5B3DF1', display: 'block'}}>Register</a>
        </div>

        <div style={{color: '#16a34a', fontWeight: '700', fontSize: '14px', marginBottom: '24px'}}>
          🔥 Join 10,000+ users trusting EXLOWG
        </div>

        <div style={{borderTop: '1px solid #f1f5f9', paddingTop: '18px', fontSize: '12px', color: '#94a3b8'}}>
          <p>Proudly supporting</p>
          <p style={{color: '#475569', fontWeight: '600', fontSize: '11px', lineHeight: '1.4', marginTop: '4px'}}>Federal Ministry of Communications, Innovation and Digital Economy</p>
        </div>
      </div>
    </main>
  )
          }
