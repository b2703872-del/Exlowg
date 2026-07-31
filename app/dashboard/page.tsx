export default function Dashboard() {
  return (
    <main style={{background: '#f5f5f5', minHeight: '100vh', padding: '20px'}}>
      <h1 style={{color: '#0066ff'}}>Welcome to EXLOWG Dashboard</h1>
      <p>Buy Data, Airtime, and VTU Services Here</p>
      <div style={{marginTop: '20px'}}>
        <button style={{background: '#0066ff', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', marginRight: '10px'}}>Buy Data</button>
        <button style={{background: '#0066ff', color: 'white', padding: '12px', borderRadius: '8px', border: 'none'}}>Buy Airtime</button>
      </div>
    </main>
  )
        }
