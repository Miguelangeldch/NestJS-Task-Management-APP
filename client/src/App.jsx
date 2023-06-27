import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Tasks from './pages/Tasks'
import { FiltersProvider } from './context/FiltersContext'
import ProtectedRoute from './components/ProtectedRoute'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route
        path='/tasks' element={
          <ProtectedRoute>
            <FiltersProvider>
              <Tasks />
            </FiltersProvider>
          </ProtectedRoute>
      }
      />
    </Routes>

  )
}

export default App
