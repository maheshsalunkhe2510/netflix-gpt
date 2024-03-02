import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, displayName, email, photoURL } = user;
                dispatch(addUser({ id: uid, displayName: displayName, email: email, photoURL: photoURL }));
                navigate('/browse');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => {
            unSubscribe();
        };
    }, [])
    const handleSignOut = () => {
        signOut(auth).then(() => {

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
                    src={LOGO}
                    alt='Logo'
                >
                </img >
            </div>
            {user && (<div className='flex p-2'>
                <div className='p-2'>
                    <img alt='user'
                        src={user.photoURL}

                    >
                    </img>
                </div>
                <button className='text-white text-lg font-bold'
                    onClick={handleSignOut}
                >Sign Out</button>
            </div>)}
        </div >

    )
}

export default Header
