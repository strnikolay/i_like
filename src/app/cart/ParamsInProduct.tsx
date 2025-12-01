'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { ColorName} from '@/api/db';
import { observer } from 'mobx-react';
import { IProductInCart, IcartItemParam} from "@/store/interfaces"


interface Props {
  item:IProductInCart;
  params: IcartItemParam;
  itemIndex:number;
  paramsIndex:number;
  setParamsDone:()=>void
}

const ParamsInProduct:FC<Props> = observer(({item, params}) => {
  const {Cart_Store} = useStore();

  const [sizeList, setSizeList] = useState<number[]>([]);
  const [selectedSize, setSelectedSize] = useState<number>(params.size);
  const [colorList, setColorList] = useState<number[]>([]);
  const [selectedColor, setSelectedColor] = useState<number>(params.color);
  const [Count, setCount] = useState<number>(params.count);


  useEffect(()=>{
    //console.log("обновление params", params)
    setSelectedSize(params.size)
    setSelectedColor(params.color)
    setCount(params.count)
  },[params])
 
  useEffect(()=>{
    //console.log("params", params)
    //console.log("item", item)
    const tempArr:number[] = []
    item.product.sizes.forEach((size) => {
      tempArr.push(size.size)
    })
    setSizeList(tempArr)
  },[item.product.sizes])

  const selectSizeHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedSize(Number(e.target.value))
    if(selectedColor>0&&Count>0){
      const tempParams = {id:params.id, itemId:params.itemId, size:Number(e.target.value), color:selectedColor, count:Count};
      
      Cart_Store.updateParamsInDB(tempParams)
    }
  }

  const selectColorHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedColor(Number(e.target.value))
    if(Count===0){
      setCount(1);
      const tempParams = {id:0, itemId:params.itemId, size:selectedSize, color:selectedColor, count:1};
      Cart_Store.addNewParamsToDb(tempParams);
    } 

    if(Count>0){
      const tempParams = {id:params.id, itemId:params.itemId, size:selectedSize, color:Number(e.target.value), count:Count};
      Cart_Store.updateParamsInDB(tempParams)
    }
  }

  useEffect(()=>{
    if(item.product.sizes){
      const tempColorList = item.product.sizes.find((el)=> el.size === selectedSize)
      if(tempColorList)setColorList(tempColorList.colors)  
    }
  },[selectedSize, item.product.sizes])

  const countIncrement = () =>{
    const tempParams = {id:params.id, itemId:params.itemId, size:selectedSize, color:selectedColor, count:Count+1};
    Cart_Store.updateParamsInDB(tempParams)
    setCount(Count+1);
  }

  const countDecrement = () =>{
    const tempParams = {id:params.id, itemId:params.itemId, size:selectedSize, color:selectedColor, count:Count-1};
    Cart_Store.updateParamsInDB(tempParams)
    setCount(Count-1);
  }


  return (
      <div className="select-item">
        <div>{params.id}</div>
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
            <input type="button" onClick={countDecrement} disabled={selectedColor<0||Count<=1}/>
            -
          </label>

          <label className="count-label">
            <input readOnly value={Count} type="number" min={1} max={item.product.count}
            //onChange={(e:any) => inputCountHandler(e:any)}  
            disabled={selectedColor<0} />
          </label>

          <label className="increment"> 
            <input type="button" onClick={countIncrement} disabled={selectedColor<0||Count>=item.product.count}/>
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
