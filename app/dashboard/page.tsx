'use client'

export default function DashboardPage() {
  const services = [
    {name: 'Buy Data', icon: '📶', color: '#6366f1'},
    {name: 'Airtime', icon: '📱', color: '#8b5cf6'},
    {name: 'Cable TV', icon: '📺', color: '#d946ef'},
    {name: 'Electricity', icon: '💡', color: '#06b6d4'},
  ]

  return (
    <main style={{minHeight: '100vh', background: '#f8fafc', padding: '24px'}}>
      <div style={{maxWidth: '500px', margin: '0 auto'}}>
        
        {/* Header */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
          <div>
            <h1 style={{fontSize: '24px', fontWeight: '800', color: '#1e293b'}}>Hi, User! 👋</h1>
            <p style={{color: '#64748b', fontSize: '14px'}}>Welcome to EXLOWG</p>
          </div>
          <div style={{width: '44px', height: '44px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800'}}>E</div>
        </div>

        {/* Balance Card */}
        <div style={{background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)', borderRadius: '20px', padding: '24px', color: 'white', marginBottom: '24px', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'}}>
          <p style={{fontSize: '14px', opacity: 0.9}}>Wallet Balance</p>
          <h2 style={{fontSize: '32px', fontWeight: '900', margin: '8px 0'}}>₦0.00</h2>
          <button style={{background: 'white', color: '#6366f1', padding: '10px 20px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '14px'}}>Fund Wallet</button>
        </div>

        {/* Services Grid */}
        <h3 style={{fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '16px'}}>Services</h3>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
          {services.map((service) => (
            <div key={service.name} style={{background: 'white', padding: '20px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer'}} onClick={()=>alert(service.name + ' coming soon!')}>
              <div style={{fontSize: '32px', marginBottom: '8px'}}>{service.icon}</div>
              <p style={{fontWeight: '700', color: '#1e293b', fontSize: '15px'}}>{service.name}</p>
            </div>
          ))}
        </div>

        <p style={{textAlign: 'center', color: '#94a3b8', fontSize: '12px', marginTop: '24px'}}>Building for Nigeria's Digital Future</p>
      </div>
    </main>
  )
                     }
