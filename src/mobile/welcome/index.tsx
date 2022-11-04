import React from 'react'
import MobileLayout from 'src/layouts/mobileLayouts/mobileLayout'
import { Link } from 'react-router-dom'
import './styles.less'

const Welcome = () => {
  return (
    <>
      <MobileLayout>
        <div className='bg-welcome'>
          <div className='text'>
            <h1>Welcome!</h1>
            <p>Get a cup of coffee for free every sunday morning</p>
          </div>
          <div className='center'>
            <Link to="/register" className="btn btn-brown p-3">
              Create New Account
            </Link>
            <Link to="/login" className="btn btn-yellow p-3 mt-3">
              Login
            </Link>
          </div>
        </div>
      </MobileLayout>
    </>
  )
}

export default Welcome