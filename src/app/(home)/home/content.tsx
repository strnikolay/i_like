import React from 'react';
import Image from 'next/image';
import "./content.css";
import Link from 'next/link';


export const Content: React.FC = () => {

  return (
    <div className='container main-content-wrap'>
      <div className='dark' />
      
      <div className='text'>
        <h1>ПРОДАЖА НИЖНЕГО БЕЛЬЯ</h1>
        <p>ПРОИЗВОДСТВА:</p>
        <p>РОССИИ, ИТАЛИИ, ПРИБАЛТИКИ</p>
        <h2>ОПТОМ</h2>
        <p>ОТ БРЕНДОВ</p>
        <p>
          АйЛайк, Милавица, Новое время, 
          Биглиф, Глора, Элита, Nuovo vita, 
          Lady Fleur, Дива Шарм, Валерия, Орхидея
        </p>
      </div>
      <Link className='to-catalog' href="/catalog">В КАТАЛОГ</Link>
      <div className='arrow-wrap'>
        <Image className='content-arrow' src="/content_arrow_down.svg" width={80} height={25} alt=''/>
        <Image className='content-arrow' src="/content_arrow_down.svg" width={80} height={25} alt=''/>
        <Image className='content-arrow' src="/content_arrow_down.svg" width={80} height={25} alt=''/>
      </div>
      
    </div>
  );
};
