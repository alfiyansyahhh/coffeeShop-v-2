import { lazy } from 'react'

export const GenericNotFound = lazy(() =>
  import('src/pages/Auth/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)
export const DetailProduct = lazy(
  () => import('src/pages/product/detailProduct/index'),
)
export const EditProduct = lazy(
  () => import('src/pages/product/editProduct/index'),
)

export const Home = lazy(() => import('src/pages/home/index'))
export const Login = lazy(() => import('src/pages/Auth/Login'))
export const Register = lazy(() => import('src/pages/Auth/Register/index'))
export const Cart = lazy(() => import('src/pages/cart/index'))
export const History = lazy(() => import('src/pages/history/index'))
export const Profile = lazy(() => import('src/pages/profile/index'))
export const Product = lazy(() => import('src/pages/product/index'))

export const pageRouters = [
  {
    path: '/cart',
    element: Cart,
  },
  {
    path: '/history',
    element: History,
  },
  {
    path: '/profile',
    element: Profile,
  },
  {
    path: '/product',
    element: Product,
  },
  {
    path: '/editproduct',
    element: EditProduct,
  },
]
