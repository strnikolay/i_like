'use client'
import React from "react"

type Props = {
  title: string,
  index: number,
  setSelectedTab: (index: number) => void,
  selectedTab:number;
}

const TabTitle: React.FC<Props> = ({ selectedTab,title,setSelectedTab, index }) => {
  return (
    <div 
      data-active={selectedTab===index?"active":""}
      className="tab_container"
    >
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </div>
  )
}

export default TabTitle