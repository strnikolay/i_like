'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { ColorName} from '@/api/db';
import { observer } from 'mobx-react';
import {IProduct, IProductInCart, IcartItemParam} from "@/store/interfaces"


interface Props {
  item:IProductInCart;
  params: IcartItemParam;
  itemIndex:number;
  paramsIndex:number;
  setParamsDone:()=>void
}

const ParamsInProduct:FC<Props> = observer(({item, params, setParamsDone}) => {
  const {Cart_Store} = useStore();

  const [sizeList, setSizeList] = useState<number[]>([]);
  const [selectedSize, setSelectedSize] = useState<number>(params.size);
  const [colorList, setColorList] = useState<number[]>([]);
  const [selectedColor, setSelectedColor] = useState<number>(params.color);
  const [Count, setCount] = useState<number>(params.count);

 
  useEffect(()=>{
    //console.log("params", params)
    //console.log("item", item)
    const tempArr:number[] = []
    item.product.sizes.forEach((size) => {
      tempArr.push(size.size)
    })
    setSizeList(tempArr)
  },[item.product.sizes])

  const selectSizeHandler = (
    e:React.ChangeEvent<HTMLSelectElement>
  ) =>{
    //console.log(e.target.value)
    /*if(params.id&&selectedColor<0&&Count!==0){
      const newParams = {itemId:params.id, size:selectedSize, color:selectedColor,count:Count}
      //console.log("j,yjdbnm lfyyst")
    }*/
    setSelectedSize(Number(e.target.value))
  }

  const selectColorHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedColor(Number(e.target.value))
  }

  /*useEffect(()=>{
    if(selectedColor!==-1){
      const newParams = {id:params.id, itemId:params.id, size:selectedSize, color:selectedColor,count:Count}
      Cart_Store.addNewParamsToDb(newParams)
    }
  },[selectedColor])*/

  useEffect(()=>{
    //if(typeof selectedSize === "number") setIsSizeSelected(false)
    if(item.product.sizes){
      const tempClolorList = item.product.sizes.find((el)=> el.size === selectedSize)
      if(tempClolorList)setColorList(tempClolorList.colors)  
    }
  },[selectedSize, item.product.sizes])

  useEffect(()=>{
    
    if(selectedSize>0&&selectedColor>0&&Count===0){
      //console.log("")
      setCount(1);
      const tempParams = {id:0, itemId:params.itemId, size:selectedSize, color:selectedColor, count:1};
      Cart_Store.addNewParamsToDb(tempParams);
    }

  },[selectedSize, selectedColor, Count])


  return (
      <div className="select-item">
        <div className="select-size-wrap">
          размер:
          <select onChange={selectSizeHandler}>
            <option value="">
              {selectedSize<0?"---":selectedSize}
            </option>
            {sizeList.map((size:number,i:number)=>(
               <option key={i} value={size}>{size}</option>           
            ))}
          </select>
        </div>

        <div 
          className="select-color-wrap" 
          data-active={selectedSize < 0?"disabled":"active"}
        >
          цвет:
          <select 
            className="select-color" 
            onChange={selectColorHandler} 
            disabled={selectedSize<0}
          >
            <option value="">
              {selectedColor<0?"---":ColorName[selectedColor]}
            </option>
            {colorList.map((color:number,i:number)=>( 
              <option key={i} className="option" value={color}>
                {ColorName[color]}
              </option>          
            )) }
          </select>
        </div>


        <div className="count-wrap" data-active={selectedColor<0?"disabled":"active"}>
          количество:
          <label className="decrement" > 
            <input type="button" onClick={()=>setCount(Count-1)} disabled={selectedColor<0||Count<=1}/>
            -
          </label>

          <label className="count-label">
            <input readOnly value={Count} type="number" min={1} max={item.product.count}
            //onChange={(e:any) => inputCountHandler(e:any)}  
            disabled={selectedColor<0} />
          </label>

          <label className="increment"> 
            <input type="button" onClick={()=>setCount(Count+1)} disabled={selectedColor<0||Count>=item.product.count}/>
            +
          </label> 
        </div>
        <div>
          Сумма: {item.product.price*Count}
        </div>


        <button 
          className="item-delete" 
          onClick={() => Cart_Store.deleteParamsInCartItem(params.id)}
        >
          X
        </button>

      </div>         
  )
});

export default (ParamsInProduct);
