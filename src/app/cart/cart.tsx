'use client'
import "./cart.css";
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { mockdata} from '@/api/db';
import {IcartItem, IcartItemParam, IProduct, IProductInCart} from "@/store/interfaces";
import { observer } from 'mobx-react';
import Cart_item from "./cart_item";




const CartList:FC = observer(() => {
  const {Store, Cart_Store} = useStore();
  const [cartList, setCartList] = useState<Array<IProductInCart>>([])
  const [Loading, setLoading] = useState<Boolean>(true)
  const [summ, setSumm] = useState<number>(0)
 
  useEffect(()=>{
    //console.log("обновление CartList", Store.user.cart)
      const tempArr:IProductInCart[] = []
      let tempCost = 0
      if(Store.user.cart){
        Store.user.cart.productParams.forEach((elInCart:IcartItem)=>{
          //console.log("el", elInCart)
          const el = mockdata.find((elInDB:IProduct)=> elInDB.id===elInCart.productId)
          
          if(el){
            const tempProduct:IProductInCart = {
              id:elInCart.id,
              orderId:elInCart.orderId,
              product:el,
              itemParams:elInCart.itemParams
            }
            tempArr.push(tempProduct)
          }
          
          let paramCost = 0
          elInCart.itemParams.forEach((param:IcartItemParam)=>{
            if(el)
              paramCost = paramCost + (el.price * param.count)
          })
          tempCost = tempCost + paramCost
        })
        //console.log("temparr",tempArr)
        setSumm(tempCost)
        setCartList(tempArr)
        setLoading(false)
      }


  },[Store.user])

  /*useEffect(()=>{
    Cart_Store.CalcSummOfProductInCart();
  },[Cart_Store.isParamsUpdate])*/
  useEffect(()=>{
    //console.log("cart",Store.user.cart)
    //console.log("77",cartList)
  },[cartList])

  return (
    <div className="cart-list-wrap container">
      <h1>Корзина товаров</h1>
      <h2>Выбрано {cartList.length} товара на общую сумму {summ} руб.</h2>
      <h2>Выберите товара еще на {30000 - Cart_Store.summInCart} руб. и получите скидку 2%</h2>
      <div className="cart-product-wrap">
          {!Loading&&cartList.map((product:IProductInCart,index:number)=>
            <Cart_item key={index} item={product} itemIndex={index}/>
          )}
      </div>
      <button className="order-next-btn" onClick={()=>Cart_Store.setCart_Stage("order")}>Оформить заказ</button>  
    </div>
  )
});

export default (CartList);
