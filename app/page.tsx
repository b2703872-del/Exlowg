export default function LandingPage() {
  return (
    <main style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.logo}>E</div>

        <h1 style={styles.title}>Welcome to EXLOWG</h1>
        <p style={styles.tagline}>Buy your cheap service here</p>
        
        <div style={styles.btns}>
          <a href="/login" style={{...styles.btn, ...styles.btnFill}}>Login</a>
          <a href="/register" style={{...styles.btn, ...styles.btnBorder}}>Register</a>
        </div>

        <div style={styles.proof}>
          🔥 Join 10,000+ users trusting EXLOWG
        </div>

        <div style={styles.sponsor}>
          <p>Proudly supporting</p>
          <p style={styles.ministry}>Federal Ministry of Communications, Innovation and Digital Economy</p>
        </div>
      </div>
    </main>
  )
}

const styles = {
  wrap: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #5B3DF1 0%, #7C5CFF 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  card: {
    background: '#fff',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '28px',
    padding: '40px 28px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    textAlign: 'center'
  },
  logo: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #5B3DF1, #7C5CFF)',
    color: 'white',
    fontSize: '32px',
    fontWeight: '900',
    borderRadius: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '8px'
  },
  tagline: {
    color: '#64748b',
    fontSize: '15px',
    marginBottom: '32px'
  },
  btns: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '24px'
  },
  btn: {
    padding: '16px',
    borderRadius: '14px',
    fontWeight: '700',
    fontSize: '16px',
    textDecoration: 'none',
    display: 'block'
  },
  btnFill: {
    background: '#5B3DF1',
    color: 'white'
  },
  btnBorder: {
    background: 'white',
    color: '#5B3DF1',
    border: '2px solid #5B3DF1'
  },
  proof: {
    color: '#16a34a',
    fontWeight: '700',
    fontSize: '14px',
    marginBottom: '24px'
  },
  sponsor: {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '18px',
    fontSize: '12px',
    color: '#94a3b8'
  },
  ministry: {
    color: '#475569',
    fontWeight: '600',
    fontSize: '11px',
    lineHeight: '1.4',
    marginTop: '4px'
  }
          }
