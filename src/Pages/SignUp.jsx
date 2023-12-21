import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { user, signUp } = UserAuth()

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='w-full h-screen'>
                <img className=" sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/8ab8459d-e63e-43e3-b217-00afb27a4d58/NG-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />

                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className='text-3xl font-bold'>Sign Up</h1>

                            <form className='w-full flex flex-col py-4'>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' autoComplete='email' required />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='password' autoComplete='password' required/>
                                <button 
                                onClick={handelSubmit}
                                className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>

                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p>
                                        <input type="checkbox" className='mr-2' />
                                        Remember Me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-gray-600'>
                                        Already subscribed to Netflix?
                                    </span>{' '}
                                    <Link to='/Login'>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp