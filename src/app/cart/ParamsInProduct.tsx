'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { ColorName} from '@/api/db';
import { observer } from 'mobx-react';
import {IProduct, IcartItemParam} from "@/store/interfaces"


interface Props {
  item:IProduct;
  params: IcartItemParam;
  itemIndex:number;
  paramsIndex:number;
}

const ParamsInProduct:FC<Props> = observer(({item, params, itemIndex, paramsIndex}) => {
  const {Cart_Store} = useStore();

  const [sizeList, setSizeList] = useState<number[]>([]);
  const [selectedSize, setSelectedSize] = useState<number|undefined>(params.size);
  const [colorList, setColorList] = useState<number[]>([]);
  const [selectedColor, setSelectedColor] = useState<number|undefined>(params.color);
  const [Count, setCount] = useState<number>(params.count);

 
  useEffect(()=>{
    //console.log(selectedSize)
    const tempArr:number[] = []
    item.sizes?.forEach((size) => {
      tempArr.push(size.size)
    })
    setSizeList(tempArr)
  },[item.sizes])

  const selectSizeHandler = (
    e:React.ChangeEvent<HTMLSelectElement>
  ) =>{
    //console.log(e.target.value)
    setSelectedSize(Number(e.target.value))
  }

  const selectColorHandler = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedColor(Number(e.target.value))
    if(Count===0){
      setCount(1)
    }
  }

  useEffect(()=>{
    //if(typeof selectedSize === "number") setIsSizeSelected(false)
    if(item.sizes){
      const tempClolorList = item.sizes.find((el)=> el.size === selectedSize)
      if(tempClolorList)setColorList(tempClolorList.colors)  
    }
  },[selectedSize, item.sizes])

  useEffect(()=>{
    const tempParams = {size:selectedSize, color:selectedColor,count:Count}
    if(selectedSize!==undefined&&selectedColor!==undefined){
      Cart_Store.updateParamsInDB(itemIndex, tempParams, paramsIndex)
    }
  },[selectedSize, selectedColor, Count])


  return (
      <div className="select-item">
        <div className="select-size-wrap">
          размер:
          <select onChange={selectSizeHandler}>
            <option value="">
              {selectedSize===0?"---":selectedSize}
            </option>
            {sizeList.map((size:number,i:number)=>(
               <option key={i} value={size}>{size}</option>           
            ))}
          </select>
        </div>

        <div 
          className="select-color-wrap" 
          data-active={selectedSize === undefined?"disabled":"active"}
        >
          цвет:
          <select 
            className="select-color" 
            onChange={selectColorHandler} 
            disabled={selectedSize===undefined}
          >
            <option value="">
              {selectedColor===undefined?"---":ColorName[selectedColor]}
            </option>
            {colorList.map((color:number,i:number)=>( 
              <option key={i} className="option" value={color}>
                {ColorName[color]}
              </option>          
            )) }
          </select>
        </div>


        <div className="count-wrap" data-active={selectedColor===undefined?"disabled":"active"}>
          количество:
          <label className="decrement" > 
            <input type="button" onClick={()=>setCount(Count-1)} disabled={selectedColor===undefined||Count<=1}/>
            -
          </label>

          <label className="count-label">
            <input readOnly value={Count} type="number" min={1} max={item.count}
            //onChange={(e:any) => inputCountHandler(e:any)}  
            disabled={selectedColor===undefined} />
          </label>

          <label className="increment"> 
            <input type="button" onClick={()=>setCount(Count+1)} disabled={selectedColor===undefined||Count>=item.count}/>
            +
          </label> 
        </div>
        <div>
          Сумма: {item.price*Count}
        </div>


        <button 
          className="item-delete" 
          onClick={() => Cart_Store.deleteParamsInCartItem(itemIndex, paramsIndex)}
        >
          X
        </button>

      </div>         
  )
});

export default (ParamsInProduct);
