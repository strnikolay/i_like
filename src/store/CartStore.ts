

import { makeAutoObservable } from 'mobx';

import {IcartItem, IcartItemParam, IOrderParams, IUser} from "@/store/interfaces"
import { Store } from './store';
import { mockdata } from '@/api/db';
import axios_Service from '@/app/api/_lib/axios/axios_Service';

class cartStore {
  constructor() {
    makeAutoObservable(this);
  }

  async addToCart (ProductId:string) {
    console.log("666",Store.user.cart)
    const res = await axios_Service.add_to_cart(Store.user.cart!.id, ProductId);

    if(res.status===200&&res.data){
      console.log("cartStore add-to-cart", res.data)
      Store.user.cart?.productParams?.push(res.data)
      /*if(!cart.productParams){
        cart.productParams=[]
      }  
      cart.productParams.push(cartItem)
      const res = await axios_Service.update_cart(cart, Store.user.email);*/
      //Store.setUser(tempUser)
    } else {
      console.log("error у user нет параметра cart")
    }
    //localStorage.setItem("user", JSON.stringify(tempUser))
  }

  removeFromCart (ProductId:string) {
    const tempUser = Store.user
    //tempUser.cart = tempUser.cart!.filter((el) => el.id !== ProductId)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

  /*async saveNewParamsInDb (params:any) {
    const res = await axios_Service.saveNewParamsInDb(params)
  }*/

  async addNewParamsToDb (params:IcartItemParam) {
    //const productParams=Store.user.cart.productParams[itemIndex]
    //console.log("store.addnewparams", params)
    //console.log("до", tempUser.cart.productParams[itemIndex])
    const res = await axios_Service.add_new_params_to_product(params);
    const tempuser = Store.user
    const productIndex = tempuser.cart.productParams.findIndex((el)=>el.id===res.itemId)
    tempuser.cart.productParams[productIndex].itemParams.push(res)
    Store.setUser(tempuser)
    //console.log("111", productIndex)
    //tempuser.cart.productParams.findIndex
    //console.log("response", tempuser.cart.productParams)
    //const params = {size:undefined, color:undefined, count:0}
    //tempUser.cart.productParams[itemIndex].params.push(params)

    //console.log("после", tempUser.cart[itemIndex])
    //Store.setUser(tempUser)
  }


  isParamsUpdate = false;
  setIsParamsUpdate(bool: boolean) {this.isParamsUpdate = bool;}

  updateParamsInDB (itemIndex:number, params:IcartItemParam, paramsIndex:number){
    //console.log(params)
    const tempUser=Store.user
    //tempUser.cart!.productParams[itemIndex].splice(paramsIndex, 1, params)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
    this.setIsParamsUpdate(true)
  }

  deleteParamsInCartItem (paramsId:number) {
    const tempUser=Store.user
    //tempUser.cart![itemIndex].params.splice(paramsIndex, 1)
    //Store.setUser(tempUser)
    //localStorage.setItem("user", JSON.stringify(tempUser))
  }

  summInCart:number = 0;
  setSummInCart(summ: number) {this.summInCart = summ;}

  CalcSummOfProductInCart () {
    let tempSumm:number = 0
    Store.user.cart!.productParams.forEach((product:IcartItem)=>{
      if(product){
        const productCost = mockdata.find((el)=>el.id === product.id)?.price
        let productcount = 0
        product.params.forEach((params:IcartItemParam)=>{
          productcount = productcount + params.count
        })
        tempSumm = tempSumm + (productCost! * productcount)
      }
    })
    //console.log(tempSumm)
    this.setSummInCart(tempSumm)
  }

  cart_Stage:string = "";
  setCart_Stage(stage: string) {this.cart_Stage = stage;}

  orderParams:IOrderParams = {
    id:0,
    status:"",
    contact:{name:"", phone:"", defaultContact:false},
    deliveryType: "delivery",
    adress:{adress:"", defaultAdress:false},
    transport:"",
    productParams:Store.user.cart
  }
  setOrderParams(params:IOrderParams){this.orderParams = params}

  select_Contact () {

  }

  selectedTransport = "pochta";
  setSelectedTransport(type: string) {this.selectedTransport = type;}

  confirmOrder () {
    const tempUser:IUser = Store.user
    //console.log(this.orderParams)
    tempUser.orderHistory.push(this.orderParams)
    //this.setCart_Stage("send_order")
    //tempUser.cart[itemIndex].params.splice(paramsIndex, 1)
    Store.setUser(tempUser)
    localStorage.setItem("user", JSON.stringify(tempUser))
  }

}

export const Cart_Store = new cartStore();