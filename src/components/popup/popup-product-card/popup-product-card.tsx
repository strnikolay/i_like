'use client'
import React, {FC, useEffect, useState} from 'react';
import "./popup-product-card.css";
import { useStore } from "@/store/storeProvidert";
import {brandList, categoryList, mockdata} from "@/api/db"
import {IProduct, sizes} from "@/store/interfaces";
import { observer } from 'mobx-react';
import Tabs from "./Tabs/tabs";
import Tab from "./Tabs/tab";
import { toast } from "react-toastify";
import { Color } from './color';
import Img_tabs from './Tabs/img_tabs';

interface Props {
	//el:IProduct;
}



export const Popup_product_card:FC<Props> = observer(() => {
	const {Store, Product_Store, Cart_Store} = useStore()
	const [isLoading, setIsLoading] = useState(true)
	const [product, setProduct] = useState<IProduct>()
	const [imgsrc, setImgsrc] = useState<string[]>()
	const [isFav, setIsFav] = useState(false)
	const [isInCart, setIsInCart] = useState(false)
	//const [sizes, setSizes] = useState<sizes[]>([])

	useEffect(()=>{
		const product = mockdata.find((el)=> el.id === Product_Store.popupCardId)
		if(product){
			setProduct(product)
			//setSizes(product.sizes)
			setImgsrc(product.img)
			setIsLoading(false);
		}	
		
	},[])

	/*useEffect(()=>{
		console.log("imgsrc", imgsrc)
	},[imgsrc])*/

	useEffect(()=>{
			//console.log(typeof Store.user.fav)
			if(Store.user.fav&&product){
				if(Store.user.fav.includes(product.id)){
				setIsFav(true)
			} else {
				setIsFav(false)
			}}
	},[Store.user.fav, product])

		useEffect(()=>{
			if(Store.user.cart&&product){
			const findItem = Store.user.cart.find((elInCart)=> elInCart.id === product!.id)
			if(findItem){
				setIsInCart(true)
			} else {
				setIsInCart(false)
			}}
		},[Store.user.cart, product])
	



	const addToCartHandler = () =>{
        if(isInCart){
            Cart_Store.removeFromCart(product!.id)
            setIsInCart(false)
			toast.success("Удалено из корзины")
        } else {
            Cart_Store.addToCart(product!.id)
            setIsInCart(true)
			toast.success("Добавлено в корзину")
        }
    }

	const addToFavHandler = () =>{
        if(isFav){
            Store.removeFav(product!.id)
            setIsFav(false)
			toast.success("Удалено из избранного")
        } else {
            Store.addToFav(product!.id)
            setIsFav(true)
			toast.success("Добавлено в избранное")
        }
    }

	if(isLoading)return(
		<div>...Loading</div>
	)
	

	if(product){
	return (
	<div className="popup-product-card-wrapper">
		<div className='popup-background' onClick={() => Store.SetPopup('')}></div>
		<div className="divshadow bounceIn">
			<button onClick={() => Store.SetPopup('')} className="close" />
			<div className='left-item'>
				<div className="image relative">
					{imgsrc?<Img_tabs img={imgsrc} />:null}
					<div className="sticker">Хит</div>
				</div>
			</div>	
			
			<div className='right-item'>
				<div className='title'>
					<div className='title-text'>
						Артикул {product!.id} {categoryList[product.cat]} {brandList[product.brand]} 
					</div>
					<div className="rating">
						<div className='star'></div>
						4.5
					</div>

				</div>

				<Tabs>
				<Tab title="Описание">
					<div className="caption">
						<div className='title'>
							<span className="stock">Производитель: {brandList[product.brand]}</span>
							{/*<span className="stock">В наличии: {product.count} шт.</span>
							<span className="artikul">Артикул {product.id}</span>*/}
						</div>					
						<div className='desc'>{product.desc}</div>
						{/*<Size_and_color el={product.sizes}/>*/}
						<div className='available-title'>размер цвета</div>
						<div className='available-params-wrap'>
							{product.sizes.map((size, i) => (
								<div className='available-params' key={i}>
									<div className='available-size'>{size.size}</div>
									<Color el={size.colors}/> 	
								</div>
      						))}  
						</div>


						<div className="popup-card-footer">
							<div className='price'>
								ЦЕНА: {Store.isAuth?product.price:<div className='lock' title="Цена доступна авторизированым пользователям"/>}
							</div>

						<div className='popup-add-button-wrapper'>
							<input 
								type='button' 
								disabled={!Store.isAuth}
								className={`cart-icon `+(isInCart?"remove-cart":"add-cart")} 
								onClick={addToCartHandler}
								title={Store.isAuth?"":"корзина доступна авторизированым пользователям"}
							/>
							<input 
								type='button' 
								className={`fav-icon `+(isFav?"remove-fav":"add-fav")} 
								onClick={addToFavHandler}
								disabled={!Store.isAuth}
								title={Store.isAuth?"":"избранное доступно авторизированым пользователям"}
							/>						
						</div>	
							
						</div>
					</div>
				</Tab>
				<Tab title="отзывы">
					<div className='review'>Отзывы</div>
				</Tab>
			</Tabs>

			</div>

			
		</div>
	</div>
  )};
});
