import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
            // Sign-out successful.
        }).catch((error) => {
            navigate('/error')
        });
    };
    return (
        <div className='absolute w-screen  bg-gradient-to-b from-black z-10 flex justify-between '>
            <div>
                <img
                    className='w-40'
                    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                    alt='Logo'
                >
                </img >
            </div>
            {user && (<div className='flex p-2'>
                <img alt='user'
                    src={user.photoURL}
                    className='w-16'
                >
                </img>
                <button className='text-white text-lg font-bold'
                    onClick={handleSignOut}
                >Sign Out</button>
            </div>)}
        </div >

    )
}

export default Header
