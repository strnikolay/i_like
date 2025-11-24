'use client'
import React, {FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { toast } from "react-toastify";
import { useStore } from "@/store/storeProvidert";

interface Props {
    id: string;
}

export const AddToCartBTN: FC<Props> = observer(({id}) => {
    const {Store, Cart_Store} = useStore()
    const [isInCart, setIsInCart] = useState(false)

    useEffect(()=>{
        if(Store.user.cart?.productParams){
            //console.log("33",Store.user.cart.productParams)
            const findItem = Store.user.cart.productParams.find((params)=> params.productId === id)
            //console.log("4444", findItem)
            if(findItem){
                setIsInCart(true)
            } else {
                setIsInCart(false)
            }
        }
    },[Store.user.cart, id])

    return (       
        <input type='button' 
            className={`cart-icon `+(isInCart?"remove-cart":"add-cart")} 
            onClick={()=>isInCart?Cart_Store.removeFromCart(id):Cart_Store.addToCart(id)}
        /> 
    )
}); 