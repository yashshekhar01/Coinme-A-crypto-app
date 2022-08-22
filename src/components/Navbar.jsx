import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!nav)
    };

    const handleSignOut = async () => {
        try {
          await logout();
          navigate('/');
        } catch (e) {
          console.log(e.message);
        }
      };

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
        <Link to='/'>
            <h1 className='text-4xl'>CryptoMe</h1>        
        </Link>
        <div className='hidden md:block'>
            <ThemeToggle />
        </div>
        
       {user?.email ? (
          <div>
          <Link to='/account' className='p-5'>
            Account
          </Link>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
       ) : (
        <div className='hidden md:block'>
        <Link to='/signin' className='p-3 hover:text-accent'>Sign In</Link>
        <Link to='/signup' className='bg-button text-btnText px-7 py-3 ml-2 rounded-3xl shadow-lg hover:shadow-2xl'>Sign Up</Link>
    </div>
       )}

        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={nav ? 'md:hidden fixed left-2 top-24 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' 
        : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }>
            <ul className='w-full p-5'>
                <li onClick={handleNav} className='border-b py-7'>
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={handleNav} className='border-b py-7'>
                    <Link to='/account'>Account</Link>
                </li>
                <li className='py-7'>
                    <ThemeToggle />
                </li>
            </ul>
            <div className='flex flex-col w-full p-5'>
                <Link to='/signin'>
                  <button onClick={handleNav} className='w-full my-3 p-4 bg-primary text-primary border border-secondary rounded-3xl shadow-xl'>Sign In</button>
                </Link>
                <Link onClick={handleNav} to='/signup'>
                  <button className='w-full my-3 p-4 bg-button text-btmText rounded-3xl shadow-xl'>Sign Up</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar