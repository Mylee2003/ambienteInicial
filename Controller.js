
//daqui
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log('Rodando o backend');
});

//até aqui é tudo padrão para o backend com express

//buscar o model de user para se comunicar com o banco de dados;
let user = models.User;

//route para se comunicar com o banco;
app.get('/login', async (req, res) => {

//variavel para buscar todos os valores da tabela users;
let findUser = await user.findAll();
await console.log(findUser);
res.json(findUser)
})

// a palavra reservada wait é importantissima para funções que são async;
//cada coisa que for fazer em que colocar.

app.post('/createUser', async (req, res) => {
  try {
  //método do sequelize para criar linhas no banco;
    const create = await user.create({
      email: req.body.email,
      password: req.body.password,
    //req é o padrão para dados que vêm do frontend;
	//body é outro padrão, que a gente definifiu na função lá no register;
	});
	
    console.log(create);
	//caçar erro:
  } catch (error) {
    console.log(error);
  }
});
