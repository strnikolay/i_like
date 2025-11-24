'use client'

import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';

interface Props {
    size:number;
}

const SelectSize:FC<Props> = observer (({size}) => {
  const {Product_Store} = useStore()
  const [selected, setSelected] = useState(false)

  useEffect (()=>{
    if(Product_Store.SelectedSizes.includes(size)){
      setSelected(true)
    } else {
      setSelected(false)
    }
  },[Product_Store.SelectedSizes])

  return (
    <div className="input-wrap">  
      <input id={JSON.stringify(size)} checked={selected} value={size} type="checkbox" onChange={(e) => Product_Store.sizeSelectHandler(e, size)}/>
      <label htmlFor={JSON.stringify(size)} className='select-brand' >{size}</label>
     </div>                 
  )
})

export default (SelectSize);