'use client'
import "./favourites.css";
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { mockdata} from '@/api/db';
import { observer } from 'mobx-react';
import Product_card  from '@/components/product/Product_card';
import { IProduct } from "@/store/interfaces";

const Favourites:FC = observer(() => {
  const {Store} = useStore();
  const [favList, setfavList] = useState<Array<IProduct>>([])
 
  useEffect(()=>{
      const tempArr:Array<IProduct> = []
      Store.user.fav.forEach((id)=>{
        const el = mockdata.find((el)=> el.id===id)
        if(el){tempArr.push(el)}
      })
      //console.log(tempArr)
      setfavList(tempArr)
  },[Store.user.fav])

  return (
    <div className="fav-wrap container">
      <h1>Избраные товары</h1>
      <div className="fav-product-wrap">
          {favList.map((el:IProduct,index:number)=>
            <Product_card key={index} el={el} index={index}/>
          )}
      </div>
        
    </div>
  )
});

export default (Favourites);
