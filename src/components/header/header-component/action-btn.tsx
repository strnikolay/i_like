'use client'
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from "@/store/storeProvidert";
import Link from 'next/link';
import Image from 'next/image';

export const Action_Btn: React.FC = observer(() => {
    const {Store, Cart_Store}  = useStore();

        return (
            <>
            {Store.isAuth?
			<div className='login-wrap'>
				<div className='fav-btn'>
					<Link className='fav-link' href="/favourites"/>
					<div className='fav-count'>{Store.user.fav.length}</div>
				</div>

				<button onClick={() => Store.logout()} className="logout">
					<Image src="/header/logout-svg.svg" title="iLikeOpt.ru" alt="iLikeOpt.ru" fill/>
				</button>

				<Link href="/profile" className="profile">
					Личный кабинет
				</Link>	

				<button 
					//onClick={() => setMobilemenu(true)} 
					className="burger-menu"
				>
					<Image src="/burger.svg" title="iLikeOpt.ru" alt="iLikeOpt.ru" fill/>
				</button>

			</div>
			:
			<div className='login-wrap'>
				<button onClick={() => Store.SetPopup('Login')} className="login">
					Войти/Зарегистрироваться
				</button>
				<button 
					//onClick={() => setMobilemenu(true)} 
					className="burger-menu"
				>
				</button>
			</div>}	
            </>
        )
});  