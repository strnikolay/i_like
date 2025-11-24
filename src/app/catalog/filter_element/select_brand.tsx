'use client'

import {FC, useState, useEffect} from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import { brandList } from "@/api/db";
 

interface Props {
    brand:number;
    //index:number;
}

const SelectBrand:FC<Props> = observer (({brand}) => {
  const {Product_Store} = useStore()
  const [selected, setSelected] = useState(false)

  useEffect (()=>{
    if(Product_Store.SelectedBrand.includes(brand)){
      setSelected(true)
    } else {
      setSelected(false)
    }
  },[Product_Store.SelectedBrand])

  return (
    <div className="input-wrap">  
    <input checked={selected} id={brandList[brand]} value={brand} type="checkbox" onChange={(e) => Product_Store.brandSelectHandler(e, brand)}/>
    <label htmlFor={brandList[brand]} className='select-brand' >{brandList[brand]}</label>
     </div>                 
  )
})

export default (SelectBrand);