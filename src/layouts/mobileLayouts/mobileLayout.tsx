import React, { useEffect, useState, useRef } from 'react'

import './styles.less'

interface ILayout {
  children: null | any | any[]
}

const MobileLayout = ({ children }: ILayout) => {
  return <div className="layout-container">{children}</div>
}

export default MobileLayout
