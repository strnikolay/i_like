import React from 'react';
import "./main_about.css";
import Image from 'next/image';



export const Main_about: React.FC = () => {

  return (
	<div className="o-nas-wrapper container">

            <div className="o-nas-item one">

                <div className='image-wrap'>
                  <Image src="/main/about1.png" fill sizes="10vw" alt=""/>
                </div>

                <div className="o-nas-content">              
                  <div className="o-nas-title">15 ЛЕТ</div>
                  <div className="o-nas-text" >
                    Мы производим и продаем нижнее белье
                  </div>
                </div>
            </div>


            <div className="o-nas-item two">

              <div className='image-wrap'>
                <Image src="/main/about2.png" fill sizes="10vw" alt=""/>
              </div>
                
                <div className="o-nas-content">   
                  <div className="o-nas-title">5 ЛЕТ</div>
                  <div className="o-nas-text">
                    Мы производим СОБСТВЕННУЮ МАРКУ белья в Прибалтике
                  </div>
                </div>
            </div>


            <div className="o-nas-item three">
              <div className='image-wrap'>
                <Image src="/main/about3.png" fill sizes="10vw" alt=""/>
              </div>
                
                <div className="o-nas-content"> 
                  <div className="o-nas-title">XXL</div>
                  <div className="o-nas-text">
                    Наша специализация — большие размеры
                  </div>
                </div>
            </div>


            <div className="o-nas-item four">
              <div className='image-wrap'>
                <Image src="/main/about4.png" fill sizes="10vw" alt=""/>
              </div>              
              
                <div className="o-nas-content">              
                  <div className="o-nas-title">1300+ КЛИЕНТОВ</div>
                  <div className="o-nas-text" >Ежемесячно строят с нами свой бизнес</div>
                </div>                
            </div>

  </div>
  );
};
