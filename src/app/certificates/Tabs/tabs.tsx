'use client'

import React, { ReactElement, useState } from "react"
import TabTitle from "./tabtitle"

type Props = {
  children: Item[];
}

type Item = {
  props:childrenProps
  //children: ReactNode[]
}

type childrenProps = {
  title:string;
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  console.log(children)
  
  return (
    <div className="tabs">
      <div className="tab_menu">
        {children.map((item, index:number) => 
          
          item&&<TabTitle
            key={index}
            //title={titles[index]} 
            title={item.props.title} 
            index={index}
            setSelectedTab={setSelectedTab}
          />
        )}
      </div>
      {children[selectedTab].props.children}
    </div>
  )
}

export default (Tabs)