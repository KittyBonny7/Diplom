import React, { useEffect, useContext } from 'react';
import { Context } from "../..";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import ToTop from '../ToTop/ToTop';
import './Polls.css';
import banner from '../../img/pools/policy/banner.png';

const Policy = () => {

    const { user } = useContext(Context);
    const email = 'titova.sofia.titova@gmail.com';

    useEffect(() => {
        document.title = 'Опросы по теме политики';
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
                        <strong>Опросы по теме политики</strong>
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
            <section className="Opros_1">
                <form className="opros">
                    <h3>Опрос №1</h3>
                    <fieldset className="firstVopros">
                    <legend><b>Откуда Вы чаще всего узнаете о новостях, событиях из жизни Вашего региона, страны, мира?</b></legend>
                    <div>
                        <p>● ТВ</p>
                    </div>
                    <div>
                    <p>● Социальные сети</p>
                    </div>
                    <div>
                    <p>● Другое</p>
                    </div>
                    </fieldset><br />
                    <fieldset className="secondVopros">
                    <legend><b>Вы интересуетесь или не интересуетесь политикой?</b></legend>
                    <div>
                    <p>● Да</p>
                    </div>
                    <div>
                    <p>● Нет</p>
                    </div>
                    <div>
                    <p>● Затрудняюсь ответить</p>
                    </div>
                    </fieldset><br />
                    <fieldset className="thirdVopros">
                    <legend><b>А раньше, 2-3 года назад, Вы интересовались политикой больше или меньше, чем сейчас?</b></legend>
                    <div>
                    <p>● Больше</p>
                    </div>
                    <div>
                    <p>● Меньше</p>
                    </div>
                    <div>
                    <p>● Не изменилось</p>
                    </div>
                    <div>
                    <p>● Затрудняюсь ответить</p>
                    </div>
                    </fieldset><br />
                {user._isAuth && (
                    <div>
                    <p>Отправьте свои ответы письмом нам на почту!</p>
                    <p>Название письма должно содержать название раздела, где вышли прошли опрос, и номер опроса. Тело письма - ваши ответы.
                    Пример:<br />
                    <b>От: example@mail.ru<br />
                    Кому: titova.sofia.titova@gmail.com<br />
                    Название письма: "Политика. Опрос №1"<br />
                    - Социальные сети<br />
                    - Да<br />
                    - Больше<br /></b>
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

export default Policy;