import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <section className='flex items-center justify-center min-h-screen bg-purple-100'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-center text-purple-700 mb-6'>Login to Tech Alliance</h2>
        <form className='space-y-4'>
          <div>
            <label htmlFor='email' className='block text-gray-700 font-medium'>Email</label>
            <input id='email' type='email' placeholder='Enter your email' className='w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none' />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-700 font-medium'>Password</label>
            <input id='password' type='password' placeholder='Enter your password' className='w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none' />
          </div>
          <button type='submit' className='w-full bg-purple-600 text-white py-2 cursor-pointer rounded-lg hover:bg-purple-700 transition'>Login</button>
        </form>
        <p className='text-center text-gray-600 mt-4'>
          Don&apos;t have an account? <Link href='/register' className='text-purple-700 hover:underline'>Register</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
