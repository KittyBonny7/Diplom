import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, REG_ROUTE, MAIN_ROUTE } from '../../const';
import "./Buttons.css";
import { Context } from "../..";

const AuthButton = () => {

    const navigate = useNavigate();
    const { user } = useContext(Context);

    const handleButtonClick = () => {
    navigate(AUTH_ROUTE);
    };
    const handleButtonClick1 = () => {
    navigate(REG_ROUTE);
    };
    const leave = () => {
        localStorage.removeItem("token");
        user.setIsAuth(false);
        navigate("/");
      };

    return (
        <div>
            {user._isAuth === false &&(
                <div className='buttons'>
                    <div className='auth_button'>
                        <button onClick={handleButtonClick} className='authbutton'>Вход</button>
                    </div>
                    <div className='reg_button'>
                        <button onClick={handleButtonClick1} className='regbutton'>Регистрация</button>
                    </div>
                </div>
            )}
            {user._isAuth === true && (
                <div className='buttons'>
                    <div className='leavebutton'>
                        <button onClick={leave} to={MAIN_ROUTE} className='leavebutton'>Выход</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthButton;