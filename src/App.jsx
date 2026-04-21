import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import Admin from './pages/Admin'

// Himoyalangan route komponenti
function ProtectedQuiz() {
  const userData = localStorage.getItem('currentUser')
  const user = userData ? JSON.parse(userData) : null
  return user ? <Quiz /> : <Navigate to="/login" replace />
}

function ProtectedResults() {
  const userData = localStorage.getItem('currentUser')
  const user = userData ? JSON.parse(userData) : null
  return user ? <Results /> : <Navigate to="/login" replace />
}

function ProtectedAdmin() {
  const userData = localStorage.getItem('currentUser')
  const user = userData ? JSON.parse(userData) : null
  if (!user) return <Navigate to="/login" replace />
  if (!user.isAdmin) return <Navigate to="/" replace />
  return <Admin />
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<ProtectedQuiz />} />
          <Route path="/quiz/:sectionId" element={<ProtectedQuiz />} />
          <Route path="/results" element={<ProtectedResults />} />
          <Route path="/admin" element={<ProtectedAdmin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
