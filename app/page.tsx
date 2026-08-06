export default function LandingPage() {
  return (
    <main className="wrap">
      <div className="card">
        {/* Logo area */}
        <div className="logo">E</div>

        <h1>Welcome to EXLOWG</h1>
        <p className="tagline">Buy your cheap service here</p>
        
        {/* Buttons */}
        <div className="btns">
          <a href="/login" className="btn btn-fill">Login</a>
          <a href="/register" className="btn btn-border">Register</a>
        </div>

        {/* Social Proof */}
        <div className="proof">
          🔥 Join 10,000+ users trusting EXLOWG
        </div>

        {/* Sponsor */}
        <div className="sponsor">
          <p>Proudly supporting</p>
          <p className="ministry">Federal Ministry of Communications, Innovation and Digital Economy</p>
        </div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .wrap {
          min-height: 100vh;
          background: linear-gradient(180deg, #5B3DF1 0%, #7C5CFF 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .card {
          background: #fff;
          width: 100%;
          max-width: 400px;
          border-radius: 28px;
          padding: 40px 28px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          text-align: center;
        }
        .logo {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #5B3DF1, #7C5CFF);
          color: white;
          font-size: 32px;
          font-weight: 900;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        h1 {
          font-size: 28px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 8px;
        }
        .tagline {
          color: #64748b;
          font-size: 15px;
          margin-bottom: 32px;
        }
        .btns {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .btn {
          padding: 16px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-fill {
          background: #5B3DF1;
          color: white;
        }
        .btn-border {
          background: white;
          color: #5B3DF1;
          border: 2px solid #5B3DF1;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(91, 61, 241, 0.3);
        }
        .proof {
          color: #16a34a;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 24px;
        }
        .sponsor {
          border-top: 1px solid #f1f5f9;
          padding-top: 18px;
          font-size: 12px;
          color: #94a3b8;
        }
        .ministry {
          color: #475569;
          font-weight: 600;
          font-size: 11px;
          line-height: 1.4;
          margin-top: 4px;
        }
      `}</style>
    </main>
  )
          }
