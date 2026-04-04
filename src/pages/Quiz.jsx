import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { sections, getQuestionsBySection } from '../data/questions'
import { useAuth } from '../context/AuthContext'

const TIME_PER_QUESTION = 30 // Har bir savol uchun 30 soniya

export default function Quiz() {
  const { sectionId } = useParams()
  const navigate = useNavigate()
  const { saveResult, user } = useAuth()
  
  const [selectedSection, setSelectedSection] = useState(null)
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  
  // Vaqt state'lari
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [isTimerActive, setIsTimerActive] = useState(false)

  useEffect(() => {
    if (sectionId) {
      const section = sections.find(s => s.id === sectionId)
      if (section) {
        setSelectedSection(section)
        setQuestions(section.questions)
        setTimeLeft(TIME_PER_QUESTION)
        setIsTimerActive(true)
      } else {
        navigate('/')
      }
    }
  }, [sectionId, navigate])

  // Timer logic
  useEffect(() => {
    let interval = null
    
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isTimerActive) {
      // Vaqt tugadi - avtomatik keyingi savolga o'tish
      handleTimeUp()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isTimerActive, timeLeft])

  // Vaqt tugaganda
  const handleTimeUp = useCallback(() => {
    const question = questions[current]
    
    // Agar javob berilmagan bo'lsa, -1 (vaqt tugadi) deb belgilaymiz
    if (answers[question?.id] === undefined) {
      setAnswers(prev => ({ ...prev, [question.id]: -1 }))
    }
    
    // Keyingi savolga o'tish yoki testni tugatish
    if (current < questions.length - 1) {
      setCurrent(prev => prev + 1)
      setTimeLeft(TIME_PER_QUESTION)
    } else {
      // Test tugadi
      finishTest()
    }
  }, [current, questions, answers])

  // Testni tugatish
  const finishTest = useCallback(() => {
    setIsTimerActive(false)
    let correctCount = 0
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correctCount++
    })
    setScore(correctCount)
    setShowResults(true)
  }, [questions, answers])

  const handleAnswer = (optionIndex) => {
    const question = questions[current]
    setAnswers({ ...answers, [question.id]: optionIndex })
    
    // Javob berilganda 1 soniya kutib keyingi savolga o'tish
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(prev => prev + 1)
        setTimeLeft(TIME_PER_QUESTION)
      } else {
        finishTest()
      }
    }, 500)
  }

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setTimeLeft(TIME_PER_QUESTION)
    } else {
      finishTest()
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1)
      setTimeLeft(TIME_PER_QUESTION)
    }
  }

  const handleSaveResult = () => {
    saveResult(score, questions.length, selectedSection?.title)
    navigate('/results')
  }

  const handleRetry = () => {
    setCurrent(0)
    setAnswers({})
    setShowResults(false)
    setScore(0)
    setTimeLeft(TIME_PER_QUESTION)
    setIsTimerActive(true)
  }

  // Bo'lim tanlash ekrani (o'zgarishsiz)
  if (!sectionId || !selectedSection) {
    return (
      <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Bo'lim tanlang</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Iltimos, test ishlash uchun bo'limni tanlang
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {sections.map(section => (
              <Link 
                key={section.id}
                to={`/quiz/${section.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '25px',
                  background: '#f8f9ff',
                  borderRadius: '15px',
                  border: '2px solid #e0e0e0',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#667eea'
                  e.currentTarget.style.background = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0'
                  e.currentTarget.style.background = '#f8f9ff'
                }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>
                    {section.icon}
                  </div>
                  <h3 style={{ color: '#333', marginBottom: '5px' }}>
                    {section.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>
                    {section.questions.length} ta savol • {section.questions.length * TIME_PER_QUESTION / 60} daqiqa
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/" style={{ display: 'inline-block', marginTop: '30px' }}>
            <button className="btn btn-secondary">← Bosh sahifaga</button>
          </Link>
        </div>
      </div>
    )
  }

  const question = questions[current]
  const progress = ((current + 1) / questions.length) * 100

  // Timer rangi
  const getTimerColor = () => {
    if (timeLeft > 20) return '#4CAF50'
    if (timeLeft > 10) return '#ff9800'
    return '#f44336'
  }

  // Test natijalari ekrani (o'zgarishsiz)
  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    let message = ''
    let emoji = ''
    
    if (percentage >= 80) {
      message = 'A\'lo! 🌟'
      emoji = '🏆'
    } else if (percentage >= 60) {
      message = 'Yaxshi! 👍'
      emoji = '🥈'
    } else if (percentage >= 40) {
      message = 'Qoniqarli'
      emoji = '📚'
    } else {
      message = 'Yana harakat qiling'
      emoji = '💪'
    }

    return (
      <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>{emoji}</div>
          <h2 style={{ marginBottom: '10px' }}>Test tugadi!</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>{selectedSection.title}</p>
          
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ fontSize: '48px', fontWeight: '800', marginBottom: '10px' }}>
              {score} / {questions.length}
            </div>
            <div style={{ fontSize: '24px', opacity: 0.9 }}>{percentage}%</div>
            <div style={{ fontSize: '20px', marginTop: '10px' }}>{message}</div>
          </div>

          {/* Savollar tahlili */}
          <div style={{ textAlign: 'left', marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '20px' }}>Savollar tahlili:</h3>
            {questions.map((q, idx) => {
              const userAnswer = answers[q.id]
              const isCorrect = userAnswer === q.correct
              const isTimeOut = userAnswer === -1
              
              return (
                <div key={q.id} style={{
                  padding: '15px',
                  marginBottom: '10px',
                  borderRadius: '10px',
                  background: isCorrect ? '#d4edda' : isTimeOut ? '#fff3cd' : '#f8d7da',
                  border: `2px solid ${isCorrect ? '#28a745' : isTimeOut ? '#ff9800' : '#dc3545'}`
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '5px' }}>
                    {idx + 1}. {q.question}
                  </div>
                  <div style={{ fontSize: '14px' }}>
                    {isTimeOut ? (
                      <span style={{ color: '#856404' }}>⏰ Vaqt tugadi</span>
                    ) : (
                      <span style={{ color: isCorrect ? '#155724' : '#721c24' }}>
                        Sizning javobingiz: {q.options[userAnswer]}
                      </span>
                    )}
                    {!isCorrect && (
                      <span style={{ display: 'block', marginTop: '5px', fontWeight: '600', color: '#155724' }}>
                        To'g'ri javob: {q.options[q.correct]}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleSaveResult} className="btn btn-primary">
              Natijani saqlash
            </button>
            <button onClick={handleRetry} className="btn btn-secondary">
              Qayta ishlash
            </button>
            <Link to="/">
              <button className="btn btn-secondary">Bosh sahifa</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Asosiy test ekrani
  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px',
          paddingBottom: '20px',
          borderBottom: '2px solid #eee'
        }}>
          <div>
            <h2 style={{ marginBottom: '5px' }}>{selectedSection.icon} {selectedSection.title}</h2>
            <p style={{ color: '#666', fontSize: '14px' }}>Savol {current + 1} / {questions.length}</p>
          </div>
          <Link to="/">
            <button className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '14px' }}>
              Chiqish
            </button>
          </Link>
        </div>

        {/* Timer va Progress */}
        <div style={{ marginBottom: '30px' }}>
          {/* Timer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            gap: '15px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: `4px solid ${getTimerColor()}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: timeLeft <= 5 ? 'rgba(244, 67, 54, 0.1)' : 'white',
              transition: 'all 0.3s'
            }}>
              <span style={{
                fontSize: '28px',
                fontWeight: '800',
                color: getTimerColor()
              }}>
                {timeLeft}
              </span>
              <span style={{
                fontSize: '12px',
                color: '#666'
              }}>
                sekund
              </span>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '8px',
                fontSize: '14px',
                color: '#666'
              }}>
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="progress-bar" style={{ height: '8px' }}>
                <div className="progress-fill" style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Vaqt tugashi xabari */}
          {timeLeft <= 5 && (
            <div style={{
              background: '#ffebee',
              color: '#c62828',
              padding: '10px',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '600',
              animation: 'pulse 1s infinite'
            }}>
              ⏰ Tezroq javob bering!
            </div>
          )}
        </div>

        {/* Question */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ 
            fontSize: '22px', 
            marginBottom: '25px',
            color: '#333',
            lineHeight: '1.5'
          }}>
            {question.question}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {question.options.map((opt, idx) => (
              <div 
                key={idx}
                onClick={() => handleAnswer(idx)}
                style={{
                  padding: '20px',
                  borderRadius: '15px',
                  border: `3px solid ${answers[question.id] === idx ? '#667eea' : '#e0e0e0'}`,
                  background: answers[question.id] === idx ? 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
                onMouseEnter={(e) => {
                  if (answers[question.id] !== idx) {
                    e.currentTarget.style.borderColor = '#b0b0b0'
                    e.currentTarget.style.background = '#f8f9ff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (answers[question.id] !== idx) {
                    e.currentTarget.style.borderColor = '#e0e0e0'
                    e.currentTarget.style.background = 'white'
                  }
                }}
              >
                <span style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: answers[question.id] === idx ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e0e0e0',
                  color: answers[question.id] === idx ? 'white' : '#666',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '16px',
                  flexShrink: 0
                }}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span style={{ fontSize: '16px', color: '#333' }}>{opt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            onClick={handlePrev}
            disabled={current === 0}
            className="btn btn-secondary"
            style={{ opacity: current === 0 ? 0.5 : 1 }}
          >
            ← Oldingi
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {questions.map((_, idx) => (
              <div key={idx} style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: idx === current ? '#667eea' : 
                           answers[questions[idx].id] !== undefined ? '#4CAF50' : 
                           answers[questions[idx].id] === -1 ? '#ff9800' : '#e0e0e0',
                border: idx === current ? '2px solid #333' : 'none'
              }} />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="btn btn-primary"
          >
            {current === questions.length - 1 ? 'Tugatish ✅' : 'Keyingi →'}
          </button>
        </div>
      </div>
      
      {/* CSS animation uchun */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}