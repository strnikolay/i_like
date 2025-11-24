'use client'
import {FC, useEffect, useState} from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import SelectColor from "./select_color";
import {useLocalTheme } from 'css-vars-hook';
import "./color.css"


interface Props {
  //sizes:Array<number>;
  //colors:Array<number>;
}

const theme = {
  colorMargin: "",
  sizeMargin: ""
}

export const Color_list:FC<Props> = observer (({}) => {
  const {Product_Store} = useStore()
  const {LocalRoot ,setTheme, setVariable} = useLocalTheme();
  const [colorsList, setColorsList] = useState<Array<number>>([])
  const [colorMarginValue, setColorMarginValue] = useState<number>(0)
  const [isColorLeft, setIsColorLeft] = useState<boolean>(true)
  const [isColorRight, setIsColorRight] = useState<boolean>(true)
  
  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme])
  useEffect(() => {
    setVariable('colorMargin', colorMarginValue+`rem`);
  }, [colorMarginValue])


  useEffect(() => {
    if(colorMarginValue >= 0){ 
      setIsColorRight(false) 
    } else {
      setIsColorRight(true) 
    }
    if(colorMarginValue <= -((colorsList.length-8)*8)){ 
      setIsColorLeft(false) 
    } else {
      setIsColorLeft(true) 
    }
  }, [colorMarginValue, colorsList.length])

  useEffect (()=>{
    //console.log("22")
    setColorsList(Product_Store.colorsList)
  },[Product_Store.productFiltredBySizes, Product_Store.SelectedColors])

  return (      
    < LocalRoot theme = { theme } >
    <div className="colors-filter">
        <button disabled={!isColorLeft} className="color-p prev" onClick={()=>setColorMarginValue(colorMarginValue-8)}/>
        <div className="color-wrap">
          <div className="colorFilter-item">
            {colorsList.map((color:number,i:number)=>(
              <SelectColor key={i} color={color}/>           
            ))}
          </div>
        </div>
        <button disabled={!isColorRight} className="color-n next" onClick={()=>setColorMarginValue(colorMarginValue+8)}/>
    </div>
    </LocalRoot>        

  )
})

