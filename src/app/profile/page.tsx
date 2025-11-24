'use client'
import "./profile.css"
import Tabs from "./Tabs/tabs"
import Tab from "./Tabs/tab"
import { Account_data } from "./account_data/account_data"
import { Order_history } from "./order_history/order_history"
//import Image from "next/image"

export default function profile() {

    return (
    <div className="profile-wrap container">
        <h1></h1>
       <Tabs>
            <Tab title="Данные аккаунта">
                <Account_data/>                   
            </Tab>

            <Tab title="История заказов">
                <Order_history/>
            </Tab>

            <Tab title="Платежи">
               платежи
            </Tab>

            

        </Tabs>
        
    </div>
  )
}
