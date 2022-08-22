import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { signIn, UserAuth } from '../context/AuthContext';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[670px] px-5 py-20'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-5'>
            <label>Email</label>
            <div className='my-3 w-full relative rounded-3xl shadow-xl'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-3xl'
                type='email'
              />
              <AiOutlineMail className='absolute right-3 top-4 text-gray-500' />
            </div>
          </div>
          <div className='my-5'>
            <label>Password</label>
            <div className='my-3 w-full relative rounded-3xl shadow-xl'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-3xl'
                type='password'
              />
              <AiFillLock className='absolute right-3 top-4 text-gray-500' />
            </div>
          </div>
          <button className='w-full my-3 p-3 bg-button text-btnText rounded-3xl shadow-xl'>
            Sign in
          </button>
          </form>
        <p className='my-5'>
          Don't have an account?
          <Link to='/signup' className='text-accent'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;