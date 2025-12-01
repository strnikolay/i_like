
import { makeAutoObservable } from 'mobx';
import { userMock } from '@/api/user_db';
import {IUser} from "@/store/interfaces";
import axios_Service from '@/app/api/_lib/axios/axios_Service';
import { toast } from 'react-toastify'; 
import axios from 'axios';

class store {
  constructor() {
    makeAutoObservable(this);
  }

  user = {} as IUser;    
  setUser(newuser: IUser) {
    //console.log("setUser", newuser)
    this.user = newuser;
  }

  isLoginOpen = true; 
  setIsLoginOpen(bool: boolean) {this.isLoginOpen = bool}

  isAuth = false;
  setAuth(bool: boolean) {this.isAuth = bool;}

  async getUser (){
    //console.log("get user")
    const userEmail = localStorage.getItem('userEmail')
    if(userEmail){
      await axios_Service.get_user(userEmail)
        .then((res)=>{
          //console.log("34", res)
          const tempUser:IUser = res.data.user
          if(res.data.cart){

            //console.log("getuser", res.data.productParams)
            tempUser.cart=res.data.cart
            tempUser.cart.productParams=res.data.productParams

            //console.log("getuser", tempUser)
            this.setUser(tempUser);
            this.setAuth(true);
          }
      })
    }
  }

  async login(email:string, pass:string) {
        try {
            const res = await axios_Service.login(email, pass);
            if(res){
              this.setUser(res)
              this.setAuth(true);
              this.SetPopup("")
              localStorage.setItem('userEmail', res.email);
            }           
            //localStorage.setItem('user', response.data.accessToken);
            /*localStorage.setItem('refreshtoken', response.data.refreshToken);
            localStorage.setItem('clientId', response.data.user.id);
            this.setUser(response.data.user);*/
        } catch {
            /*console.log(e.response?.data?.message);*/
        }
  }

  async logout() {
        try {
            localStorage.removeItem('userEmail');
            this.setAuth(false);
        } catch  {
            /*console.log(e.response?.data?.message);*/
        }
  }

  async reg(email: string, pass: string) {
        try {
            const user = await axios_Service.registration(email, pass);
            if(user){
              user.fav = []
              //console.log(user)
              this.setUser(user);
              this.setAuth(true);
              this.SetPopup("")
              localStorage.setItem('userEmail', user.email);
            }  
        } catch {
            /*console.log(e.response?.data?.message);*/
        }
  }

  popup = "";
  SetPopup(name:string){this.popup = name} 

  async addToFav (ProductId:string) {
    const tempUser = this.user
    tempUser.fav.push(ProductId)
    const res = await axios_Service.update_fav(tempUser.fav, tempUser.email);
    if(res&&res.data){
      console.log("store добавление в избранное",res)
      this.setUser(res.data)
      toast.success("Добавлено в избранное")
    }
    //this.updateUser(tempUser)
    //localStorage.setItem("user", JSON.stringify(tempUser))
  }
  
  async removeFav (ProductId:string) {
    const tempUser = this.user
    tempUser.fav = tempUser.fav.filter((el) => el !== ProductId)
    const res = await axios_Service.update_fav(tempUser.fav, tempUser.email);
    if(res&&res.data){
      console.log("store удаление из избранного",res)
      this.setUser(res.data)
      toast.success("Удалено из избранного")
    }
    //this.updateUser(tempUser)
  }

  updateNameInContact (name:string, index:number) {
    const tempUser = this.user
    tempUser!.contact![index].name = name
    this.updateUser(tempUser)
  }

  updatePhoneInContact (phone:string, index:number) {
    const tempUser:IUser = this.user
    tempUser!.contact![index].phone = phone
    this.updateUser(tempUser)
  }

  updateDefaultInContact (ContactIndex:number) {
    const tempUser:IUser = this.user
    console.log(ContactIndex)
    tempUser.contact!.forEach((contact, index)=>{
      //console.log(ContactIndex, index)
      if(ContactIndex===index){
        tempUser.contact![index].defaultContact = true;
      } else {
        tempUser.contact![index].defaultContact = false;
      }
    })
    //console.log(tempUser.contact)
    this.updateUser(tempUser)
  }

  updateAdress (adress:string, index:number) {
    const tempUser:IUser = this.user
    tempUser.adress![index].adress = adress
    this.updateUser(tempUser)
  }

  updateUser (propsUser:IUser) {
    this.setUser(propsUser)
    //localStorage.setItem("user", JSON.stringify(propsUser))
  }

  toastType = "";
  SetToastType(type:string){this.toastType = type}
  
  toastMsg = "";
  SetToastMsg(msg:string){this.toastMsg = msg}

  isToastShow = false;
  SetIsToastShow(show:boolean){this.isToastShow = show}

  ShowToastMsg (type:string, msg:string ) {
    this.SetToastType(type)
    this.SetToastMsg(msg)
    this.SetIsToastShow(true)
  }
}

export const Store = new store();