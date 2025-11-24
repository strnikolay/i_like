'use client'
import {FC, useEffect, useState } from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';


interface Props {
  type:string;
  //itemIndex: number;
}

export const Select_Transport:FC<Props> = observer(({type}) => {
  const {Cart_Store} = useStore();
  const [selectedTransport, setSelectedTranstort] = useState<boolean>(false);
  
 
  useEffect(()=>{
    if(Cart_Store.selectedTransport === type){
      //console.log("22",type, Cart_Store.selectedTransport)
      setSelectedTranstort(true)
    } else {
      setSelectedTranstort(false)
    }
  },[Cart_Store.selectedTransport])

  /*const selectTransportHandler = (type:string) =>{
    //console.log(type)
    Cart_Store.setSelectedTransport(type)
  }*/

  return (
     <label className={`btn `+type}>
          <input
            onChange={()=>Cart_Store.setSelectedTransport(type)}
            checked={selectedTransport}
            name='transport-type'
            type="radio"
            className=""
          />
    </label>

  )
});
