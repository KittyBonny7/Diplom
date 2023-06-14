import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { REG_ROUTE } from "../../const";
import { authUser } from "../../queries/mainQuery";
import { Context } from "../..";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const auth = async () => {
    try {
      console.log(login, password);
      const data = await authUser(login, password);
      console.log(data);
      if (data) {
        user.setIsAuth(true);
        navigate("/");
      }
    } catch (error) {
      alert("Не правильный логин или пароль");
    }
  };

  return (
    <div className="main__regis">
      <span className="zagolovok">Авторизация</span>
      <div className="pp">
        <span className="p2">Логин</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
      </div>
      <div className="pp">
        <span className="p2">Пароль</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button type="button" className="regis__btn" onClick={auth}>
          Войти
        </button>
        <div className="gg11">
          <span>Нет аккаунта?</span>
          <NavLink to={REG_ROUTE} className="navlink">
            Зарегистрироваться
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Auth;
