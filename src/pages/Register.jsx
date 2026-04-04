import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (password !== confirmPassword) {
      setError('Parollar mos kelmadi!')
      return
    }
    
    if (password.length < 4) {
      setError('Parol kamida 4 ta belgidan iborat bo\'lishi kerak!')
      return
    }

    const result = register(username, password)
    if (result.success) {
      alert('✅ Ro\'yxatdan o\'tdingiz! Endi kiring.')
      navigate('/login')
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 20px' }}>
      <div className="card" style={{ maxWidth: '450px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '10px' }}>
            Ro'yxatdan o'tish 🚀
          </h2>
          <p style={{ color: '#666' }}>Yangi hisob yarating</p>
        </div>

        {error && (
          <div style={{
            background: '#fee',
            color: '#c33',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555' }}>
              Foydalanuvchi nomi
            </label>
            <input
              type="text"
              className="input"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555' }}>
              Parol
            </label>
            <input
              type="password"
              className="input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555' }}>
              Parolni tasdiqlang
            </label>
            <input
              type="password"
              className="input"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>
            Ro'yxatdan o'tish
          </button>
        </form>

        <p style={{ marginTop: '25px', textAlign: 'center', color: '#666' }}>
          Hisobingiz bormi? <Link to="/login" style={{ color: '#667eea', fontWeight: '600' }}>Kiring</Link>
        </p>
      </div>
    </div>
  )
}