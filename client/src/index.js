import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import UserStore from './store/userStore';
import './fonts/montserrat-v25-cyrillic_latin-regular.woff2';
import './fonts/montserrat-v25-cyrillic_latin-regular.woff';
import './fonts/montserrat-v25-cyrillic_latin-600.woff2';
import './fonts/montserrat-v25-cyrillic_latin-600.woff';
import './fonts/montserrat-v25-cyrillic_latin-700.woff2';
import './fonts/montserrat-v25-cyrillic_latin-700.woff';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)

root.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App />
    </Context.Provider>

);

