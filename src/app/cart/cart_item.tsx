'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { brandList, categoryList} from '@/api/db';
import {IProduct, IcartItem, IcartItemParam} from "@/store/interfaces";
import { observer } from 'mobx-react';
import ParamsInProduct from "./ParamsInProduct";

interface Props {
  item:IProduct;
  itemIndex: number;
}

const Cart_item:FC<Props> = observer(({item, itemIndex}) => {
  const {Store, Cart_Store} = useStore();
  const [itemParams, setItemParams] = useState<IcartItemParam[]>([]);
  const [itemCostSumm, setItemCostSumm] = useState<number>(0);
  const [isCountUpdate, setIsCountUpdate] = useState<boolean>(false);
  const [itemSumm, setItemSumm] = useState<number>(0);
 
  useEffect(()=>{
    const tempParams:IcartItem|undefined = Store.user.cart.find((elInCart:IcartItem)=>item.id===elInCart.id)

    if(tempParams){
      //console.log("params", tempParams.params[0].count)
      setItemParams(tempParams.params)
    }
    Cart_Store.setIsParamsUpdate(false)
    //console.log("bpvtytybt", isCountUpdate)
    setIsCountUpdate(true)
  },[Cart_Store.isParamsUpdate])

  useEffect(()=>{
    let tempCostSumm:number = 0
    let tempSumm:number = 0
    Store.user.cart[itemIndex].params.forEach((param:IcartItemParam)=>{
      if(param.count>0){
        tempCostSumm = tempCostSumm + (item.price * param.count)
        tempSumm = tempSumm + param.count
      }
    })
    
    setItemCostSumm(tempCostSumm)
    setItemSumm(tempSumm)
    setIsCountUpdate(false)
  },[isCountUpdate])

  return (
    <details className="cart-item">
      <summary>
        <div>
          {item.id} {categoryList[item.cat-1]} {brandList[item.brand]}
        </div>
        <div>Цена за ед: {item.price}</div>
        <div>Выбраное всего:{itemSumm}</div>
        <div>Сумма: {itemCostSumm}</div>
      </summary>
      {itemParams.length>0?
        itemParams.map((params, index)=>
          <ParamsInProduct key={index} item={item} params={params} itemIndex={itemIndex} paramsIndex={index} />
        ):
        null
      }
              
      <button 
        className="add-btn" 
        onClick={()=>Cart_Store.addNewParamsToProductInCart(itemIndex)}
      >
        Добавить +
      </button>
    </details>

  )
});

export default (Cart_item);