'use client'

import {FC, useEffect} from "react";
import { useStore } from "@/store/storeProvidert";
import {IProduct} from "@/store/interfaces"
import Product_card  from '@/components/product/Product_card';
import { Category_select } from "@/app/catalog/category_select";
import { observer } from 'mobx-react';
import './catalog.css'
import Filter from "./filter_element/filter";

const Catalog:FC = observer(() => {
  const {Product_Store} = useStore() 
  /*const [productList, SetProductList] = useState<IProduct[]>(mockdata)
  const [sizes, setSizes] = useState<Array<number>>([])
  const [colors, setColors] = useState<Array<number>>([])*/

  /*useEffect(()=>{
    setproductList(Product_Store.productList)
  },[Product_Store.productList])*/

  /*useEffect (()=>{

    //const arr:IProduct[] = 
    
    //Product_Store.FiltredByCategory(Product_Store.selectedCategory);
    
    //const sizesArr:Array<number> = [];
    //const colorsArray: Array<number> = []
    //const brandArr:Array<string> = [];

    //Product_Store.FiltredByCategory(Product_Store.selectedCategory)


    Store.ProductFiltredByCatagory.forEach((el:IProduct)=> {
      brandArr.push(brandList[el.brand])

      if(Store.SelectedBrand.length > 0) {
        Store.SelectedBrand.forEach((brand:string)=>{
          if(brand===brandList[el.brand]){
            arr.push(el)
            el.sizes?.forEach((size)=> {
              if(typeof size[0] ===  "number"){
                sizesArr.push(size[0])
              }
              if(typeof size[1] ===  "object"){
                size[1].forEach(color => {
                  colorsArray.push(color)
                })    
              };
            }) 
          }
        })
      } else {
        arr.push(el)
        el.sizes?.forEach((size)=> {
          if(typeof size[0] ===  "number"){
            sizesArr.push(size[0])
          }
          if(typeof size[1] ===  "object"){
            size[1].forEach(color => {
              colorsArray.push(color)
            })    
          };
        }) 
      }


    })

    //console.log(sizesArr)

    const clearBrand = [...new Set(brandArr)] 
    setBrands(clearBrand)

    const clearSizes = [...new Set(sizesArr)] 
    setSizes(clearSizes.sort())

    const clearColors = [...new Set(colorsArray)] 
    setColors(clearColors.sort())

    //SetProductList(arr)
  },[Product_Store.selectedCategory])*/


  useEffect(()=>{
    Product_Store.FiltredByCategory(Product_Store.selectedCategory)
    Product_Store.setSelectedBrand([])
  },[Product_Store.selectedCategory])

  useEffect(()=>{
    Product_Store.FiltredByBrand(Product_Store.SelectedBrand)
  },[Product_Store.ProductFiltredByCategory, Product_Store.SelectedBrand])

  useEffect(()=>{
    Product_Store.FiltredBySizes(Product_Store.SelectedSizes)
  },[Product_Store.ProductFiltredByBrand, Product_Store.SelectedSizes])

  useEffect(()=>{
    //console.log(Product_Store.SelectedColors)
    Product_Store.FiltredByColors(Product_Store.SelectedColors)
  },[Product_Store.productFiltredBySizes, Product_Store.SelectedColors])

  return (
    <div className="catalog-wrap">
      <Category_select/>
      <div className="catalog-content-wrap">
        <Filter/>
        <div className="catalog-product-wrap">
          {/*Product_Store.productFiltredBySizes.map((el:IProduct,index:number)=>
            <Product_card key={index} el={el} index={index}/>
          )*/}
          {Product_Store.productFiltredByColors.map((el:IProduct,index:number)=>
            <Product_card key={index} el={el} index={index}/>
          )}
        </div>

      </div>
    

    </div>
  )
})

export default (Catalog);