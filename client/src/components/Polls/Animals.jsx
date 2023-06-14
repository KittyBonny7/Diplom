import React, { useEffect, useContext} from 'react';
import { Context } from "../..";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import ToTop from '../ToTop/ToTop';
import './Polls.css';
import banner from '../../img/pools/animals/banner.png';

const Animals = () => {

    const { user } = useContext(Context);
    const email = 'titova.sofia.titova@gmail.com';

    useEffect(() => {
        document.title = 'Опросы про животных';
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
                        <strong>Опросы про животных</strong>
                    </div>
                    <div className='banner-subtitle'>
                        <p>Опросы помогают лучше понять потребности и предпочтения людей в отношении животного мира. Результаты могут помочь улучшить условия 
                содержания животных и разработать более эффективные стратегии их защиты</p>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={banner} alt='' className='banner-img-img'/>
                </div>
            </section>
            {/* 2 секция */}
            <section className="Opros_1">
                <form className="opros">
                    <h3>Опрос №1</h3>
                    <fieldset className="firstVopros">
                    <legend><b>Как Вы относитесь к бродячим животным?</b></legend>
                    <div>
                        <p>● Хорошо</p>
                    </div>
                    <div>
                        <p>● Нейтрально</p>
                    </div>
                    <div>
                        <p>● Отрицательно</p>
                    </div>
                    <div>
                        <p>● Не знаю</p>
                    </div>
                    </fieldset><br />
                    <fieldset className="secondVopros">
                    <legend><b>Вы довольны работой службы отлова?</b></legend>
                    <div>
                        <p>● Да</p>
                    </div>
                    <div>
                        <p>● Нет</p>
                    </div>
                    <div>
                        <p>● Не знаю</p>
                    </div>
                    </fieldset><br />
                    <fieldset className="thirdVopros">
                    <legend><b>Были ли у Вас, или знакомых, случаи нападения бездомных животных?</b></legend>
                    <div>
                        <p>● Да</p>
                    </div>
                    <div>
                        <p>● Нет</p>
                    </div>
                    <div>
                        <p>● Не знаю</p>
                    </div>
                    </fieldset><br />
            {user._isAuth && (
                <div>
                    <p>Отправьте свои ответы письмом нам на почту!</p>
                    <p>Название письма должно содержать название раздела, где вышли прошли опрос, и номер опроса. Тело письма - ваши ответы.
                    Пример:<br />
                    <b>От: example@mail.ru<br />
                    Кому: titova.sofia.titova@gmail.com<br />
                    Название письма: "Животные. Опрос №1"<br />
                    - Хорошо<br />
                    - Да<br />
                    - Да<br /></b>
                    </p>
                    <a href={`mailto:${email}`}>Отправить письмо</a>
                </div>
            )}
            {!user._isAuth && (
                <div className='titles'>
                    <p>ВОЙДИТЕ В ПРОФИЛЬ ЧТОБЫ ПРОЙТИ ОПРОС</p>
                </div>
            )}
                </form>
            </section>
            </main>
            <ToTop />
            <Footer />
        </div>
    );
};

export default Animals;