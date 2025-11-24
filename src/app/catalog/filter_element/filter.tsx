'use client'

import {FC, useEffect, useState} from "react";
import { useStore } from "@/store/storeProvidert";
//import { brandList} from '@/api/db';
import { observer } from 'mobx-react';
import './filter.css'
import SelectBrand from "./select_brand";
import SelectSize from "./select_size";
import SelectColor from "./select_color";
import {useLocalTheme } from 'css-vars-hook';
import Price_range from "./price_range";
import { Color_list } from "./list_color";
import { Size_list } from "./list_size";


//import { LoginForm } from "@/app/(login)/page";

interface Props {
  //sizes:Array<number>;
  //colors:Array<number>;
}

const Filter:FC<Props> = observer (({}) => {
  const {Product_Store} = useStore()

  const [brands, setBrands] = useState<Array<number>>([])

  useEffect (()=>{
    const tempBrandArr:number[] = []
    Product_Store.ProductFiltredByCategory.forEach((el)=>{
      tempBrandArr.push(el.brand)
    })
    const clearBrand = [...new Set(tempBrandArr)] 
    setBrands(clearBrand)
  },[Product_Store.ProductFiltredByCategory])

  return (
    <div className="filter">
    <div className="filter-left-wrap">
       
      <div className="brand-filter">
        <div className="border-wrap">
          {brands.map((brand:number,i:number)=>(
            <SelectBrand key={i} brand={brand}/>           
          ))}
        </div>

      </div>

      <Size_list/>
      <Color_list/>
    </div>
    <div>
      <Price_range/>

    </div>
    
    </div>

  )
})

export default (Filter);