import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App