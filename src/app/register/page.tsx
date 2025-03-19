import React from 'react';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <section className='flex items-center justify-center h-screen bg-purple-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center text-purple-600 mb-4'>Register To Tech Alliance</h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-gray-700'>Full Name</label>
            <input
              type='text'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter your full name'
              required
            />
          </div>
          <div>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter your email'
              required
            />
          </div>
          <div>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-purple-600 text-white cursor-pointer py-2 rounded-md hover:bg-purple-700 transition duration-300'
          >
            Register
          </button>
        </form>
        <p className='text-center text-gray-600 mt-4'>
          Already have an account?{' '}
          <Link href='/login' className='text-purple-600 hover:underline'>Login</Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
