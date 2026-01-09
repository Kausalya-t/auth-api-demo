import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../services/auth'
import sentraLogo from '../assets/sentra.png'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    if (!username && !password) {
      setError('Please enter both username and password')
      return
    }
    if (!username) {
      setError('Username is required')
      return
    }
    if (!password) {
      setError('Password is required')
      return
    }

    // Clear error if all fields are valid
    setError('')
    setToken('dummy-token')
    navigate('/dashboard')
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={sentraLogo} alt="Sentra.world logo" />
        <h2>Welcome</h2>
        <p>Sign in to access Dashboard</p>

        {/* Show error message */}
        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <div className="demo-text">
          <strong>Demo Username:</strong>
          <br />
          sentraWorld
          <br />
          <em>(Password can be anything)</em>
        </div>
      </div>
    </div>
  )
}