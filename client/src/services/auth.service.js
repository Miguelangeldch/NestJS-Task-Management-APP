import { BASE_URL } from '../constants/constants'

export const signIn = async ({ body }) => {
  const response = await fetch(
        `${BASE_URL}/auth/signin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })

  return response
}

export const signUp = async ({ body }) => {
  const response = await fetch(
        `${BASE_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })

  return response
}
