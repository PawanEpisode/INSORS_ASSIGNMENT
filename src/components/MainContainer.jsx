import React from 'react'
import SignupContainer from './SignupContainer'
import Login from './Login'

const MainContainer = () => {
  return (
    <div className='mainbody-container w-full mb-40'>
        <div className='w-full flex gap-28 px-8'>
            <Login />
            <SignupContainer />
        </div>
    </div>
  )
}

export default MainContainer 