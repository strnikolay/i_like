'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { brandList, categoryList, ColorName} from '@/api/db';
import {IProduct, IcartItem, IcartItemParam} from "@/store/interfaces";
import { observer } from 'mobx-react';

interface Props {
  item:IProduct;
  itemIndex: number;
}

export const Cart_item_in_history:FC<Props> = observer(({item, itemIndex}) => {
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
    <div className="product-item">
      
      <div className="title">
        <div>
          {item.id} {categoryList[item.cat-1]} {brandList[item.brand]}
        </div>
        <div>Цена за ед: {item.price}</div>
        <div>Выбраное всего:{itemSumm}</div>
        <div>Сумма: {itemCostSumm}</div>
      </div>

      
      {itemParams.length>0?
        itemParams.map((params, index)=>
          <div key={index} className="select-item">
                  <div className="select-size-wrap">
                    размер: {params.size}
                  </div>
          
                  <div 
                    className="select-color-wrap" 
                  >
                    цвет:{params.color?ColorName[params.color]:null}
                  </div>
                  <div 
                    className="select-color-wrap" 
                  >
                    количество:{params.count}
                  </div>
                  <div>
                    Сумма: {item.price*params.count}
                  </div>
          </div>
        ):
        null
      }
    </div>

  )
});

