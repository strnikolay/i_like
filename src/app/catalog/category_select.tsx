'use client'
import React, {useEffect} from 'react';
import { categoryList } from '@/api/db';
import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';

export const Category_select: React.FC = observer(() => {
  const {Product_Store} = useStore()

  useEffect(()=>{
    Product_Store.FiltredByCategory(Product_Store.selectedCategory)
  },[Product_Store.selectedCategory])

  return (
	<div className="category-select-wrapper">
    <label htmlFor="all">
    <input type="radio" id="all" name="category" onChange={()=> {Product_Store.setSelectedCategory(undefined)}}/>
    Все
    </label>
      {categoryList.map((category, i) => (
        <label className='lab' htmlFor={category} key={i}>
          <input id={category} type="radio" name="category" onChange={()=> {Product_Store.setSelectedCategory(i)}}/>
          {category}       
        </label>
      ))}           
  </div>
  );
});
