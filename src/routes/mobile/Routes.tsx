/* eslint-disable prettier/prettier */
import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { HomeMobile } from '../paths'

const Routes = () => {
  return (
    <Suspense fallback={<p>Memuat</p>}>
      <RoutesReactRouterDom>
        <Route path="/Home" element={<HomeMobile />} />
      </RoutesReactRouterDom>
    </Suspense>
  )
}

export default Routes