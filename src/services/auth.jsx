// Save token with expiry (5 minutes)
export function setToken(token) {
  const expiry = Date.now() + 5 * 60 * 1000 // 5 minutes from now
  localStorage.setItem('auth', JSON.stringify({ token, expiry }))
}

// Get token if still valid
export function getToken() {
  const data = JSON.parse(localStorage.getItem('auth'))
  if (!data) return null

  // Check expiry
  if (Date.now() > data.expiry) {
    clearToken()
    return null
  }

  return data.token
}

// Clear token
export function clearToken() {
  localStorage.removeItem('auth')
}

// Check if user is authenticated
export function isAuthenticated() {
  return !!getToken()
}