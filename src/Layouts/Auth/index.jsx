import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex justify-center item-center min-h-screen'>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
