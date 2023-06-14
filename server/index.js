require("dotenv").config()
const express = require("express")
const cors = require("cors")
const sequelize = require("./db")
const path = require("path")
const port = process.env.PORT
const uuid = require("uuid")
const jwt = require("jsonwebtoken")
const fileUpload = require('express-fileupload')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload())


const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(port, () =>{
			console.log(`сервер работает на ${port} порту`)
		})
	} catch (error) {
		
	}
}

start()

const generatejwt = (name, surname, email, login, password) => {
	return jwt.sign(
		{
			name, surname, email, login, password
		},
		process.env.SECRET_WORD,
		{
			expiresIn: "24h"
		}
	)
}

app.post("/registration", async (req, res) => {
	try {
		const {name, surname, email, login, password} = req.body
		const getLogin = sequelize.query(`select login from users where login = '${login}'`)
		const getEmail = sequelize.query(`select email from users where email = '${email}'`)
		console.log(getEmail[0], getLogin[0])
		if(getEmail[0] == undefined && getLogin[0] == undefined){
			await sequelize.query(`insert into users (name, surname, email, login, password) values(
				'${name}',
				'${surname}',
				'${email}',
				'${login}',
				'${password}'
			)`)
			console.log("registration done")
			const token = generatejwt(name, surname, email, login, password)
			const ret = [true, {token}]
			return res.send(ret)
		}
		else{
			return res.send([false])
		}
	} catch (error) {
			return res.send([false])
	}
})

app.post('/auth', async (req, res) => {
	try {
		const {login, password} = req.body
		const getDataUser = await sequelize.query(`select * from users where login = '${login}'`)
		if(getDataUser[0][0].password == password){
			const token = generatejwt(getDataUser[0][0].name, getDataUser[0][0].surname, getDataUser[0][0].email, getDataUser[0][0].login, getDataUser[0][0].password)
			return res.send([true, {token}])			
		}
		else{
			return res.send([false])
		}
	} catch (error) {
		res.send(400)
	}
})

// Обработчик GET-запроса на маршрут "/check-user"
app.get("/check-user", (req, res) => {
	const { login, email } = req.query;
	const userExists = checkIfUserExists(login, email);
	
	// Возвращаем результат проверки в формате JSON
	res.json({ isExist: userExists });
  })
