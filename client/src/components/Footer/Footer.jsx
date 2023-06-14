import React from 'react';
import './Footer.css';
import '../../App.css';

const Footer = () => {
    return (
        <div>
             <footer>
                <div className='footer-container'>
                    <div>
                        <p>Горячая линия: <a href="tel:+79023285062">+7 (902) 328-50-62</a></p>
                    </div>
                    <div>
                        <p>г. Калуга, ул. Дубровица, д.2</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;