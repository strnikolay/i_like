'use client'
import "./order_history.css";
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";

import { IOrderParams} from "@/store/interfaces";
import { observer } from 'mobx-react';
import { Order } from "./order";




export const Order_history:FC = observer(() => {
  const {Store} = useStore();
  const [loading, setLoading] = useState<boolean>(true)
  const [orderList, setOrderList] = useState<IOrderParams[]>()



  useEffect(()=>{
    if(Store.user.orderHistory){
      setOrderList(Store.user.orderHistory)
      setLoading(false)
    }

  },[])

  useEffect(()=>{
    console.log(orderList)
  },[orderList])

  if(loading) {
    return(
      <div>Загрузка</div>
    )
  }

  return (
    <div className="order-history-wrap profile-content">

      <h1>История заказов</h1>
      
      {orderList?.map((order:IOrderParams, index:number) =>
          <Order key={index} order={order}/>
        )
      }
    </div>
  )
});

//export default (Confirm);
