'use client'
import "./cart.css";
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { mockdata} from '@/api/db';
import {IcartItem, IProduct} from "@/store/interfaces";
import { observer } from 'mobx-react';
import Cart_item from "./cart_item";




const CartList:FC = observer(() => {
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
    <div className="cart-list-wrap container">
      <h1>Корзина товаров</h1>
      <h2>Выбрано {cartList.length} товара на общую сумму {Cart_Store.summInCart} руб.</h2>
      <h2>Выберите товара еще на {30000 - Cart_Store.summInCart} руб. и получите скидку 2%</h2>
      <div className="cart-product-wrap">
          {cartList.map((el:IProduct,index:number)=>
            <Cart_item key={index} item={el} itemIndex={index}/>
          )}
      </div>
      <button className="order-next-btn" onClick={()=>Cart_Store.setCart_Stage("order")}>Оформить заказ</button>  
    </div>
  )
});

export default (CartList);
