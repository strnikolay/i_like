'use client'

import React from 'react';
import Image from 'next/image';
import "./poster.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';



export const Poster: React.FC = () => {

  return (
	<div className="poster container">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>

            <div className="poster-item">
                <Link href="https://online.fliphtml5.com/ggqrf/wsit/#p=1">
                    <Image src="/poster/poster_1.png" fill alt="каталог 2023" className="img-responsive"/>
                </Link>
            </div>

            <div className="poster-item">
                <a href="https://ilikeopt.ru/contacts">
			        <Image src="/poster/poster_2.png" fill alt="бизнес с нами" className="img-responsive"/>
                </a>
            </div>


            <div className="poster-item">
                <a href="https://ilikeopt.ru/bustgaltery/bolshie-razmery/">
                    <Image src="/poster/poster_3.png" fill alt="гиганты" className="img-responsive"/>
                </a>
            </div>


            <div className="poster-item">
                <a href="https://ilikeopt.ru/ilike">
                    <Image src="/poster/poster_1.png" fill alt="от производителя" className="img-responsive"/>
                </a>
            </div>


                                <div className="poster-item">
                                    <a href="https://ilikeopt.ru/0513-aylayk-trusy">
                                    <Image src="/poster/poster_2.png" fill alt="513 биг сайз" className="img-responsive"/>
                                    </a>
                                </div>

        </Carousel>


    </div>
  );
};
