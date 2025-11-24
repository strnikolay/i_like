'use client'

import React, {FC, useContext, useState, ChangeEvent, FocusEvent} from 'react';
import "./Login_form.css";
import Image from 'next/image';
import { useStore } from "@/store/storeProvidert";
import Link from 'next/link';
import {observer} from "mobx-react";
import { useRouter } from 'next/navigation';

export const LoginForm:FC = observer(() => {
	const {Store} = useStore()
	const router = useRouter();
	const [wintype, setWinType] = useState<string>('login')

	const [email, setEmail] = useState<string>('')
	const [emailError, setEmailError] = useState('не может быть пустым')
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re: RegExp = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/i; 
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Не коректный e-mail')
        } else {
            setEmailError('')
        }
    }

	const [password, setPassword] = useState<string>('')
	const [passError, setPassError] = useState('не может быть пустым')
	const passHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
        if (e.target.value.length < 3){
            setPassError('Не менее 3 символов')
            if (!e.target.value){
                setPassError(('не может быть пустым'))
            }
        } else {
            setPassError('')
        }
    }

	const confirmHandler = () => {
		if(wintype==="reg"){
			Store.reg(email, password)
		}
		if(wintype==="login"){
			Store.login(email, password)
		}
		//console.log(wintype, email, password)
	}

	const doneHandler = () => {
		Store.SetPopup('')
		router.push('/profile')
		
	}

	return (
	<>
	{Store.isAuth?
	<div className="login-page-wrapper">
		<div className='popup-background' onClick={() => Store.SetPopup('')}></div>

		<div className="login-form-wrapper bounceIn">
			<button onClick={() => Store.SetPopup('')} className="login-form-close" />
			<div className='done-text'>Вы зарегистрированы</div>
			<div className='done-text'>Не забудьте заполнить необходимые данные профиля в личном кабинете</div>
			<input type='button' onClick={doneHandler} className="done-btn" defaultValue="В ПРОФИЛЬ"/>
		</div>
	</div>
	:
	<div className="login-page-wrapper">
		<div className='popup-background' onClick={() => Store.SetPopup('')}></div>

		<div className="login-form-wrapper bounceIn">
			<button onClick={() => Store.SetPopup('')} className="login-form-close" />
			
			<div className="login-switch">
				<i/>
				<label className='login-select-type'>
					<input checked={wintype==="login"} type="radio" name="type" value="войти" onChange={()=>setWinType("login")}/>
					ВОЙТИ
				</label>
				|
				<label className='login-select-type'>
					<input checked={wintype==="reg"} type="radio" name="type" value="Зарегистрироваться" onChange={()=>setWinType("reg")}/>
					ЗАРЕГИСТРИРОВАТЬСЯ
				</label>

				<i/>
			</div>
				 
			<div className="login-title">
					<div className='login-title-icon'>
						<Image src="/login/loginicon.png" fill alt="" title=""/>
					</div>

					<div>
						Войдите в личный кабинет, используя логин и пароль, указанный во время регистрации, или зарегистрируйтесь, если вы новый клиент.
					</div>
			</div>


			<form action="https://ilikeopt.ru/login/" method="post" encType="multipart/form-data">
					<div className="form-group">

						<fieldset className={emailError===''?"":"field-error"}>
							<legend>e-mail</legend>
							<div className={emailError===''?"user":"user input-error"}/>
							<input 
							type="text" name="email" 
							placeholder="введите e-mail"
							className="form-input"
							onChange={event => emailHandler(event)}
							value={email}
							/>
					
						</fieldset>
						{emailError===''?null:<div className='error-msg'>необходимо ввести корректный email</div>}


						<fieldset className={passError===''?"":"field-error"}>
							<legend>пароль</legend>
							<div className={passError===''?"pass":"pass input-error"} />
							<input 
							type="password" name="password" 
							placeholder="введите пароль" 
							className="form-input"
							onChange={event => passHandler(event)}
							value={password}
							/>
						</fieldset>
						{passError===''?null:<div className='error-msg'>необходимо ввести пароль. не менее 3 символов</div>}

						<div className="input-group button-wrap">
							<div className="">
								<input disabled={emailError!==""||passError!==""} type="button" defaultValue={wintype==="login"?"ВОЙТИ":"ЗАРЕГИСТРИРОВАТЬСЯ"}className="btn-submit" onClick={confirmHandler}/>
							</div>
							<div className="">
								<Link className="fogot-link" href="/#">
									Забыли пароль?
								</Link>
							</div>
						</div>
					</div>
			</form>
		</div>
	</div>
	}
	
	</>	
  );
});
