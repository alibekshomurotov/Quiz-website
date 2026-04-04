import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav style={{
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      padding: '15px 0',
      boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '28px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none'
        }}>
          🎯 QuizPro
        </Link>

        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {user ? (
            <>
              <Link to="/quiz" style={{
                color: isActive('/quiz') ? '#667eea' : '#333',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '20px',
                background: isActive('/quiz') ? 'rgba(102,126,234,0.1)' : 'transparent',
                transition: 'all 0.3s'
              }}>
                Test
              </Link>
              <Link to="/results" style={{
                color: isActive('/results') ? '#667eea' : '#333',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '20px',
                background: isActive('/results') ? 'rgba(102,126,234,0.1)' : 'transparent'
              }}>
                Natijalar
              </Link>
              {user.isAdmin && (
                <Link to="/admin" style={{
                  color: '#f5576c',
                  textDecoration: 'none',
                  fontWeight: '700',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: 'rgba(245,87,108,0.1)',
                  border: '2px solid #f5576c'
                }}>
                  🔧 Admin
                </Link>
              )}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '5px 15px',
                background: 'rgba(102,126,234,0.1)',
                borderRadius: '30px'
              }}>
                <span style={{ fontWeight: '600', color: '#667eea' }}>
                  {user.username}
                </span>
                <button 
                  onClick={handleLogout}
                  className="btn btn-danger"
                  style={{ padding: '8px 20px', fontSize: '14px' }}
                >
                  Chiqish
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-secondary" style={{ padding: '10px 25px' }}>
                  Kirish
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary" style={{ padding: '10px 25px' }}>
                  Ro'yxatdan o'tish
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}