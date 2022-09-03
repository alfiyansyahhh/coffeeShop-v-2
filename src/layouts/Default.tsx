import React from 'react'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import './styles.less'

interface defaultProps {
  children: React.ReactNode
}

const Default: React.FC<defaultProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="d-flex flex-column " style={{ marginTop: 90 }}>
        {children}
        <Footer isCard />
      </div>
    </>
  )
}

export default Default
