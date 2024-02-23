import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

function Header () {
  return (
    <div className='border-b-2 border-b-green-500 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-5xl font-bold tracking-tight text-green-700'
        >
          SnackSprint
        </Link>
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Header
