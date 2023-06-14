import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import ToTop from '../ToTop/ToTop';
import './Contacts.css';
import banner from '../../img/contacts/banner.png';

const Contacts = () => {

    useEffect(() => {
        document.title = 'Контакты';
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
                        <strong>Контакты</strong>
                    </div>
                    <div className='banner-subtitle'>
                        <p>Здесь размещена информация о полном штате сотрудников сайта: ФИО и должность. 
                Так же можно узнать номера для связи с представителями волонтёрской организации и узнать адрес для личного визита</p>
                    </div>
                </div>

                <div className='banner-img'>
                    <img src={banner} alt='' className='banner-img-img'/>
                </div>
            </section>
            {/* 2 секция */}
            <section>
                <div className="titles">
                    <p>Сотрудники проекта</p>
                </div>
                <div>
                    <p><b>● Титова Софья Александровна</b> - исполнительный директор</p>
                    <p><b>● Мазелов Владимир Хесусович</b> - представитель организации</p>
                    <p><b>● Базукин Даниил Дмитриевич</b> - главный социолог</p>
                    <p><b>● Маренок Мирон Сергеевич</b> - социолог</p>
                    <p><b>● Коноплёв Михаил Владимирович</b> - социолог</p>
                    <p><b>● Волков Иван Петровна</b> - социолог</p>
                    <p><b>● Дитковский Богдан Владиславович</b> - социолог</p>
                    <p><b>● Бебра Юникорн Эльдарович</b> - главный аналитик</p>
                    <p><b>● Балакирев Владимир Владимирович</b> - аналитик</p>
                    <p><b>● Черенков Максим Евгеньевич</b> - аналитик</p>
                    <p><b>● Тяпкин Дмитрий Руслановна</b> - аналитик</p>
                    <p><b>● Толмачёва Марина Евгеньевна</b> - аналитик</p>
                    <p><b>● Скопец Денис Андреевич</b> - администратор сайта</p>
                    <p><b>● Копьёва Марина Николаевна</b> - тестировщик</p>
                </div>
            </section>
            {/* 3 секция */}
            <section>
                <div className="titles">
                    <p>Телефон горячей линии</p>
                </div>
                <div>
                    <p>● Горячая линия: <a href="tel:+1-555-123-4567">+7 (902) 328-5062</a></p>
                    <p>● Режим работы: круглосуточно</p>
                </div>
            </section>
            {/* 4 секция */}
            <section>
                <div className="titles">
                    <p>Адрес организации</p>
                </div>
                <div>
                    <p>● 248018, г. Калуга, ул. Маршала Жукова, д. 35 (проезд троллейбусом № 18 до остановки "Железнодорожная больница")</p>
                    <p>● Режим работы: с 8.30 ч. до 17.00 ч., перерыв с 12.30 ч. до 13.00 ч.</p>
                    <p>● Факс: (4842) 79-46-31</p>
                    <p>● Адрес электронной почты: ktep@mail.ru</p>
                </div>
            </section>
            </main>
            <ToTop />
            <Footer />
        </div>
    );
};

export default Contacts;