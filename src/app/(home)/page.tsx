'use client'

import { Poster } from "@/app/(home)/home/Poster";
import { NewSales } from "@/app/(home)/home/main_bestsaler";
import { Main_about } from "@/app/(home)/home/main_about";
import { Main_news } from "@/app/(home)/home/main_news";
import { useEffect } from "react";
import { useStore } from "@/store/storeProvidert";
import { Content } from "@/app/(home)/home/content";
import { observer } from 'mobx-react';
import { Review } from "@/app/(home)/home/main_review";


const Home = () => {
  const {Store} = useStore()

  useEffect (()=>{
    /*console.log(Store.isAuth)*/
  },[Store])

  return (
    <>
      <Poster/>
      <Content/>
      <Main_about/>
      <NewSales/>
      <Review/>
      <Main_news />
    </>
  )
}

export default observer(Home)