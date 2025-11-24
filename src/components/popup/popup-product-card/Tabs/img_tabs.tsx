'use client'

import React, { useState } from "react";
import Image from 'next/image';

type Props = {
  img: string[]
}

const Img_tabs: React.FC<Props> = ({ img }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  return (
    <div className="popup_product_tabs">
      <div className='content'>
        <Image src={img[selectedTab]} fill sizes="10vw" alt="" 	className="img-responsive"/>
      </div>
      <div className="popup_product_tab_menu">
        {img.map((img:string, index:number) =>    
          <label key={index} className='popup_product_img_tab_container' >
            <input checked={selectedTab===index} type="radio" onChange={() => setSelectedTab(index)}/>
            <Image src={img} fill sizes="10vw" alt="" 	className="img-responsive"/>
          </label>  
        )}
      </div>
    </div>
  ) 
}

export default (Img_tabs)