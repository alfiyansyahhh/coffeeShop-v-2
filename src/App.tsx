import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from 'src/routes/components/ErrorBoudary'
import MobileRoutes from 'routes/mobile/Routes'
import { Routes } from './routes/Routes'
import 'app.less'

export const App = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <BrowserRouter>
      <ErrorBoundary>
        {width >= 720 ? <Routes /> : <MobileRoutes />}
      </ErrorBoundary>
    </BrowserRouter>
  )
}
