'use client'
import "./cart.css";
import {FC} from "react";
import { observer } from 'mobx-react';




export const Confirm:FC = observer(() => {

  return (
    <div className="order-wrap container">
      <h1>Заказ оформлен</h1>
      <h2>Заказ отправлен менеджерам. Ваш менеджер свяжется с Вами в ближайшее время для уточнения деталей</h2>
      <h2>Посмотреть статус и детали заказа вы можете в личном кабинете во вкладке история заказов</h2>
    </div>
  )
});

//export default (Confirm);
