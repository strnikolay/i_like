'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { mockdata} from '@/api/db';
import {IcartItem, IProduct} from "@/store/interfaces";
import { observer } from 'mobx-react';
import { Cart_item_in_history } from "./cart_item_in_history";
//import Cart_item from "./cart_item";
//import { Cart_item_in_confirm } from "./cart_item_in_Confirm";
//import Product_card  from '@/components/Product_card';



export const ProductList_in_History:FC = observer(() => {
  const {Store, Cart_Store} = useStore();
  const [cartList, setCartList] = useState<Array<IProduct>>([])
  //const [summ, setSumm] = useState<number>(0)
 
  useEffect(()=>{
      const tempArr:IProduct[] = []
      Store.user.cart.forEach((elInCart:IcartItem)=>{
        const el = mockdata.find((elInDB:IProduct)=> elInDB.id===elInCart.id)
        if(el){tempArr.push(el)}
      })
      //console.log(tempArr)
      setCartList(tempArr)
  },[Store.user.cart])

  useEffect(()=>{
    Cart_Store.CalcSummOfProductInCart();
  },[Cart_Store.isParamsUpdate])


  return (
    <div className="product-list-wrap">
      <h2>Cумма заказа {Cart_Store.summInCart} руб.</h2>
      

      <div className="product-wrap">
          {cartList.map((el:IProduct,index:number)=>
          <div key={index}>
            <Cart_item_in_history key={index} item={el} itemIndex={index}/>
          </div>
           
          )}
      </div> 
    </div>
  )
});


