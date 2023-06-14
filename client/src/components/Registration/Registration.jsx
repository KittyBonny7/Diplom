import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AUTH_ROUTE, MAIN_ROUTE } from "../../const";
import "./Registration.css";
import { registration } from "../../queries/mainQuery";
import { Context } from "../..";

const Registration = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(Context);

  
  const regUser = async () => {
    try {
      if (
        email !== "" &&
        name !== "" &&
        surname !== "" &&
        email !== "" &&
        login !== "" &&
        password !== "" &&
        password2 !== ""
      ) {
        if (password === password2) {
          await registration(name, surname, email, login, password);
          if (localStorage.getItem("token") != null) {
            user.setIsAuth(true);
            navigate(MAIN_ROUTE);
          }
          else {
            // Ошибка: Пользователь с такой почтой или логином уже зарегистрирован
            alert("Пользователь с такой почтой или логином уже зарегистрирован");
          }
        } else {
          alert("Пароли не совпадают");
        }
      }
    } catch (error) {}
  };

  return (
    <div className="main__regis">
      <span className="zagolovok">Зарегистрироваться</span>
      <div className="pp">
        <span className="p2">Имя</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="pp">
        <span className="p2">Фамилия</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
      </div>
      <div className="pp">
        <span className="p2">Почта</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
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
      <div className="pp">
        <span className="p2">Подтвердите Пароль</span>
        <div>
          <input
            className="inp"
            type="text"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button type="button" className="regis__btn" onClick={regUser}>
          Зарегистрироваться
        </button>
        <div className="gg11">
          <span>Есть аккаунт?</span>
          <NavLink to={AUTH_ROUTE} className="navlink">
            Войти
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registration;
