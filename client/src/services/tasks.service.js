import { BASE_URL } from '../constants/constants'

export const getTasks = async ({ token }) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  return response
}
