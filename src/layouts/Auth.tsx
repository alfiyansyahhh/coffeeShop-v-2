import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'assets/logo.svg'
import './styles.less'

interface defaultProps {
  children: React.ReactNode
}

const Auth: React.FC<defaultProps> = ({ children }) => {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <div className="bg-auth" />
      <div className="p-5 w-75 d-flex flex-column align-items-center">
        <div className="d-flex w-75 justify-content-between align-items-center">
          <Link
            to="/Home"
            className="d-flex p-2 justify-content-center align-items-center"
            style={{ textDecoration: 'none' }}
          >
            <img src={Logo} style={{ width: 30 }} alt="log-logo" />
            <b
              className="p-2"
              style={{
                color: '#0B132A',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Coffee Shop
            </b>
          </Link>
          <Link
            to="/register"
            style={{
              color: '#6A4029',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Sign Up
          </Link>
        </div>
        <div className="contentAuth w-75">{children}</div>
      </div>
    </div>
  )
}

export default Auth
