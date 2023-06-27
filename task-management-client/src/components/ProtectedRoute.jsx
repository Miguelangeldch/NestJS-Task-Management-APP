import useValidate from '../hooks/useValidate'
import Navbar from './Navbar'

export default function ProtectedRoute ({ children }) {
  useValidate({ path: 'login' })
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
