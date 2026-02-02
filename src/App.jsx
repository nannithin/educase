
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Welcome from './pages/welcome'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Protected Route */}
        {/* <Route
          path="/dashboard"
          element={
            isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
