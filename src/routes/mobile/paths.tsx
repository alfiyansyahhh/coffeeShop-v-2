import { lazy } from 'react'

export const HomeMobile = lazy(() => import('src/mobile/home/index'))
export const GetStarted = lazy(() => import('src/mobile/getStarted/index'))
export const Welcome = lazy(() => import('src/mobile/welcome/index'))