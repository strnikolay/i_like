
import React, {FC } from 'react';
import Image from 'next/image';
import "./Product_card.css";
import {brandList, categoryList} from "@/api/db"
import {IProduct} from "@/store/interfaces"
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import { toast } from "react-toastify";
import { AddToFavBTN } from '../buttons/add-to-fav';
import { AddToCartBTN } from '../buttons/add-to-cart';



interface Props {
    el:IProduct;
    index: number;
}



const Product_card:FC<Props> = observer(({el, index}) => {
    const {Store, Product_Store} = useStore()

    //console.log(el)

    const brand = brandList[el.brand]




    const popupHandler = () =>{
        Product_Store.setPopupCardId(el.id)
        Store.SetPopup("product-big-cart")

    }

    return (
    <div key={index} className="product-card-wrap">
        <div className='title'>
            id {el.id} {brand} {categoryList[el.cat]}
        </div>
        <div className="image">
            <div className="images-add">
                <Image src={el.img[0]} fill sizes="10vw" alt="" className="img-responsive"/>
            </div>
            <div className="sticker">Хит</div>
            {/*<div className="add-to-cart"></div>*/}
            <AddToCartBTN id={el.id} />
            <AddToFavBTN id={el.id} />
            <div className="rating">
                <div className='star'></div>
                4.5
            </div>
        </div>

        <div className="caption">
            <div className="price_block">
                В наличии: 697 шт.
            </div>
            
            <div className='desc'>{el.desc}</div>
            
            <div className="card-footer">
                    <div className='price'>
                        ЦЕНА: {Store.isAuth?el.price:<div className='lock' title="Цена достувна авторизированым пользователям"/>}
                    </div>
                    <input type='button' onClick={popupHandler} className="more_btn" value="Подробнее" />                    
            </div>
        </div>
    </div>
    );
});

export default (Product_card)
 