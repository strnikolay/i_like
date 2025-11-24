export interface IContact {
    name:string|null;
    phone:string;
    defaultContact?:boolean;
}

export interface IAdress {
    adress:string;
    defaultAdress:boolean;
}

export interface IUser {
    id: number;
    email: string;
    pass: string;
    company: string;
    inn:number;
    contact:IContact[];
    adress:IAdress[];
    orderHistory?:IOrderParams[];
    fav:string[];
    cart:IOrderParams;
}

export interface IOrderParams {
    id:number;
    status:string;
    contact:number;
    deliveryType: string;
    adress:number;
    transport?:string;
    productParams?: IcartItem[]
}

export type Tcolor = number[];
export type Tsize = number

export interface sizes {
    size: number,
    colors: number[]
}

export interface IProduct {
    id: string;
    cat: number;
    brand: number;
    desc: string;
    img: string[];
    sticker: string;
    price: number;
    count: number;
    sizes: sizes[]
}

export interface IcartItem {
    id: number,
    orderId:number,
    productId:string,
    params?: IcartItemParam[]  
}

export interface IcartItemParam {
   id:number;
   itemId:number; 
   size: number;
   color: number;
   count: number;
}

