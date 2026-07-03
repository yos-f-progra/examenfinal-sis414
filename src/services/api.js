const BASE_URL = import.meta.env.VITE_API_URL || '/api'

function getToken() {
  return localStorage.getItem('token')
}

async function request(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  const token = getToken()
  if (token) headers['Authorization'] = 'Bearer ' + token

  const res = await fetch(BASE_URL + path, { ...options, headers })

  if (!res.ok) {
    let msg = 'Error en la solicitud'
    try {
      const data = await res.json()
      msg = data.mensaje || data.message || msg
    } catch (e) {}
    throw new Error(msg)
  }

  const texto = await res.text()
  return texto ? JSON.parse(texto) : null
}

export const api = {
  get: (path) => request(path, { method: 'GET' }),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  del: (path) => request(path, { method: 'DELETE' }),
}
