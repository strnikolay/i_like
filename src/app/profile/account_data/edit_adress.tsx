'use client'

import React, {useState, ChangeEvent, useRef, useEffect} from 'react';
import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';
import { IAdress } from '@/store/interfaces';

type Props = {
  index: number,
  PropsAdress:IAdress,
}

export const Edit_adress: React.FC<Props> = observer(({index, PropsAdress}) => {
  const {Store} = useStore()
  const adressInputRef=useRef<HTMLInputElement>(null)
  const [adress, setAdress] = useState<string>(PropsAdress.adress)
  const [isAdressEdit, setIsAdressEdit] = useState<boolean>(false)
  const adressEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value)
  }

  /*useEffect(()=>{
    console.log(index)
  },[])*/

  const handleAdressEditStart = () =>{
      setIsAdressEdit(true)
      adressInputRef.current!.focus()
  }

  const handleAdressEditEnd = () =>{ 
    Store.updateAdress(adress, index)
    setIsAdressEdit(false)  
  }

  const SetDefaulHandler = () =>{ 
    Store.updateDefaultInContact(index)
    console.log(index)
  }

  return (
	<div className='adress-item'>
    <label className='adress-label'>
      <input
        ref={adressInputRef}
        readOnly={isAdressEdit?false:true}
        onChange={e => adressEditHandler(e)}
        value={adress}
        type="text"
        placeholder={adress}
        className={isAdressEdit?"adress-input active":"adress-input"}
      />
        {isAdressEdit?
        <button className='confirm' 
          onClick={handleAdressEditEnd}
        >
        </button>:
        <button className='edit' 
          onClick={handleAdressEditStart}
        >
        </button>
    }
    </label> 

    <label className={PropsAdress.defaultAdress?"default-label active":"default-label"}>
      <input
        onChange={SetDefaulHandler}
        name='default'
        type="radio"
        className="default-input"
      />
    </label>
    <div>{PropsAdress.defaultAdress?"Контакт по умолчанию":""}</div>
 
  </div>
  );
});


              
                
                
             