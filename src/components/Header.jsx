import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-32 text-white  bg-black sticky z-50 top-0 left-0'>
        <div className='header-content text-center'>Header Content</div>
        <div className='main-header w-full flex justify-between py-6 px-12'>
          <div className='text-2xl font-extrabold cursor-pointer' title='Home'>HUGO BOSS</div>
          <div className='flex gap-2 text-lg font-medium'>
            <div className='hover:underline'>Men</div>
            <div className='hover:underline'>Women</div>
          </div>
          <div className=''>
            <ul className='flex gap-3'>
              <li><a href='/search'>Search</a></li>
              <li><a href='/search'>Search</a></li>
              <li><a href='/search'>Search</a></li>
              <li><a href='/search'>Search</a></li>
              <li><a href='/search'>Search</a></li>
              <li><a href='/search'>Search</a></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header