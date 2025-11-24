'use client'
import "./cart.css";
import {FC} from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import CartList from "./cart";
import Order from "./order";
import { Confirm } from "./confirm";
//import Product_card  from '@/components/Product_card';



const Cart:FC = observer(() => {
  const {Store, Cart_Store} = useStore();

  /*useEffect(()=>{

  },[])*/
  const cart_status = () => {
        switch (Cart_Store.cart_Stage) {
            case "cart":
                return <CartList/>;
            case "order":
                return <Order/>;
            case "confirm":
                return <Confirm/>;    
            case "loading":
                return <p>Загрузка</p>;    
            case "error":
                return <p>Error loading data. Please try again.</p>;
            default:
                return <CartList/>;
        }
  };

  return (
    <>
      {cart_status()}
    </>
  )
});

export default (Cart);
