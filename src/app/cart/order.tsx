'use client'
import "./cart.css";
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import {IContact, IOrderParams} from "@/store/interfaces";
import { observer } from 'mobx-react';
import { Select_Transport } from "./select_transport";




const Order:FC = observer(() => {
  const {Store, Cart_Store} = useStore();
//  const [defaulContact, setDefaulContact] = useState<IContact>()
  const [selectedReceipt, setSelectedReceipt] = useState<string>("delivery")
//  const [selectedTranstort, setSelectedTranstort] = useState<string>("pochta")


  useEffect(()=>{
    const tempContact = Store.user.contact.find(contact=> contact.defaultContact == true)
    //console.log(Store.user.adress.find(adress=> adress.defaultAdress===true))
    //console.log("tempcontact",tempContact)
    //setDefaulContact(tempContact)

    const Id = (() => {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    })()
    //console.log("id", Id)
    const tempAdress = Store.user.adress.find(adress=>adress.defaultAdress===true)
    //console.log("tempadress",tempAdress)
    if(tempContact&&tempAdress){
    const params:IOrderParams = {
      id:Id,
      status:"В обработке",
      contact:tempContact, 
      deliveryType: selectedReceipt, 
      adress: tempAdress,
      transport: "pochta", // selectedTranstort,
      productParams:Store.user.cart
    }
    Cart_Store.setOrderParams(params)
    }
  },[])

  /*useEffect(()=>{
    console.log(Cart_Store.orderParams)
  },[Cart_Store.orderParams])*/




  return (
    <div className="order-wrap container">
      <button className="return-to-cart-btn" onClick={()=>Cart_Store.setCart_Stage("cart")}>Назад в корзину</button> 

      <h1>Оформление заказа</h1>
      <div className="order-select">
        <div className="contact">

          Контактное лицо:
          <select name="contact" id="contact-select" onChange={(e)=>{}}>
            {Store.user.contact.map((contact:IContact, index:number)=>
              <option key={index} value="">{` `+contact.name},{` `+contact.phone}</option>
            )}            
          </select>
        </div>
      <div className="delivery">
        <div className="delivery-title">Выберите способ получения заказа:</div>
        <label 
          className="type-delivery-select"
        >
          <input
            onChange={()=>setSelectedReceipt("delivery")}
            checked={selectedReceipt==="delivery"}
            name='delyvery-type'
            type="radio"
            className="delyvery-type-input"
          />
          Доставка
        </label>
        <label 
          className="type-fromstore-select"
        >
          <input
            onChange={()=>setSelectedReceipt("fromstore")}
            checked={selectedReceipt==="fromstore"}
            name='delyvery-type'
            type="radio"
            className="delyvery-type-input"
          />
          Самовывоз
        </label>       
      </div>
      {selectedReceipt==="delivery"?
      <div className="transport-wrap">
        <p>Адрес доставки:{Store.user.adress[0].adress}</p>
        <div className="transport-select">
          <Select_Transport type="ems"/>
          <Select_Transport type="pecom"/>       
          <Select_Transport type="del-line"/>
          <Select_Transport type="sdek"/>
          <Select_Transport type="pochta"/>
        </div>
      </div>:
      
      <div className="fromstore">Самовывоз с нашего склада В Москве.</div>
      }


      </div>
    
    <button className="confirm-step-btn" onClick={()=>Cart_Store.setCart_Stage("confirm")}>Далее</button> 

    </div>
  )
});

export default (Order);
