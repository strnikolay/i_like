'use client'
import React from 'react'

type Props = {
  title: string;
  children: React.ReactNode;
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div className='content'>{children}</div>
}

export default Tab