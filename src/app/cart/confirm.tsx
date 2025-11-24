'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";

import { observer } from 'mobx-react';
import { ProductList_in_Confirm } from "./productList_in_Confirm";




export const Confirm:FC = observer(() => {
  const {Cart_Store} = useStore();
  const [selectedReceipt, setSelectedReceipt] = useState<string>("")
  const [selectedTranstort, setSelectedTranstort] = useState<string|undefined>("")


  useEffect(()=>{
    if(Cart_Store.orderParams.deliveryType === "delivery") {
      setSelectedReceipt("Доставка")
    }
    if(Cart_Store.orderParams.deliveryType === "fromstore") {
      setSelectedReceipt("Смовывоз")
    }
    setSelectedTranstort(Cart_Store.orderParams.transport)
  },[])

  return (
    <div className="order-wrap container">
      <button className="return-to-cart-btn" onClick={()=>Cart_Store.setCart_Stage("order")}>Назад</button> 

      <h1>Подтверждение заказа</h1>
      <div className="order-select">
        <div className="contact">
          Контактное лицо:{` `+Cart_Store.orderParams.contact.name}{` `+Cart_Store.orderParams.contact.phone}
        </div>
      
        <div className="delivery-title">
          способ получения заказа: {selectedReceipt}
        </div>
          
        {Cart_Store.orderParams.deliveryType==="delivery"?
        <div className="transport-wrap">
          <p>Адрес доставки:{Cart_Store.orderParams.adress.adress}</p>
          <div className="transport-select">
            Компанией:<div className={`btn `+selectedTranstort}></div>
          </div>
        </div>:
        
        <div className="fromstore">Самовывоз с нашего склада В Москве.</div>
        }

        <ProductList_in_Confirm />




      </div>
    
    <button className="confirm-order-btn" onClick={()=>Cart_Store.confirmOrder()}>Далее</button> 

    </div>
  )
});

//export default (Confirm);
