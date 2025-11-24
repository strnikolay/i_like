'use client'
import React from 'react';
import Image from 'next/image';
import "./main_review.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Review: React.FC = () => {

    return (
        <div className="review-wrap container">
            <Image className='background' src="/main/review.png" fill alt=''/>
            {/*<div className='best-seller-title'></div>
            <div className="best-seller-content new-sales-wrap">
               <Carousel className="new-sales-wrap" infiniteLoop autoPlay centerMode centerSlidePercentage={7} showThumbs={false}>
                    {data.map((el,index)=>
                        <Product_card el={el} index={index}/>
                    )}
                </Carousel>
            </div>*/}

        </div>
    );
};
