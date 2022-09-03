/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkDom } from 'react-router-dom'
import Logo from 'assets/logo.svg'
import './styles.less'
import MenuIcon from '@mui/icons-material/Menu'

import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

const Header = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={`header p-4 active ${!show && 'hidden'}`}>
      <Link to="/Home" className="header-logo p-2">
        <img src={Logo} style={{ width: 30 }} alt="log-logo" />
        <b className="p-2">Coffee Shop</b>
      </Link>

      <div className="h-menu d-flex allign-items-center w-50 justify-content-end">
        <>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon style={{ color: '#6A4029' }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </>
      </div>
      <div className="header-content">
        <div className="list" style={{ textDecoration: 'none' }}>
          <LinkDom className="listMenu" to="/home">
            <Link to="jumbo">Home</Link>
          </LinkDom>
          <Link to="favorite" className="listMenu">
            Favorite
          </Link>
          <Link className="listMenu" to="store">
            Store
          </Link>
          <Link className="listMenu" to="partner">
            Partner
          </Link>
        </div>
        <div className="auth-header">
          <LinkDom to="/login" className="login ">
            Login
          </LinkDom>
          <LinkDom to="/register" className="regis">
            Sign Up
          </LinkDom>
        </div>
      </div>
    </div>
  )
}

export default Header
