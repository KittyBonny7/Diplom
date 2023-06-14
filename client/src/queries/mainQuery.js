import axios from "axios"
import jwtDecode from "jwt-decode"
import { serverPort } from "../const"

const $host = axios.create({
	baseURL: serverPort
})

  
// mifon
export const registration = async (name, surname, email, login, password) => {
	const {data} = await $host.post("/registration", {name, surname, email, login, password})
	if(data[0] === true) {
		localStorage.setItem("token", data[1].token)
		return jwtDecode(data[1].token)
	}else{
		alert("Пользователь с такой почтой или логином уже зарегистрирован")
	}
}


export const authUser =  async (login, password) => {
	const {data} = await $host.post("/auth", {login, password})
	if(data[0] === true) {
		localStorage.setItem("token", data[1].token)
		return true
	}else{
		alert("Не правильный логин или пароль")
		return false
	}
}
