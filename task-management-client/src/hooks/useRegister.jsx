import { useState } from 'react'
import { signUp } from '../services/auth.service'
import { useNavigate } from 'react-router-dom'

export default function useRegister () {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const registerUser = async (body) => {
    setIsLoading(true)
    try {
      const response = await signUp({ body })
      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          navigate('/login')
          setIsLoading(false)
        }, 3000)
      } else {
        const error = await response.json()
        setError(error.message)
        setIsLoading(false)
      }
    } catch (error) {
      setError(['An error ocurred. Please try again later.'])
      setIsLoading(false)
    }
  }

  return { registerUser, error, isLoading, success }
}
