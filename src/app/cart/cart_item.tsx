'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { brandList, categoryList} from '@/api/db';
import {IProduct, IProductInCart, IcartItem, IcartItemParam} from "@/store/interfaces";
import { observer } from 'mobx-react';
import ParamsInProduct from "./ParamsInProduct";

interface Props {
  item:IProductInCart;
  itemIndex: number;
}

/**ItemParams Пустой */
const Cart_item:FC<Props> = observer(({item, itemIndex}) => {
  const {Store, Cart_Store} = useStore();


  const [itemParams, setItemParams] = useState<IcartItemParam[]>(item.itemParams);
  const [itemCostSumm, setItemCostSumm] = useState<number>(0);
  const [isCountUpdate, setIsCountUpdate] = useState<boolean>(false);
  const [itemSumm, setItemSumm] = useState<number>(0);
  const [paramsDone, setParamsDone] = useState<boolean>(false);
 
  useEffect(()=>{
    //console.log("обновление item", item)
    setItemParams(item.itemParams)
    if(item.itemParams.length>0&&item.itemParams[item.itemParams.length-1].count>0){
      setParamsDone(true)
    } else if(itemParams.length===0){
      //console.log("paramsDone")
      setParamsDone(true)
    }
    //console.log("zzz", item.itemParams[item.itemParams.length-1])
    //console.log("ccc", item.itemParams.length)
  
  },[item])

  useEffect(()=>{
    let tempCostSumm:number = 0
    let tempSumm:number = 0
    item.itemParams.forEach((param:IcartItemParam)=>{
      if(param.count>0){
        tempCostSumm = tempCostSumm + (item.product.price * param.count)
        tempSumm = tempSumm + param.count
      }
    })
    
    setItemCostSumm(tempCostSumm)
    setItemSumm(tempSumm)
    setIsCountUpdate(false)
  },[isCountUpdate])

  /*useEffect(()=>{

    const done = (arr:IcartItemParam[])=>{

      arr.forEach((el)=>{
        if(el.count>0){
          return true
        } else {
          return false
        }

      })
      
    }

    if(itemParams.length===0){
        //console.log("paramsDone")
        setParamsDone(true)
    }
    /*if(itemParams.length>0&&isParamsDone){
      setParamsDone(true)
    }*/
    //console.log("itemparams",itemParams)
    //console.log("item",item)
  //},[itemParams])*/

  /*useEffect(()=>{
    //console.log("Store.user.cart",Store.user.cart)
    console.log("item",itemParams)
  },[itemParams])*/

  //Cart_Store.addNewParamsToProductInCart(itemIndex)
  const addParamsHandler = () =>{ 
    const newParams:IcartItemParam[] = [{
      id:0,
      itemId: item.id, 
      size: -1,
      color: -1,
      count: 0,
    }]
    const tempItemParams:IcartItemParam[] = itemParams!.concat(newParams)
    setParamsDone(false)
    setItemParams(tempItemParams)
  }

  return (
    <details className="cart-item">
      <summary>
        <div>
          {item.product.id} {categoryList[item.product.cat-1]} {brandList[item.product.brand]}
        </div>
        <div>Цена за ед: {item.product.price}</div>
        <div>Выбраное всего:{itemSumm}</div>
        <div>Сумма: {itemCostSumm}</div>
      </summary>
      {itemParams.length>0?
        itemParams.map((params, index)=>
          <ParamsInProduct key={index} item={item} params={params} itemIndex={itemIndex} paramsIndex={index} setParamsDone={()=>setParamsDone(true)}/>
        ):
        null
      }
              
      {paramsDone?<button 
        className="add-btn" 
        onClick={addParamsHandler}
      >
        Добавить +
      </button>:null}
    </details>

  )
});

export default (Cart_item);