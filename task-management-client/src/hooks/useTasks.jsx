import { useEffect, useState } from 'react'
import { getTasks } from '../services/tasks.service'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

export default function useTasks () {
  const navigate = useNavigate()
  const cookies = new Cookies()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const user = cookies.get('user')
  useEffect(() => {
    const fetch = async ({ token }) => {
      setIsLoading(true)
      try {
        const response = await getTasks({ token })
        if (response.ok) {
          const tasks = await response.json()
          setData(tasks)
        } else {
          const error = await response.json()
          setError(error.message)
        }
      } catch (error) {
        setError(`${error.message}. Please try again later.`)
      }
      setIsLoading(false)
    }
    if (user) {
      const token = user.accessToken
      fetch({ token })
    } else {
      return navigate('/login')
    }
  }, [])

  return { data, isLoading, error }
}
