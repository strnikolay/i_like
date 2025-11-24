'use client'

import React from 'react';
import "./main_news.css";
import Link from 'next/link';

export const Main_news: React.FC = () => {

    return (
        <div id="slideshow" className="main-news-wrapper container">
            <div className='news-blok-title'>Новости</div>
            
            <div className='news-content-wrap'>
                <div className="news-first-item" >
                    <div className="news_image"></div>   
                    <span className="title-wrap">
                        <span className="news-title">Новая фотосессия 2024!</span>
                        <span className="dating">13.05.2024</span>                     
                    </span>
                    <span className="descrip">
                        В выходные прошла фотосессия белья&nbsp;iLike! Мы пересняли      многие классические модели и отсняли новые. Скоро обновленные карточки появятся  на сайте.
                    </span>
                    <Link className='read' href='/#'>Читать</Link>
                </div>
                
                <div className='news-vertical'>
                    <div className="news-item" >   
                            <span className="title-wrap">
                                    <div className="news_image"></div>
                                    <span className="news-title">Вышел новый каталог iLike!</span>
                            </span>
                            <span className="dating">14.07.2023</span>
                            <span className="descrip">
                                В нем представлены модели собственного производства компании
                                iLike. Каталог доступен в электронной версии на нашем сайте.
                            </span>
                            <a className='read' href=''>Читать</a>
                    </div>

                    <div className="news-item" >   
                            <span className="title-wrap">
                                    <div className="news_image"></div>
                                    <span className="news-title">Новая фотосессия и каталог!</span>
                            </span>
                            <span className="dating">07.11.2022</span>
                            <span className="descrip">
                                На днях провели потрясающую фотосессию с нашими любимыми моделями iLike! Теперь готовим новый каталог - актуальный ассортимент и цвета.Следите за нашими новостями
                            </span>
                            <a className='read' href=''>Читать</a>
                    </div>

                    <div className="news-item" >   
                            <span className="title-wrap">
                                    <div className="news_image"></div>
                                    <span className="news-title">Получайте новости об акциях и специальных предложениях
                                    первыми!</span>
                            </span>
                            <span className="dating">03.10.2022</span>
                            <span className="descrip">
                                Телеграм-канал создан
                                специально для наших клиентов. Здесь мы делимся новостями нашего бренда, а
                                также бельевой индустрии. Вы будете первыми.
                            </span>
                            <a className='read' href=''>Читать</a>
                    </div>
                </div>

                </div>
                    {/*<div className="news-item" >   
                            <span className="title-wrap">
                                    <div className="news_image"></div>
                                    <span className="news-title">Яркие модели iLike накануне сезона весна-лето’22!</span>
                            </span>
                            <span className="dating">24.02.2022</span>
                            <span className="descrip">
                                На прошедшей выставке Lingeries Show Forum компания iLike
                                представила лучшие модели больших размеров собственного производства. Наши
                                новинки - принтованные трусы
                            </span>
                            <a className='read' href=''>Читать</a>
                    </div>

                    <div className="news-item" >   
                            <span className="title-wrap">
                                    <div className="news_image"></div>
                                    <span className="news-title">Приглашаем вас на крупнейшую бельевую выставку Lingerie Show
                                    Forum в Москве!</span>
                            </span>
                            <span className="dating">03.02.2022</span>
                            <span className="descrip">
                                Компания iLike уже несколько лет является постоянным
                                участником выставки.На этот раз мы представим наши классические полюбившиеся
                                многим клиентам модели.
                            </span>
                            <a className='read' href=''>Читать</a>
                    </div>*/}

                {/*</Carousel>*/}
            
        </div>
    );
};
