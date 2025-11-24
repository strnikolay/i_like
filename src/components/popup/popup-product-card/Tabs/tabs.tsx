'use client'

import React, { ReactElement, useState } from "react"

type Props = {
  children: Item[];
}

type Item = {
  props:childrenProps
}

type childrenProps = {
  title:string;
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
    
  return (
    <div className="popup_product_tabs">
      <div className="popup_product_tab_menu">
        {children.map((item, index:number) => 
          item&&   
          <label key={index} className='popup_product_tab_container' >
            <input checked={selectedTab===index} type="radio" onChange={() => setSelectedTab(index)}/>
            {item.props.title}
          </label>  
        )}
      </div>
      {children[selectedTab].props.children}
    </div>
  )
}

export default (Tabs)