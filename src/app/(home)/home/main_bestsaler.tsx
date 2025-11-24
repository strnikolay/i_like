'use client'
import React from 'react';
import Image from 'next/image';
import "./main_bestsaler.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product_card  from '../../../components/product/Product_card';
import { mockdata } from '@/api/db';


export const NewSales: React.FC = () => {

    return (
        <div id="slideshow" className="best-seller-wrap container">
            {/*<Image className='background' src="/main/best-back.png" width={1280} height={670} alt=''/>*/}
            <div className='best-seller-title'></div>

                <div className="best-seller-content">
               <Carousel className="new-sales-wrap" autoPlay centerMode centerSlidePercentage={7} showThumbs={false}>
                    {mockdata.map((el,index)=>
                        <Product_card key={index} el={el} index={index}/>
                    )}
                </Carousel>
            </div>

            

        </div>
    );
};
