import React from 'react';
import "./header.css";

import Link from 'next/link';
import { SearchInput } from './search-input';
import { Cart_Btn } from './header-component/cart-btn';
import { Action_Btn } from './header-component/action-btn';
import { Contact } from './header-component/contact';


export const Header: React.FC = () => {

  	return (
  	<div className="header">
		<div className="container">		
			<Link className='logo' href={'/'} />

            <div className="search-wrap">
				<SearchInput/>
			</div>


			<div className='header-btn-wrap'>
					
				<Contact/>

				<Cart_Btn />
			
			</div>	

		</div>



		<div className="container">
			{/*<button onClick={() => router.push('/catalog')} className="category" type="button">*/}
			<Link href="/catalog" className="category">	
				<span className="category-text">КАТАЛОГ</span>
            	<div className="burger"></div>
			</Link>	
			{/*</button>*/}


			<nav>
				<ul className='nav-list'>
					<li data-id="0" className="hasdropdown">
						<Link href="/about">О нас <i className="fa fa-chevron-down"></i></Link>
						<ul className='dropdown-list'>
							<li data-id="1"><Link href="/certificates">Сертификаты</Link></li>
							<li data-id="1"><Link href="/#">Политика Конфиденциальности</Link></li>
							<li data-id="1"><Link href="/#">Новости</Link></li>
							<li data-id="1"><Link href="/#">Отзывы</Link></li>
						</ul>
					</li>
					<li data-id="1"><Link href="/partner">Сотрудничество</Link></li>
					<li data-id="2"><Link href="/delivery">Доставка</Link></li>
					<li data-id="3"><Link href="/contact">Контакты</Link></li>
					<li data-id="4">
						<Link href="/info">
							Информация <i className="fa-chevron-down"/>
						</Link>
					</li>	
				</ul>

			</nav>

			<Action_Btn/>
			
				
		</div>
	</div>
  );
};
