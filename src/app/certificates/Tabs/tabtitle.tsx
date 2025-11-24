'use client'
import React from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title,setSelectedTab, index }) => {
  return (
    <div className="tab_container">
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </div>
  )
}

export default TabTitle