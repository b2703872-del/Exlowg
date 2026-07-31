export default function Home() {
  return (
    <main style={{
      display: 'flex', 
      minHeight: '100vh', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#0A84FF',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>EXLOWG</h1>
      <p style={{fontSize: '1.25rem', marginBottom: '2rem'}}>Cheapest Data & VTU Platform</p>
      <a 
        href="/login" 
        style={{
          background: 'white', 
          color: '#0A84FF', 
          padding: '12px 32px', 
          borderRadius: '8px', 
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        Get Started
      </a>
    </main>
  )
}
