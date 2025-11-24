'use client'
//import "./cart.css";
import {FC, useEffect, useState } from "react";
import {IOrderParams} from "@/store/interfaces";
import { observer } from 'mobx-react';
//import { Select_Transport } from "./select_transport";
import { ProductList_in_History } from "./productList_in_history";
//import Product_card  from '@/components/Product_card';

interface Props {
  order:IOrderParams
}

export const Order:FC<Props> = observer(({order}) => {
  //const {Store, Cart_Store} = useStore();
  const [selectedReceipt, setSelectedReceipt] = useState<string>("")
  //const [selectedTranstort, setSelectedTranstort] = useState<string>("")

  useEffect(()=>{
    if(order.deliveryType === "delivery") {
      setSelectedReceipt("доставка")
    }
    if(order?.deliveryType === "fromstore") {
      setSelectedReceipt("самовывоз")
    }
    //console.log(order)
  },[order])

  return (
    <div className="order-in-history-wrap">

      <h2>Заказ номер: {order!.id}</h2>
      <h2>Статус: {order!.status}</h2>
      <h2>Контактное лицо: {` `+order!.contact.name}{` `+order!.contact.phone}</h2>
       
        
          
        {order.deliveryType==="delivery"?
        <>
          <div className="deliv">
            <div>способ получения заказа: {selectedReceipt}</div>  
            <div className={`btn `+order.transport}></div>
          </div>   
          <h2>по адресу: {order.adress.adress}</h2>
        </>
        :
        <div className="fromstore">Самовывоз с нашего склада В Москве.</div>
        }

      <ProductList_in_History />

 


      
    
    {/*<button className="confirm-order-btn" onClick={()=>Cart_Store.confirmOrder()}>Далее</button>*/} 

    </div>
  )
});

//export default (Confirm);
