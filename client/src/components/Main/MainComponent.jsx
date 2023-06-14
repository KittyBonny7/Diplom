import React, { useEffect } from 'react';
import './MainComponent.css';
import Header from '../Header/Header';
import Buttons from '../Buttons/Buttons';
import Footer from '../Footer/Footer';
import ToTop from '../ToTop/ToTop';
import banner from '../../img/index/banner.png';
import img_employ1 from '../../img/index/director.png';
import img_employ2 from '../../img/index/sociologist.png';
import img_employ3 from '../../img/index/analyst.png';

const MainComponent = () => {

    useEffect(() => {
        document.title = 'Социальные опросы';
      }, []);

    return (
        <div>
            <Header />
            <Buttons />
            <main className='main-container'>
            {/* 1 секция баннер */}
            <section class='main-banner'>
                <div class='banner'>
                    <div className='banner-title'>
                        <strong>Социальные опросы</strong>
                    </div>
                    <div className='banner-subtitle'>
                        <p>"Социальные опросы - это не только средство для измерения общественного мнения, но и инструмент, который помогает формировать будущее." - Джимми Картер</p>
                    </div>
                </div>

                <div className='banner-img'>
                    <img src={banner} alt='' className='banner-img-img'/>
                </div>
            </section>

            {/* 2 секция */}
            {/* Информация о главных сотрудниках */}
            <section>
                <div className='titles'>
                    <strong>Главные социологи и аналитики</strong>
                </div>
                <div className='index-2'>
                    <div className='employ'>
                        <div className='img_employ'>
                            <img src={img_employ1} alt='социальные опросы' className='img_img_employ'/>
                        </div>
                        <div className='text_employ'>
                            <p>Исполнительный директор</p>
                        </div>
                        <div className='text_employ_fi'>
                            <p>Титова Софья</p>
                        </div>
                    </div>
                    <div className='employ'>
                        <div className='img_employ'>
                            <img src={img_employ2} alt='социальные опросы' className='img_img_employ'/>
                        </div>
                        <div className='text_employ'>
                            <p>Главный Социолог</p>
                        </div>
                        <div className='text_employ_fi'>
                            <p>Базукин Даниил</p>
                        </div>
                    </div>
                    <div className='employ'>
                        <div className='img_employ'>
                            <img src={img_employ3} alt='социальные опросы' className='img_img_employ'/>
                        </div>
                        <div className='text_employ'>
                            <p>Главный Аналитик</p>
                        </div>
                        <div className='text_employ_fi'>
                            <p>Бебра Юникорн</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 3 секция */}
            {/* Актуальные новости на сайте */}
            {/* <section>
                <div className='titles'>
                    <strong>Публикации</strong>
                </div>
                <div className='subtitles'>
                    <p>Последний новости на сайте</p>
                </div>
                <div className='slider'>
                    <div className='slide'>
                        <div className='slide-content'>
                            <div>
                                <div className='slide-title'>
                                    <strong>Открытие сайта</strong>
                                </div>
                                <div className='slide-subtitle'>
                                    <p>Компания "Социальные онлайн-опросы" объявила о запуске своего нового сайта, 
                                    предназначенного для проведения опросов в онлайн-формате</p>
                                </div>
                                <NavLink to={NEW000_ROUTE} className='slide-button'>Узнать подробнее</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='slide-content'>
                            <div>
                                <div className='slide-title'>
                                    <strong>Важность семейных ценностей</strong>
                                </div>
                                <div className='slide-subtitle'>
                                    <p>Важно помнить, что семейные ценности являются основой семьи и общества в целом</p>
                                </div>
                                <NavLink to={NEW001_ROUTE} className='slide-button'>Узнать подробнее</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='slide-content'>
                            <div>
                                <div className='slide-title'>
                                    <strong>Международный женский день</strong>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Международный женский день – это годовая традиция, которая призывает к осознанию 
                                    и привлечению внимания к правам женщин и их социальным, экономическим и политическим достижениям</p>
                                </div>
                                <NavLink to={NEW002_ROUTE} className='slide-button'>Узнать подробнее</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='slide-controls'>
                        <button className='prev-arrow'>&lt;</button>
                        <button className='next-arrow'>&gt;</button>
                    </div>
                </div>
            </section> */}
            {/* 4 секция */}
            {/* Google Maps */}
            <section className='google-maps'>
                <div>
                    <div className='titles'>
                        <strong>Мы на карте</strong>
                    </div>
                    <iframe title='Google Maps' className='index-map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.8848585641067!2d36.28691705161615!3d54.517891980144185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4134b962a5e0927b%3A0x77fa38e436e96e3d!2z0JPQkdCf0J7QoyDQmtCeICLQmtCw0LvRg9C20YHQutC40Lkg0YLQtdGF0L3QuNC60YPQvCDRjdC70LXQutGC0YDQvtC90L3Ri9GFINC_0YDQuNCx0L7RgNC-0LIi!5e0!3m2!1sru!2sru!4v1680482791652!5m2!1sru!2sru' width='600' height='450' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
                </div>
            </section>
            </main>
            <ToTop />
            <Footer />
        </div>
    );
};

export default MainComponent;