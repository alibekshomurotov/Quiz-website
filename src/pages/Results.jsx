import { useAuth, sections } from '../context/AuthContext'
import { useMemo } from 'react'

export default function Results() {
  const { results, user } = useAuth()

  // Eng yuqori balli foydalanuvchilar reytingi
  const userRankings = useMemo(() => {
    const userBestScores = {}
    
    results.forEach(r => {
      const percent = (r.score / r.total) * 100
      if (!userBestScores[r.userId] || userBestScores[r.userId].percent < percent) {
        userBestScores[r.userId] = {
          userId: r.userId,
          username: r.username,
          percent: percent,
          score: r.score,
          total: r.total
        }
      }
    })
    
    return Object.values(userBestScores).sort((a, b) => b.percent - a.percent)
  }, [results])

  // Bo'limlar bo'yicha statistika
  const sectionStats = useMemo(() => {
    const stats = {}
    results.forEach(r => {
      if (!stats[r.section]) {
        stats[r.section] = { count: 0, totalScore: 0, totalQuestions: 0 }
      }
      stats[r.section].count++
      stats[r.section].totalScore += r.score
      stats[r.section].totalQuestions += r.total
    })
    return stats
  }, [results])

  const myResults = results.filter(r => r.userId === user?.id)
  const myBestResult = userRankings.find(r => r.userId === user?.id)
  const myRank = myBestResult ? userRankings.findIndex(r => r.userId === user?.id) + 1 : '-'

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
      {/* My Stats */}
      <div className="stats-grid" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '14px', color: '#666', textTransform: 'uppercase' }}>
            Mening o'rinim
          </div>
          <div className="stat-number" style={{
            background: myRank === 1 ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' :
                        myRank === 2 ? 'linear-gradient(135deg, #c0c0c0 0%, #e0e0e0 100%)' :
                        myRank === 3 ? 'linear-gradient(135deg, #cd7f32 0%, #daa520 100%)' :
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text'
          }}>
            #{myRank}
          </div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '14px', color: '#666', textTransform: 'uppercase' }}>
            Testlar soni
          </div>
          <div className="stat-number">{myResults.length}</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '14px', color: '#666', textTransform: 'uppercase' }}>
            Eng yaxshi ball
          </div>
          <div className="stat-number">
            {myBestResult ? Math.round(myBestResult.percent) : 0}%
          </div>
        </div>
      </div>

      {/* My Results by Section */}
      <div className="card" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
        <h2 style={{ marginBottom: '25px', color: '#333' }}>📊 Mening natijalarim</h2>
        {myResults.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
            Hali test ishlaganmaysiz
          </p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Bo'lim</th>
                  <th>Ball</th>
                  <th>Foiz</th>
                  <th>Sana</th>
                </tr>
              </thead>
              <tbody>
                {myResults.slice().reverse().map(r => {
                  const percent = Math.round((r.score / r.total) * 100)
                  return (
                    <tr key={r.id}>
                      <td style={{ fontWeight: '600', color: '#667eea' }}>
                        {r.section || 'Umumiy'}
                      </td>
                      <td>{r.score} / {r.total}</td>
                      <td>
                        <span style={{
                          padding: '5px 15px',
                          borderRadius: '20px',
                          fontWeight: '600',
                          background: percent >= 80 ? '#d4edda' : 
                                      percent >= 60 ? '#d1ecf1' :
                                      percent >= 40 ? '#fff3cd' : '#f8d7da',
                          color: percent >= 80 ? '#155724' : 
                                 percent >= 60 ? '#0c5460' :
                                 percent >= 40 ? '#856404' : '#721c24'
                        }}>
                          {percent}%
                        </span>
                      </td>
                      <td>{r.date}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Rankings */}
      <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '25px', color: '#333', textAlign: 'center' }}>
          🏆 Umumiy Reyting
        </h2>
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
              {userRankings.map((r, index) => {
                const rank = index + 1
                const isMe = r.userId === user?.id
                return (
                  <tr key={r.userId} style={{
                    background: isMe ? 'rgba(102,126,234,0.1)' : 'white',
                    fontWeight: isMe ? '700' : '400'
                  }}>
                    <td>
                      <span style={{
                        display: 'inline-flex',
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        background: rank <= 3 ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' : '#e0e0e0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700'
                      }}>
                        {rank}
                      </span>
                    </td>
                    <td style={{ color: isMe ? '#667eea' : '#333' }}>
                      {r.username} {isMe && '(Siz)'}
                    </td>
                    <td>{Math.round(r.percent)}%</td>
                    <td style={{ fontSize: '24px' }}>
                      {rank === 1 && '🥇'}
                      {rank === 2 && '🥈'}
                      {rank === 3 && '🥉'}
                      {rank > 3 && '⭐'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}