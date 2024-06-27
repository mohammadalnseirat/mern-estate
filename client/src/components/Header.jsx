import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
<header className='bg-slate-200 shadow-md'>
        <div className='p-3 max-w-6xl mx-auto flex items-center justify-between'>
            <Link to={'/'}>
            <h1 className='font-bold text-xl sm:text-2xl flex flex-wrap'>
                <span className='text-red-600'>Real</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-md flex items-center'>
                <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-32 sm:w-64' />
                <FaSearch className='text-slate-700'/>
            </form>
            <ul className='flex items-center gap-4'>
                <Link to={'/'}>
                <li className='hidden sm:inline font-semibold text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to={'/about'} >
                <li className='hidden sm:inline font-semibold text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to={'/sign-in'}>
                <li className='text-slate-700 font-semibold hover:underline'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header