export default function Dashboard() {
  return (
    <main style={{
      background: '#f5f5f5', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'system-ui'
    }}>
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <h1 style={{color: '#0A84FF', fontSize: '32px', marginBottom: '8px'}}>Welcome to EXLOWG</h1>
        <p style={{fontSize: '16px', color: '#666', marginBottom: '30px'}}>Buy Data, Airtime, and VTU Services Here</p>
        
        <div style={{display: 'grid', gap: '15px'}}>
          <div style={{background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
            <h2 style={{margin: 0, fontSize: '20px'}}>📱 Buy Data</h2>
            <p style={{color: '#666', margin: '8px 0 16px'}}>MTN, GLO, Airtel, 9Mobile - Cheapest rates</p>
            <button style={{background: '#0A84FF', color: 'white', padding: '12px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', width: '100%'}}>Buy Now</button>
          </div>
          
          <div style={{background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
            <h2 style={{margin: 0, fontSize: '20px'}}>📞 Buy Airtime</h2>
            <p style={{color: '#666', margin: '8px 0 16px'}}>Instant recharge for all networks</p>
            <button style={{background: '#0A84FF', color: 'white', padding: '12px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', width: '100%'}}>Recharge Now</button>
          </div>
        </div>
        
        <a href="/" style={{display: 'block', marginTop: '30px', color: '#0A84FF', textAlign: 'center', fontWeight: 'bold'}}>← Back to Home</a>
      </div>
    </main>
  )
      }
