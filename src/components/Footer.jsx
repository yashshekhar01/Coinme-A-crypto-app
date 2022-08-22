import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaFacebookF,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <div className='rounded-div mt-9 pt-9 text-primary'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='text-sm py-4'>Help Center</li>
              <li className='text-sm py-4'>Contact Us</li>
              <li className='text-sm py-4'>API Status</li>
              <li className='text-sm py-4'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='text-sm py-4'>About Us</li>
              <li className='text-sm py-4'>Careers</li>
              <li className='text-sm py-4'>Invest</li>
              <li className='text-sm py-4'>Legal</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-5 mt-[-1rem]'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right'>Sign up for crypto news</p>
              <div className='py-5'>
                <form>
                  <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-3xl md:w-auto' type='email' placeholder='Enter your email' />
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-3xl md:w-auto my-3'>Sign up</button>
                </form>
              </div>
              <div className='flex py-5 justify-between text-accent'>
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-5'>Powered by Coin Gecko API</p>
    </div>
  );
};

export default Footer;