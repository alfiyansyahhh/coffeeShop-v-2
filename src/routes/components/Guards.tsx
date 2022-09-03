/* eslint-disable react/jsx-filename-extension */
import { Navigate } from 'react-router-dom'

export type ProtectedRouteProps = {
  element: any
}

export default function Guard({ element }: ProtectedRouteProps) {
  const isAuth = true
  if (isAuth) {
    return element
  }
  return <Navigate to={{ pathname: '/login' }} />
}
