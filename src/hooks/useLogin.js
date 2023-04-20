import { useUserContext } from './useUserContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useUserContext()
  const navigate = useNavigate()

  const login = async (identifier, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    })

    const user = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(JSON.parse(user.error))
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(user))
      dispatch({ type: 'LOGIN', payload: user })

      setIsLoading(false)

      navigate('/home')
    }
  }

  return { login, isLoading, error }
}
