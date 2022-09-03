/* eslint-disable prettier/prettier */
import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import Guard from 'routes/components/Guards'
import {
  GenericNotFound,
  Login,
  Register,
  Home,
  pageRouters,
} from './paths'

export const Routes = () => {
  return (
    <Suspense fallback={<p>Memuat</p>}>
      <RoutesReactRouterDom>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<GenericNotFound />} />
        {pageRouters.map(e => {
          return(
            <Route path={e.path} element={<Guard element={<e.element />} />} />
          )
        })}
      </RoutesReactRouterDom>
    </Suspense>
  )
}
