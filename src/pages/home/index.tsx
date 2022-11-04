import React from 'react'
import { Link } from 'react-router-dom'
import Default from 'src/layouts/Default'
import './styles.less'
import staff from 'assets/staff.svg'
import store from 'assets/store.svg'
import team from 'assets/team.svg'
import ceklis from 'assets/ceklis.svg'
import ceklis2 from 'assets/ceklis2.svg'
import map from 'assets/map.svg'
import partner from 'assets/partner.svg'

import { favoriteList } from './list'

const listP = (ket: string) => {
  return (
    <>
      <div className="listP">
        <img src={ceklis2} className="p-3" alt="log" /> {ket}
      </div>
    </>
  )
}

const Home = () => {
  return (
    <>
      <Default>
        <div className="jumbo w-100">
          <div className="d-flex w-75  justify-content-start flex-column p-3">
            <b className="pt-5 mt-5">
              Start Your Day with Coffee and Good Meals
            </b>
            <p>
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>
            <Link to="/login" className="seePromo p-3">
              Get Started
            </Link>
            <div className="cardInfo">
              {[
                { src: staff, number: '90+', ket: 'staff' },
                { src: store, number: '30+', ket: 'store' },
                { src: store, number: '800+', ket: 'store' },
              ].map(e => {
                return (
                  <div className="d-flex">
                    <img src={e.src} alt="log" />
                    <div className="p-2">
                      <strong>{e.number}</strong>
                      <div>{e.ket}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div />
        </div>
        <div className="seccondContent">
          <img className=" work" src={team} alt="log" />
          <div className="p-3 pt-5">
            <h4>We Provide Good Coffee and Healthy Meals</h4>
            <p>
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
            <div className="p-2">
              {[
                'High quality beans',
                'Healthy meals, you can request the ingredients the ingredients',
                'Chat with our staff to getbetter experience for ordering',
                'Free member card with a minimum purchase of IDR 200.000.',
              ].map(e => {
                return (
                  <div className="p-2">
                    <img src={ceklis} alt="ceklis" /> {e}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="favorite " id="favorite">
          <div className="p-5 mb-3 text-center">
            <h2>Here is People’s Favorite</h2>
            <div>
              Let’s choose and have a bit taste of poeple’s favorite. It might
              be yours too!
            </div>
          </div>
          <div className="warpCardf">
            {favoriteList.map((e, i) => {
              return (
                <div className="cardF">
                  <div className="d-flex flex-column">
                    <div className="pd">
                      <img src={e.img} alt="log" />
                    </div>
                    <strong>{e.nameProduct}</strong>
                    <div className="rowListp pt-2">
                      {e.listP.map(x => {
                        return listP(x)
                      })}
                    </div>
                  </div>
                  <strong className="mt-auto">{e.price}</strong>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <div className="store p-5 mb-3 text-center">
            <h2>Visit Our Store in the Spot on the Map Below</h2>
            <div>
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </div>
          </div>
          <img className="map w-100 p-5" src={map} alt="" />
        </div>
        <div className="partner p-5">
          <div className="p-5 mb-3 text-center">
            <h2>Our Partner</h2>
          </div>
          <img className="w-100" src={partner} alt="s" />
        </div>
      </Default>
    </>
  )
}

export default Home
