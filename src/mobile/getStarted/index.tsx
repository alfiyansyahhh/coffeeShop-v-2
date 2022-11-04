import React from 'react'
import MobileLayout from 'src/layouts/mobileLayouts/mobileLayout'
import { Link } from 'react-router-dom'
import './styles.less'

const GetStarted = () => {
  return (
    <>
      <MobileLayout>
        <div className='bg-getStarted'>
          <h1>Coffee for Everyone</h1>
          <div className='center'>
            <Link to="/welcome" className="btn btn-yellow p-3">
              Get Started
            </Link>
          </div>
        </div>
      </MobileLayout>
    </>
  )
}

export default GetStarted