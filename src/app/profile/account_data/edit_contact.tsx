'use client'

import React, {useState, ChangeEvent, useRef, useEffect} from 'react';
import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';
import { IContact } from '@/store/interfaces';

type Props = {
  index: number,
  contact:IContact
}

export const Edit_Contact: React.FC<Props> = observer(({index, contact}) => {
  const {Store} = useStore()
  //const [isEdit, setSumm] = useState<number>(0)

  const nameInputRef=useRef<HTMLInputElement>(null)
  const [name, setName] = useState<string>(contact.name)
  const [isNameEdit, setIsNameEdit] = useState(false)
  const nameEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleNameEditStart = () =>{
      setIsNameEdit(true)
      nameInputRef.current!.focus()
  }

  const handleNameEditEnd = () =>{ 
    Store.updateNameInContact(name, index)
    setIsNameEdit(false)  
  }

  const phoneInputRef=useRef<HTMLInputElement>(null)
  const [phone, setPhone] = useState<string>(contact.phone)
  const [isPhoneEdit, setIsPhoneEdit] = useState(false)
  const phoneEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  /*useEffect(()=>{
    console.log(isNameEdit, isPhoneEdit)
  },[isNameEdit, isPhoneEdit])*/



  const handlePhoneEditStart = () =>{
      setIsPhoneEdit(true)
      phoneInputRef.current!.focus()
  }

  const handlePhoneEditEnd = () =>{ 
    Store.updatePhoneInContact(phone, index)
    setIsPhoneEdit(false)  
  }

  const SetDefaulHandler = () =>{ 
    Store.updateDefaultInContact(index)
    //console.log(index)
  }

  return (
	<div className='contact-item'>

    <label className='name-label'>
      <input
        ref={nameInputRef}
        readOnly={isNameEdit?false:true}
        onChange={e => nameEditHandler(e)}
        value={name}
        type="text"
        placeholder={name}
        className={isNameEdit?"name-input active":"name-input"}
      />
          {isNameEdit?
        <button className='confirm' 
          onClick={handleNameEditEnd}
        >
        </button>:
        <button className='edit' 
          onClick={handleNameEditStart}
        >
        </button>
    }
    </label>

    
    <label className='phone-label'>
      <input
        ref={phoneInputRef}
        readOnly={isPhoneEdit?false:true}
        onChange={e => phoneEditHandler(e)}
        value={phone}
        type="text"
        placeholder={phone}
        className={isPhoneEdit?"phone-input active":"phone-input"}
      />
       {isPhoneEdit?
        <button className='confirm' 
          onClick={handlePhoneEditEnd}
        >
        </button>:
        <button className='edit' 
          onClick={handlePhoneEditStart}
        >
        </button>
      } 
    </label>

    <label className={contact.defaultContact?"default-label active":"default-label"}>
      <input
        onChange={SetDefaulHandler}
        name='default'
        type="radio"
        className="default-input"
      />
      <div>{contact.defaultContact?"Контакт по умолчанию":""}</div>
    </label>
    
 
  </div>
  );
});


              
                
                
             