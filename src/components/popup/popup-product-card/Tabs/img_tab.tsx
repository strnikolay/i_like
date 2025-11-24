'use client'
import React from 'react'

type Props = {
  img: string;
  children: React.ReactNode;
}

const Img_tab: React.FC<Props> = ({ children }) => {
  return <div className='content'>{children}</div>
}

export default Img_tab