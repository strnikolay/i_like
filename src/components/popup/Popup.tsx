'use client'

import React, {useEffect} from 'react';
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import { LoginForm } from './login_form/Login_form';
import { Popup_product_card } from './popup-product-card/popup-product-card';



export const Popup = observer (() => {
	const {Store} = useStore()

	useEffect (()=>{
		Store.getUser()
	})

	return (
		<>
			{Store.popup==="Login"&&<LoginForm/>}
			{Store.popup==="product-big-cart"&&<Popup_product_card/>}
		</>
  	);
});
