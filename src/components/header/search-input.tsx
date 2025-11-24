'use client';

import $api from '@/app/api/_lib/axios/axios';
//import { cn } from '@/shared/lib/utils';
import "./search.css"
import Link from 'next/link';
import React, { useEffect } from 'react';
import {useDebounce, useClickAway} from './searchFn';
import { IProduct } from '@/store/interfaces';
import { useStore } from '@/store/storeProvidert';
import axios_Service from '@/app/api/_lib/axios/axios_Service';
import { categoryList, mockdata } from '@/api/db';
import { brandList } from '@/api/db copy';
import { AddToFavBTN } from '../buttons/add-to-fav';

interface Props {
  
}

export const SearchInput: React.FC<Props> = () => {
  const {Product_Store} = useStore();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const find = (el:IProduct) =>{
    //console.log(el.id)
    if(el.id===searchQuery.toString()){return true;}
    brandList.forEach((brand)=>{
      if(brand===searchQuery) return true
    })
  }

  useDebounce(
    async () => {
      const el = mockdata.filter((el)=>{
        //console.log(searchQuery)
        if(
          el.id.includes(searchQuery.toString()) ||
          categoryList[el.cat].includes(searchQuery.toLowerCase())||
          brandList[el.brand].includes(searchQuery.toLowerCase())||
          searchQuery.length>2&&el.desc.toLowerCase().includes(searchQuery.toLowerCase())||
          el.sticker.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return el
        }

      })

      //console.log("searchresult",el)
      setProducts(el);
      /*try {
        const response = await axios_Service.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }*/
    },
    500,
    [searchQuery],
  );

  /*useEffect (()=>{
    console.log(products.length)
  },[products])*/

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  return (
    <>
    {focused && <div className="input-black-bg"/>}

    <div ref={ref} className='search'>
      <div className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Поиск товара по каталогу"
        onFocus={() => setFocused(true)}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

        {focused&&products.length > 0 && (
          <div
            className={focused?'search-dropdown dd-visible':'search-dropdown'}
          > 
            <div className='search-dd-title'>
              <div className='search-dd-count'>найдено:{products.length}</div>
              <input className='search-dd-show' type="button" defaultValue="показать результаты" /> 
            </div>
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className="link-wrap px-3 py-2 hover:bg-primary/10"
                href={`/product/${product.id}`}
              >
                <img className="dd-image rounded-sm h-8 w-8" src={product.img[0]} alt={product.id} />
                <span>{product.id} {categoryList[product.cat]} {brandList[product.brand]}</span>
                <span>Цена: {product.price}</span>

                <AddToFavBTN id={product.id}/>
                
                
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
