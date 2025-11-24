'use client'
import React from 'react';
import "./color.css"
import { ColorName } from '@/api/db';
//import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';
//import {IProduct, sizes} from "@/store/interfaces";

interface Props {
	el:number[];
}

export const Color: React.FC<Props> = observer(({el}) => {
  //const [sizes, setSizes] = useState<boolean>(true)

  //console.log(el)

  return (
	<div className="available-color-wrapper">
      {el.map((color, i) => (
        <div className="available-color-item" key={i}>
          <div className={`available-color-icon color`+color}></div>
          {ColorName[color]}
        </div>
      ))}           
  </div>
  );
});
