import { createContext, useContext, useState, useEffect } from 'react'
import { sections } from '../data/questions'

export { sections }

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users')
    const defaultUsers = [{ 
      id: 1, 
      username: 'admin', 
      password: 'admin', 
      isAdmin: true 
    }]
    
    try {
      if (saved) {
        const parsed = JSON.parse(saved)
        if (!parsed.find(u => u.username === 'admin')) {
          return [...defaultUsers, ...parsed]
        }
        return parsed
      }
    } catch (e) {
      console.error('Users parse error:', e)
    }
    return defaultUsers
  })

  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem('results')
    try {
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      console.error('Results parse error:', e)
      return []
    }
  })

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('currentUser')
    try {
      return saved ? JSON.parse(saved) : null
    } catch (e) {
      console.error('Current user parse error:', e)
      localStorage.removeItem('currentUser') // Xato qiymatni o'chirish
      return null
    }
  })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results))
  }, [results])

  useEffect(() => {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('currentUser')
    }
  }, [user])

  const register = (username, password) => {
    if (users.find(u => u.username === username)) {
      return { success: false, message: 'Bu username band!' }
    }
    const newUser = {
      id: Date.now(),
      username,
      password,
      isAdmin: false
    }
    setUsers([...users, newUser])
    return { success: true }
  }

  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password)
    if (found) {
      setUser(found)
      return { success: true }
    }
    return { success: false, message: 'Login yoki parol xato!' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
  }

  const saveResult = (score, total, section = 'Umumiy') => {
    if (!user) return
    const newResult = {
      id: Date.now(),
      userId: user.id,
      username: user.username,
      score,
      total,
      section,
      date: new Date().toLocaleString()
    }
    setResults(prev => [...prev, newResult])
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      users, 
      results, 
      sections,
      login, 
      logout, 
      register, 
      saveResult 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
