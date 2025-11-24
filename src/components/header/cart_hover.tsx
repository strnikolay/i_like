'use client'
import React from 'react';
import "./header.css";
import { observer } from 'mobx-react';

export const Header: React.FC = observer(() => {

      	return (
            <div className="col-lg-1 col-md-2 col-sm-2 hidden-xs">
				<div id="cart" className="btn-group btn-block text-right">
						<a href="https://ilikeopt.ru/cart/" data-loading-text="Загрузка..." className="btn btn-inverse">
		                    <i className="fa fa-shopping-cart">
                        		<span id="cart-total">
                          			17 600 р
                        			<div className="cart-discount-info">
										<div className="">Текущая скидка: 0%</div>
										<div className="">До следующей скидки (2%): 12 400.00 р.</div>
									</div>
                        		</span>
                      		</i>
						</a>
				</div>
			</div>
        )
});    