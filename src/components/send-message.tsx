'use client'

import React from 'react';
//import Image from 'next/image';
import "./send-message.css";


/*interface Props {
}*/

export const SendForm: React.FC = () => {
  
    return (
    <div className="send-wrap">
        	<form action="/message/" method="post" encType="multipart/form-data">
                    <h2>Написать нам</h2>
					<div className="form-group">
						<div className="input-group">
							<input type="text" name="" placeholder="Имя" defaultValue=""	className="form-control"/>
						</div>

						<div className="input-group">
							<input type="text" name="" placeholder="email" defaultValue="" className="form-control"/>
                            и/или
                            <input type="text" name="" placeholder="телефон" defaultValue="" className="form-control"/>
						</div>

                        <div className="input-group">
							<input type="text" name="" placeholder="email" defaultValue="" className="form-control"/>
                            и/или
                            <input type="text" name="" placeholder="телефон" defaultValue="" className="form-control"/>
						</div>

                        <div className="input-group">
							<input type="text" name="" placeholder="email" defaultValue="" className="form-control"/>
						</div>

						<div className="input-group button-wrap">
							<div className="">
								<input type="submit" defaultValue="Отправить сообщение" className="btn-submit"/>
							</div>
						</div>
					</div>
			</form>
    </div>
    );
};
 