'use client'
import React, { createContext, useContext } from 'react';
//import { enableStaticRendering } from "mobx-react-lite";
import {Store} from './store';
import { Product_Store } from './ProductStore';
import { Cart_Store } from './CartStore';

/*
// Create a store container with all stores
const store = {Store};
interface State {Store: typeof Store;}
// Create context
//const StoreContext = createContext<State>({Store});
const StoreContext = createContext({store});*/
interface State {
  Store: typeof Store;
  Product_Store: typeof Product_Store;
  Cart_Store: typeof Cart_Store;
}

/*const IS_SSR = typeof window === 'undefined';
enableStaticRendering(IS_SSR);
const StoreContext = createContext<State | null>(Store);*/

//const store = {Store};
const StoreContext = createContext<State>({Store, Product_Store, Cart_Store});

// Provider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreContext.Provider value={{Store, Product_Store, Cart_Store}}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook to use the store in components
export const useStore = () => useContext(StoreContext);