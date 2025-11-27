'use client'
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from "@/store/storeProvidert";
import Link from 'next/link';
import Image from 'next/image';

export const Cart_Btn: React.FC = observer(() => {
    const {Store, Cart_Store}  = useStore();

        return (
            <>
            {Store.isAuth?
					<Link href="/cart" className='cart-btn-wrap'>
						<Image src="/header/cart-svg.svg" alt="iLikeOpt.ru" fill priority={false}/>
						<div className='header-cart-sum'>{Cart_Store.summInCart} р.</div>
					</Link>
					:null
			}
            </>
        )
});  