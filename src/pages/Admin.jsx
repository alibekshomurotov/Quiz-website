import { useState, useMemo } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Admin() {
  const { users, results, sections } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')

  // Statistikalar
  const totalUsers = users.length
  const totalResults = results.length
  
  // Bo'limlar bo'yicha statistika
  const sectionStats = useMemo(() => {
    const stats = {}
    sections.forEach(s => {
      stats[s.id] = { title: s.title, count: 0, avgScore: 0 }
    })
    
    results.forEach(r => {
      const sectionId = sections.find(s => s.title === r.section)?.id || 'unknown'
      if (!stats[sectionId]) {
        stats[sectionId] = { title: r.section || 'Noma\'lum', count: 0, totalScore: 0 }
      }
      stats[sectionId].count++
      stats[sectionId].totalScore = (stats[sectionId].totalScore || 0) + (r.score / r.total)
    })

    // O'rtacha hisoblash
    Object.keys(stats).forEach(key => {
      if (stats[key].count > 0) {
        stats[key].avgScore = Math.round((stats[key].totalScore / stats[key].count) * 100)
      }
    })
    
    return stats
  }, [results, sections])

  // Eng yaxshi natijalar
  const userRankings = useMemo(() => {
    const userBestScores = {}
    results.forEach(r => {
      const percent = (r.score / r.total) * 100
      if (!userBestScores[r.userId] || userBestScores[r.userId].percent < percent) {
        userBestScores[r.userId] = {
          userId: r.userId,
          username: r.username,
          percent: percent
        }
      }
    })
    return Object.values(userBestScores).sort((a, b) => b.percent - a.percent)
  }, [results])

  const averageScore = userRankings.length > 0
    ? Math.round(userRankings.reduce((acc, r) => acc + r.percent, 0) / userRankings.length)
    : 0

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '30px', color: 'white', textAlign: 'center' }}>
        🔧 Admin Panel
      </h1>

      {/* Stats */}
      <div className="stats-grid" style={{ maxWidth: '900px', margin: '0 auto 30px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Jami foydalanuvchilar</div>
          <div className="stat-number">{totalUsers}</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📝</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Jami test natijalari</div>
          <div className="stat-number">{totalResults}</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📚</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Bo'limlar soni</div>
          <div className="stat-number">{sections.length}</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📊</div>
          <div style={{ fontSize: '14px', color: '#666' }}>O'rtacha ball</div>
          <div className="stat-number">{averageScore}%</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          marginBottom: '30px',
          borderBottom: '2px solid #eee',
          paddingBottom: '15px',
          flexWrap: 'wrap'
        }}>
          {['dashboard', 'sections', 'users', 'ranking'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="btn"
              style={{
                padding: '10px 20px',
                background: activeTab === tab ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                color: activeTab === tab ? 'white' : '#666',
                fontSize: '14px'
              }}
            >
              {tab === 'dashboard' && '📊 Dashboard'}
              {tab === 'sections' && '📚 Bo\'limlar'}
              {tab === 'users' && '👥 Foydalanuvchilar'}
              {tab === 'ranking' && '🏆 Reyting'}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <h3 style={{ marginBottom: '20px' }}>So'nggi faoliyat</h3>
            {results.length === 0 ? (
              <p style={{ color: '#666', textAlign: 'center', padding: '40px' }}>Hali natijalar yo'q</p>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Foydalanuvchi</th>
                      <th>Bo'lim</th>
                      <th>Ball</th>
                      <th>Sana</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.slice(-10).reverse().map(r => (
                      <tr key={r.id}>
                        <td style={{ color: '#667eea', fontWeight: '600' }}>{r.username}</td>
                        <td>{r.section || 'Umumiy'}</td>
                        <td>{r.score} / {r.total}</td>
                        <td>{r.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Sections Tab */}
        {activeTab === 'sections' && (
          <div>
            <h3 style={{ marginBottom: '20px' }}>Bo'limlar statistikasi</h3>
            <div style={{ display: 'grid', gap: '20px' }}>
              {sections.map(section => {
                const stat = sectionStats[section.id] || { count: 0, avgScore: 0 }
                return (
                  <div key={section.id} style={{
                    padding: '20px',
                    background: '#f8f9ff',
                    borderRadius: '15px',
                    border: '2px solid #e0e0e0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '30px', marginBottom: '5px' }}>{section.icon}</div>
                      <h4 style={{ margin: 0 }}>{section.title}</h4>
                      <p style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>
                        {section.questions.length} ta savol
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: '#667eea' }}>
                        {stat.count}
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>urinish</div>
                      {stat.count > 0 && (
                        <div style={{ 
                          fontSize: '18px', 
                          fontWeight: '600',
                          color: stat.avgScore >= 70 ? '#4CAF50' : stat.avgScore >= 40 ? '#ff9800' : '#f44336',
                          marginTop: '5px'
                        }}>
                          Ø {stat.avgScore}%
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div>
            <h3 style={{ marginBottom: '20px' }}>Foydalanuvchilar</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Rol</th>
                    <th>Testlar soni</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => {
                    const userTests = results.filter(r => r.userId === u.id).length
                    return (
                      <tr key={u.id}>
                        <td>#{u.id}</td>
                        <td style={{ fontWeight: '600' }}>{u.username}</td>
                        <td>
                          {u.isAdmin ? (
                            <span style={{
                              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                              color: 'white',
                              padding: '5px 15px',
                              borderRadius: '20px',
                              fontSize: '12px'
                            }}>👑 Admin</span>
                          ) : (
                            <span style={{
                              background: '#e0e0e0',
                              color: '#666',
                              padding: '5px 15px',
                              borderRadius: '20px',
                              fontSize: '12px'
                            }}>👤 User</span>
                          )}
                        </td>
                        <td>{userTests}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Ranking Tab */}
        {activeTab === 'ranking' && (
          <div>
            <h3 style={{ marginBottom: '20px' }}>Eng yaxshi natijalar</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>O'rin</th>
                    <th>Foydalanuvchi</th>
                    <th>Eng yaxshi ball</th>
                    <th>Medal</th>
                  </tr>
                </thead>
                <tbody>
                  {userRankings.map((r, index) => (
                    <tr key={r.userId}>
                      <td>
                        <span style={{
                          display: 'inline-flex',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: index < 3 ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' : '#e0e0e0',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700'
                        }}>
                          {index + 1}
                        </span>
                      </td>
                      <td style={{ fontWeight: '600', color: '#667eea' }}>{r.username}</td>
                      <td>{Math.round(r.percent)}%</td>
                      <td style={{ fontSize: '24px' }}>
                        {index === 0 && '🥇'}
                        {index === 1 && '🥈'}
                        {index === 2 && '🥉'}
                        {index > 2 && '⭐'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}