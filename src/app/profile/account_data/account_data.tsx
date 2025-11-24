'use client'

import React, {useState, useEffect} from 'react';
import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';
import { Edit_Contact } from './edit_contact';
import { Edit_adress } from './edit_adress';
import { IAdress, IContact } from '@/store/interfaces';



export const Account_data: React.FC = observer(() => {
  const {Store} = useStore()
  const [contactList, setContactList] = useState<IContact[]>([])
  const [adressList, setAdressList] = useState<IAdress[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Store.user.contact
  useEffect(()=>{
    //console.log(contactList)
    const tempContactList = []
    if(Store.user.contact)
    setContactList(Store.user.contact) 
    //setAdressList(Store.user.adress)
    setIsLoading(false) 
  },[])

  /*useEffect(()=>{
    console.log(contactList)

    //setContactList(Store.user.contact)  
  },[contactList])*/

  const addNewContact = () =>{

  }

  const addNewAdress = () =>{

  }

  return (
	<div className="account-data-wrapper profile-content">

    <div className="edit-company-wrapper">
      <div className='company'>Компания: {Store.user.company}</div>
      <div className='company'>Инн: {Store.user.company}</div>
    </div> 
    

    <div className="edit-contact-wrapper">
      <div className='contact-edit-title'>Котактные данные</div>
      {!isLoading&&contactList.map((contact:IContact, index:number)=>(
        <Edit_Contact key={index} index={index} contact={contact}/>
      ))}
      <input className='add-contact-btn' value="Добавить контакт" type="button" onClick={addNewContact}/>
    </div>

    <div className="edit-adress-wrapper">
      <div className='adress-edit-title'>Адрес доставки</div>
      {!isLoading&&adressList.map((adress:IAdress, index:number)=>(
        <Edit_adress key={index} index={index} PropsAdress={adress}/>
      ))}
      <input className='add-adress-btn' value="Добавить адрес" type="button" onClick={addNewAdress}/>
    </div>



    {/*<label >
    <input type="text"  name="company" value={Store.user.company}
      //onChange={()=> {Product_Store.setSelectedCategory(undefined)}}
    />
    </label>*/}
                
  </div>
  );
});
