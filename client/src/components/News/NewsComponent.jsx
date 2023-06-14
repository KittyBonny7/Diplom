import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import ToTop from '../ToTop/ToTop';
import './NewsComponent.css';
import banner from '../../img/publications/banner.png';


const NewsComponent = () => {

    useEffect(() => {
        document.title = 'Публикации';
      }, []);

    return (
        <div>
            <Header />
            <Buttons />
            <main className='main-container'>
            {/* 1 секция баннер */}
            <section className='main-banner'>
                <div className='banner'>
                    <div className='banner-title'>
                        <strong>Публикации</strong>
                    </div>
                    <div className='banner-subtitle'>
                        <p>Здесь собраны самые актуальные и последние новости сайта. Частота публикации новостей два раза в неделю и по завершению опросов.
                        Оставайтесь в теме и будьте в курсе всех последний событий!</p>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={banner} alt='' className='banner-img-img'/>
                </div>
            </section>
            {/* 2 секция */}
            <section class="publication-2">
                <div class="titles">
                    <p>Самые актуальные и интересные<br /> новости в сфере онлайн-опросов</p>
                 </div>
                <div class="publication-2-news">
                    <Link to="/new002" class="new">
                    <div>
                        <div class="new-titles">
                            <p>002. Международный женский день</p>
                        </div>
                        <div class="new-subtitles">
                            <p>Международный женский день – это годовая традиция, которая призывает к осознанию и привлечению внимания к правам женщин и их социальным, экономическим и политическим достижениям</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="/new001" class="new">
                    <div>
                        <div class="new-titles">
                            <p>001. Важность семейных ценностей</p>
                        </div>
                        <div class="new-subtitles">
                            <p>Важно помнить, что семейные ценности являются основой семьи и общества в целом</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="/new000" class="new">
                    <div>
                        <div class="new-titles">
                            <p>000. Открытие сайта</p>
                        </div>
                        <div class="new-subtitles">
                            <p>Компания "Социальные онлайн-опросы" объявила о запуске своего нового сайта, предназначенного для проведения опросов в онлайн-формате</p>
                        </div>
                    </div>
                    </Link>
                    </div>
            </section>
            </main>
            <ToTop />
            <Footer />
        </div>
    );
};

export default NewsComponent;