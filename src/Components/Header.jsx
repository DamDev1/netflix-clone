import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { auth} from '../firebase'



export default function Header() {
  const { user, logout} = UserAuth()
  console.log(user)
  const handleLogout = (e) =>{
    try {
      logout(auth)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex justify-between p-4 z-[100] absolute w-full top-0'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div className="signUp-signIn">
          <Link to='/Account'>
            <button className='text-white pr-4 cursor-pointer'>Account</button>
          </Link>
          <Link to='/'><button onClick={handleLogout} className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer '>Logout </button></Link>
        </div>
      ) : (
        <div className="signUp-signIn">
          <Link to='/Login'>
            <button className='text-white pr-4 cursor-pointer'>Sign In</button>
          </Link>
          <Link to='/SignUp'><button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer '>Sign Up</button></Link>
        </div>
      )}
    </div>
  )
}
