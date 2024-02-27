import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header></Header>
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt=''
                />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input
                    type='text'
                    placeholder='Full Name'
                    className='p-2 my-4 w-full bg-gray-700' />}
                <input
                    type='text'
                    placeholder='Email Address'
                    className='p-2 my-4 w-full bg-gray-700' />
                <input
                    type='text'
                    placeholder='Password'
                    className='p-2 my-4 w-full bg-gray-700' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='px-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already register Sign in Now.."}</p>
            </form>
        </div>
    )
}

export default Login
