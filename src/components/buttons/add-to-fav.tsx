'use client'
import React, {FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { toast } from "react-toastify";
import { useStore } from "@/store/storeProvidert";

interface Props {
    id: string;
}

export const AddToFavBTN: FC<Props> = observer(({id}) => {
    const {Store} = useStore()
    const [isFav, setIsFav] = useState(false)

    useEffect(()=>{
        //console.log(typeof Store.user.fav)
        if(Store.user.fav){
            if(Store.user.fav.includes(id)){
                setIsFav(true)
            } else {
                setIsFav(false)
        }}
    },[Store.user.fav, id])

    return (       
        <input type='button' 
            className={`fav-icon `+(isFav?"remove-fav":"add-fav")} 
            onClick={()=>isFav?Store.removeFav(id):Store.addToFav(id)}
        /> 
    )
}); 