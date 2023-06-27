import { useContext, useState, useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { signIn } from '../services/auth.service'

export default function useAuth () {
  const { login, logout } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const cookies = new Cookies()

  const authenticateUser = useCallback(async (body) => {
    setIsLoading(true)
    try {
      const response = await signIn({ body })
      if (response.ok) {
        const user = await response.json()
        cookies.set('user', user)
        login()
        navigate('/tasks')
      } else {
        const error = await response.json()
        setError(error.message)
      }
    } catch (error) {
      setError(['An error ocurred. Please try again later.'])
    }
    setIsLoading(false)
  }, [login])

  const logoutUser = useCallback(() => {
    cookies.remove('user')
    logout()
    navigate('/')
  }, [logout])

  return { authenticateUser, logoutUser, error, isLoading }
}
