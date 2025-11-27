'use client'
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from "@/store/storeProvidert";
import Link from 'next/link';
import Image from 'next/image';

export const Contact: React.FC = observer(() => {

    	const [dropdown, setDropdown] = React.useState(false)

        return (
            <div className="contact-wrapper">
					<div className="phone-icon">
						<Image src="/header/fone-icon.svg" alt="iLikeOpt.ru" fill priority={false}/>
					</div>

					<div className="contact-content">	

						<div className="phone-number" onClick={() => setDropdown(!dropdown)}>
							+7 (925) 518-77-67
							<div className="grey-arrow-down" />
						</div>

						{dropdown&&<div className="dropdown-menu">
							<div>
								<div className='img-wrap'>
									<Image src="/megafon.png" fill alt=""/>
								</div>
								<span>+7(925) 518-77-67 -	АйЛайк</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/megafon.png" fill alt=""/>
								</div>
								<span>+7(926) 775-96-22 - Федор	Власов, куратор отдела продаж</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/telefon.png" fill alt=""/>
								</div>
								<span className="dropdown-phones">+7(925) 090-00-10</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/telefon.png" fill alt=""/>
								</div>
								<span className="dropdown-phones">+7(925) 090-33-38</span>
							</div>
							<div>
								<div className='img-wrap'>
									<Image src="/telefon.png" fill alt=""/>
								</div>
								<span className="dropdown-phones">+7(495) 518-77-67</span>
							</div>
							... или
							<div>
								<Link href={'/#'} className="btn openrecall">Закажите	обратный звонок</Link>
							</div>
						</div>}

						<a className="openrecall">
							Заказать обратный звонок
						</a>


					</div>
				</div>
        )
});  