
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { mockdata} from '@/api/db';
import {IProduct} from "@/store/interfaces"
import { brandList } from '@/api/db';
//import { userMock } from '@/api/user_db';

class productstore {
  constructor() {
    makeAutoObservable(this);
  }

  popupCardId:string = "" 
  setPopupCardId(id:string){
    this.popupCardId = id
  }


  selectedCategory: number|undefined = undefined
  setSelectedCategory(cat:number|undefined){this.selectedCategory = cat}

  ProductFiltredByCategory:IProduct[] = mockdata 
  SetProductFiltredByCategory(data:Array<IProduct>){
    this.ProductFiltredByCategory = data
  }
  FiltredByCategory (param:number|undefined) {
    if(param !== undefined){
      this.SetProductFiltredByCategory(mockdata.filter((el)=>el.cat === param))   
    } else {
      this.SetProductFiltredByCategory(mockdata)
    }
    //this.setSelectedCategory(param) 
  }

  SelectedBrand:number[] = []
  setSelectedBrand(arr: number[]){ this.SelectedBrand = arr}

  brandSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    brand:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [brand, ...this.SelectedBrand]
            this.setSelectedBrand(arr)
        } else if(!e.target.checked){
            this.setSelectedBrand(this.SelectedBrand.filter((a)=> a !== brand));
        }
  }

  ProductFiltredByBrand:IProduct[] = this.ProductFiltredByCategory 
  SetProductFiltredByBrand(data:IProduct[]){
    this.ProductFiltredByBrand = data
  }

  FiltredByBrand (param:number[]) {
    //console.log(param)
    if(param.length>0){
      const templist:IProduct[] = [] 
      this.ProductFiltredByCategory.forEach((el)=> {
        param.forEach((par)=> {
          if(el.brand === par){
            templist.push(el)
          }
        })
      })
      //console.log(templist)
      this.SetProductFiltredByBrand(templist)
    } else {
      this.SetProductFiltredByBrand(this.ProductFiltredByCategory)
    }
  }

  


  get sizesList () {
    //console.log(22)
    const tempSizesArr:number[] = []
    //console.log(this.ProductFiltredByBrand)
    this.ProductFiltredByBrand.forEach((el)=>{
      el.sizes?.forEach((sizes)=>{
        //console.log(size)
        tempSizesArr.push(sizes.size)
      })
    })
    const clearSize = [...new Set(tempSizesArr)]

    return clearSize.sort()
  }

  SelectedSizes:number[] = []
  setSelectedSizes(arr: Array<number>){ this.SelectedSizes = arr}

  sizeSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    el:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [el, ...this.SelectedSizes]
            this.setSelectedSizes(arr)
        } else if(!e.target.checked){
            this.setSelectedSizes(this.SelectedSizes.filter((a)=> a !== el));
        }
  }

  productFiltredBySizes:IProduct[] = this.ProductFiltredByBrand 
  SetProductFiltredBySizes(data:IProduct[]){
    this.productFiltredBySizes = data
  }

  FiltredBySizes (param:number[]) {
    if(param.length>0){
      const templist:string[] = [] 
      this.ProductFiltredByBrand.forEach((el)=> {
        param.forEach((par)=> {
          el.sizes.forEach((sizes)=>{
            if(sizes.size === par){
              templist.push(el.id)
            }
          })
          
        })
      })
      const clearList = [...new Set(templist)]
      const clearDoubleArr:IProduct[] = []
      clearList.forEach((tempEl) =>{
        const El = mockdata.find((el:IProduct)=>el.id===tempEl)
        if(El)clearDoubleArr.push(El)      
      })

      this.SetProductFiltredBySizes(clearDoubleArr)
    } else {
      this.SetProductFiltredBySizes(this.ProductFiltredByBrand)
    }
  }







  get colorsList () {
    //console.log(this.productFiltredBySizes)
    const tempColorsArr:number[] = []
    this.productFiltredBySizes.forEach((el)=>{
      //console.log(el.sizes)
      el.sizes?.forEach((sizes)=>{
        //console.log(this.SelectedSizes)
        if(this.SelectedSizes.length>0){
          this.SelectedSizes.forEach((size)=>{
            if(sizes.size===size){
              sizes.colors.forEach((color)=>{
                tempColorsArr.push(color)
              })
            }
          })
        } else {
          sizes.colors.forEach((color)=>{
            tempColorsArr.push(color)
          })
        }       
      })
    })

    const clearColor = [...new Set(tempColorsArr)] 
    //console.log(clearColor)
    //console.log(clearColor.sort())
    return clearColor.sort()
  }

  SelectedColors:number[] = []
  setSelectedColors(arr: Array<number>){ this.SelectedColors = arr}

  colorsSelectHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    el:number
  ) => {
        let arr = []
        if(e.target.checked){
            arr = [el, ...this.SelectedColors]
            this.setSelectedColors(arr)
        } else if(!e.target.checked){
            this.setSelectedColors(this.SelectedColors.filter((a)=> a !== el));
        }
  }

  productFiltredByColors:IProduct[] = this.productFiltredBySizes 
  SetProductFiltredByColors(data:IProduct[]){
    this.productFiltredByColors = data
  }


  FiltredByColors (param:number[]) {
    if(param.length>0){
      const templist:string[] = [] 
      this.productFiltredBySizes.forEach((el)=> {
        el.sizes.forEach((size)=>{
          if(this.SelectedSizes.length>0&&this.SelectedSizes.includes(size.size)){
            size.colors.forEach((color)=>{
              param.forEach((par)=> {
                if(color === par){
                  templist.push(el.id)               
                }
              })
            })

          } else {
            size.colors.forEach((color)=>{
              param.forEach((par)=> {
                if(color === par){
                  templist.push(el.id)               
                }
              })
            }) 
          }

            
        })
          
      })
      
      //console.log(templist)
      const clearList = [...new Set(templist)]
      //console.log(clearList)
      const clearDoubleArr:IProduct[] = []
      clearList.forEach((tempEl) =>{
        const El = mockdata.find((el:IProduct)=>el.id===tempEl)
        if(El)clearDoubleArr.push(El)      
      })
      this.SetProductFiltredByColors(clearDoubleArr)
    } else {
      this.SetProductFiltredByColors(this.productFiltredBySizes)
    }
  }

}

export const Product_Store = new productstore();