import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

export default function useValidate ({ path }) {
  const navigate = useNavigate()
  const cookies = new Cookies()

  useEffect(() => {
    const user = cookies.get('user')
    if (!user) {
      return navigate(`/${path}`)
    } else {
      return navigate('/tasks')
    }
  }, [])
}
