/* eslint-disable prettier/prettier */
import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom' 
import { HomeMobile, GetStarted, Welcome } from './paths'

const Routes = () => {
  return (
    <Suspense fallback={<p>Memuat</p>}>
      <RoutesReactRouterDom>
        <Route path="/" element={<HomeMobile />} />
        <Route path="/Home" element={<HomeMobile />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/Welcome" element={<Welcome />} />
      </RoutesReactRouterDom>
    </Suspense>
  )
}

export default Routes