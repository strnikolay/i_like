'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import { ColorName } from "@/api/db";

interface Props {
  color:number;
}

const SelectColor:FC<Props> = observer (({color}) => {
  const {Product_Store} = useStore()
  const [selected, setSelected] = useState(false)

  useEffect (()=>{
    if(Product_Store.SelectedColors.includes(color)){
      setSelected(true)
    } else {
      setSelected(false)
    }
  },[Product_Store.SelectedColors])

  return (
    <div className="input-wrap">  
      <input checked={selected} id={JSON.stringify(color)} value={color} type="checkbox" onChange={(e) => Product_Store.colorsSelectHandler(e, color)}/>
      <label htmlFor={JSON.stringify(color)} className='select-brand' >
        <div className={`color-item color`+color}></div>
        {ColorName[color]}
      </label>
    </div>                 
  )
})

export default (SelectColor);