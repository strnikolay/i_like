'use client'

import React, { useEffect } from 'react';
import { useStore } from "@/store/storeProvidert";
import { observer } from 'mobx-react';
import { ToastContainer, toast } from "react-toastify";




export const Toast = observer (() => {
	const {Store, Cart_Store} = useStore()


	/*useEffect (() => {
		switch (Store.toastType) {
            case 'error':
              return toast.error(Store.toastMsg);
            case 'success':
              return toast.success(Store.toastMsg);
            case 'warning':
              return toast.warning(Store.toastMsg);
            default:
              return null;
        }
	},[Store.isToastShow])*/

	return <ToastContainer position='bottom-right' autoClose={2000} />
});
