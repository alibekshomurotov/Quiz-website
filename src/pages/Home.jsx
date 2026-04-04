import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { sections, TIME_PER_QUESTION } from '../data/questions'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '800',
          color: 'white',
          marginBottom: '20px',
          textShadow: '0 4px 30px rgba(0,0,0,0.3)'
        }}>
          🎯 Frontend Test Platformasi
        </h1>
        <p style={{ 
          fontSize: '20px', 
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Bilimingizni sinab ko'ring va o'z o'rningizni aniqlang
        </p>
      </div>

      {!user ? (
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: 'white', marginBottom: '20px' }}>
            Test ishlash uchun tizimga kiring
          </p>
          <Link to="/login">
            <button className="btn btn-secondary" style={{ marginRight: '15px' }}>
              Kirish
            </button>
          </Link>
          <Link to="/register">
            <button className="btn btn-primary">
              Ro'yxatdan o'tish
            </button>
          </Link>
        </div>
      ) : (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            color: 'white', 
            textAlign: 'center', 
            marginBottom: '30px',
            fontSize: '24px'
          }}>
            Bo'limni tanlang:
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {sections.map(section => (
              <Link 
                key={section.id}
                to={`/quiz/${section.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{
                  padding: '30px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.borderColor = '#667eea'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
                >
                  <div style={{ fontSize: '60px', marginBottom: '15px' }}>
                    {section.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '22px', 
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    {section.title}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    fontSize: '14px',
                    marginBottom: '15px'
                  }}>
                    {section.description}
                  </p>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {section.questions.length} ta savol
                  </div>
                  <div style={{
                    background: '#f0f0f0',
                    color: '#666',
                    padding: '5px 15px',
                    borderRadius: '15px',
                    display: 'inline-block',
                    fontSize: '13px'
                  }}>
                    ⏱️ {Math.round(section.questions.length * TIME_PER_QUESTION / 60)} daqiqa
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        gap: '60px',
        marginTop: '60px',
        color: 'white',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '36px', fontWeight: '700' }}>{sections.length}</div>
          <div style={{ opacity: 0.8 }}>Bo'limlar</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '36px', fontWeight: '700' }}>
            {sections.reduce((acc, s) => acc + s.questions.length, 0)}
          </div>
          <div style={{ opacity: 0.8 }}>Jami savollar</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '36px', fontWeight: '700' }}>
            {Math.round(sections.reduce((acc, s) => acc + s.questions.length, 0) * TIME_PER_QUESTION / 60)}
          </div>
          <div style={{ opacity: 0.8 }}>Jami vaqt (daqiqa)</div>
        </div>
      </div>
    </div>
  )
}