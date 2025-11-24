'use client'

import React, {FC, useCallback, useEffect, useState, useRef } from "react";
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import { brandList } from "@/api/db";
import "./price_range.css"
 

interface Props {
    //brand:number;
    //index:number;
}

const Price_range = observer(({ min=0, max=1000 }) => {

  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const [minVal, setMinVal] = useState(100);
  const [maxVal, setMaxVal] = useState(1000);


  // Convert to percentage
  const getPercent = useCallback((value:number) => 
    Math.round(((value - min) / (max - min)) * 100)
  ,[min, max]
  );
   

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(Number(maxValRef.current.value)); // Preceding with '+' converts the value from type string to type number
      //console.log(maxPercent)
      if (range.current) {
        range.current.style.left = minPercent+`%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent, range]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(Number(minValRef.current.value));
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  /*useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);*/

  const handleMinChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
    e.target.value = value.toString();
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
    e.target.value = value.toString();
  }
  return (
    <div className="price-range-wrap">
      <input
        type="range" min={min} max={max} value={minVal} ref={minValRef}
        onChange={e => handleMinChange(e)}
        className={minVal>max - 100?"thumb thumb--zindex-3":"thumb thumb--zindex-5"}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={e => handleMaxChange(e)}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
});


export default (Price_range);