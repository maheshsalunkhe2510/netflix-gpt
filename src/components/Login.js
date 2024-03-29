import React, { useRef, useState } from 'react';
import Header from './Header';
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constant';


const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const email = useRef();
    const password = useRef();
    const fullName = useRef();
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };
    const handleLoginClick = () => {
        const message = validate(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const defaultPhotoURL= USER_AVATAR;
                    updateProfile(auth.currentUser, {
                        displayName: fullName.current.value, photoURL:defaultPhotoURL
                    }).then(() => {
                        const { uid, displayName, email, photoURL } = auth.currentUser;
                        dispatch(addUser({ id: uid, displayName: displayName, email: email, photoURL: photoURL }));
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                    // ..
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }

    };

    return (
        <div>
            <Header></Header>
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt=''
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input
                    ref={fullName}
                    type='text'
                    placeholder='Full Name'
                    className='p-2 my-4 w-full bg-gray-700' />}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email Address'
                    className='p-2 my-4 w-full bg-gray-700' />
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='p-2 my-4 w-full bg-gray-700' />
                <p className='text-red-500 text-lg font-bold'>{errorMessage}</p>
                <button
                    className='p-4 my-6 bg-red-700 w-full rounded-lg'
                    onClick={handleLoginClick}
                >
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className='px-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already register Sign in Now.."}</p>
            </form>
        </div>
    )
}

export default Login
