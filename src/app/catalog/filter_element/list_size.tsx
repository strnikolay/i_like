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


//import { LoginForm } from "@/app/(login)/page";

interface Props {
  //sizes:Array<number>;
  //colors:Array<number>;
}

const theme = {
  sizeMargin: ""
}

export const Size_list:FC<Props> = observer (({}) => {
  const {Product_Store} = useStore()
  const {LocalRoot ,setTheme, setVariable} = useLocalTheme();

  const [sizesList, setSizesList] = useState<Array<number>>([])
  const [sizeMarginValue, setSizeMarginValue] = useState<number>(0)
  const [isSizeLeft, setIsSizeLeft] = useState<boolean>(true)
  const [isSizeRight, setIsSizeRight] = useState<boolean>(true)


  
  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme])

  useEffect(() => {
    setVariable('sizeMargin', sizeMarginValue+`rem`);
  }, [sizeMarginValue])

  useEffect(() => {
    //console.log(sizeMarginValue)
    if(sizeMarginValue >= 0){
      //console.log("22") 
      setIsSizeRight(false) 
    } else {
      setIsSizeRight(true) 
    }
    //console.log((sizesList.length-14)*5)
    if(sizeMarginValue <= -((sizesList.length-14)*5)){ 
      setIsSizeLeft(false) 
    } else {
      setIsSizeLeft(true) 
    }
  }, [sizeMarginValue, sizesList.length])

  useEffect (()=>{
    setSizesList(Product_Store.sizesList)
  },[Product_Store.ProductFiltredByBrand, Product_Store.ProductFiltredByCategory])



  return (
    < LocalRoot theme = { theme } >
      <div className="size-filter">
        <button disabled={!isSizeLeft} className="size-p prev" onClick={()=>setSizeMarginValue(sizeMarginValue-5)}/>
        <div className="size-wrap">
          <div className="sizeFilter-item">
            {sizesList.map((size:number,i:number)=>(
              <SelectSize key={i} size={size}/>           
            ))}
          </div>
        </div>
        <button disabled={!isSizeRight} className="size-n next" onClick={()=>setSizeMarginValue(sizeMarginValue+5)}/>
      </div>
    </LocalRoot>
      



  )
})

