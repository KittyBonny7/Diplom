import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE, FAMILY_ROUTE, POLICY_ROUTE, ANIMALS_ROUTE, ECOLOGY_ROUTE, NEWS_ROUTE, CONTACTS_ROUTE, INFORMATION_ROUTE } from '../../const';
import logo from '../../img/logo-main.png';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault(); // Отменить стандартное поведение ссылки
        setIsOpen(!isOpen);
      };

    return (
        <div>
            <header>
                <div className="menu-container">
                    <ul className='menu'>
                        <li><NavLink to={MAIN_ROUTE}>
                            <img className="header-item" src={logo} alt="" />
                        </NavLink></li>
                        <li className='polls'><NavLink>Опросы</NavLink>
                            <ul className='sub-menu'>
                                <li><NavLink to={FAMILY_ROUTE}>Семья</NavLink></li>
                                <li><NavLink to={POLICY_ROUTE}>Политика</NavLink></li>
                                <li><NavLink to={ANIMALS_ROUTE}>Животные</NavLink></li>
                                <li><NavLink to={ECOLOGY_ROUTE}>Экология</NavLink></li>
                            </ul></li>
                        <li><NavLink to={NEWS_ROUTE}>Публикации</NavLink></li>
                        <li><NavLink to={CONTACTS_ROUTE}>Контакты</NavLink></li>
                        <li><NavLink to={INFORMATION_ROUTE}>Информация</NavLink></li>
                    </ul>
                </div>

                <div className='dropdown'>
                    <a href="#" onClick={toggleDropdown} className='dropbtn'>МЕНЮ</a>
                    {isOpen && (
                    <ul className='dropdown-content'>
                        <li className='dropdown-content-text'><NavLink to={MAIN_ROUTE}>Главная</NavLink></li>
                        <li className='dropdown-content-text'><NavLink to={FAMILY_ROUTE}>Семья</NavLink></li>
                        <li className='dropdown-content-text'><NavLink to={POLICY_ROUTE}>Политика</NavLink></li>
                        <li className='dropdown-content-text'><NavLink to={ANIMALS_ROUTE}>Животные</NavLink></li>
                        <li className='dropdown-content-text'><NavLink to={ECOLOGY_ROUTE}>Экология</NavLink></li>
                        <li className='dropdown-content-text'><NavLink to={NEWS_ROUTE}>Публикации</NavLink></li>
                        <li className='dropdown-content-text'><NavLink to={CONTACTS_ROUTE}>Контакты</NavLink></li>
                        <li className='dropdown-content-text'><NavLink to={INFORMATION_ROUTE}>Информация</NavLink></li>
                    </ul>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;