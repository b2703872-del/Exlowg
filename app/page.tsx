import Link from 'next/link'

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
      <h1 style={{fontSize: '3rem', fontWeight: 'bold', margin: 0}}>EXLOWG</h1>
      <p style={{fontSize: '1.25rem', marginTop: '8px'}}>Cheapest Data & VTU Platform</p>
      
      <Link 
        href="/dashboard"
        style={{
          background: 'white',
          color: '#0A84FF',
          padding: '12px 32px',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          marginTop: '20px'
        }}
      >
        Get Started
      </Link>
    </main>
  )
}
