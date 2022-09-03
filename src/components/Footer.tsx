/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'assets/logo.svg'

const Footer = ({ isCard }: { isCard: boolean }) => {
  return (
    <div className="row-footer">
      {isCard && (
        <div className="card-footer w-75 p-5 d-flex justify-content-around">
          <div>
            <h2>Check our promo today!</h2>
            <div>Let's see the deals and pick yours!</div>
          </div>
          <div className="seePromo">See Promo</div>
        </div>
      )}
      <div
        className="d-flex w-100 justify-content-around p-5"
        style={{ backgroundColor: '#F0F0F0' }}
      >
        <div className="d-flex justify-content-center flex-column align-items-start text-start">
          <Link
            to="/Home"
            className="d-flex p-2 justify-content-center mb-3 mt-5 align-items-center"
            style={{ textDecoration: 'none' }}
          >
            <img src={Logo} style={{ width: 30 }} alt="log-logo" />
            <b className="p-2">Coffee Shop</b>
          </Link>
          <div
            className="p-2"
            style={{ width: '50%', fontSize: '1rem', color: '#4F5665' }}
          >
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </div>
          <div className="p-2" style={{ fontSize: '0.6rem', color: '#4F5665' }}>
            ©2020CoffeeStore
          </div>
        </div>

        <div />
      </div>
    </div>
  )
}

export default Footer
