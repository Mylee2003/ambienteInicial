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
let ratings = models.Ratings;
let adress = models.Adress;
let adressUser = models.AdressUser;

//route para se comunicar com o banco;
app.post('/login', async (req, res) => {
  let findUser = await user.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (findUser) {
    res.type('text').send({ mensagem: 'true' });
  } else {
    res.type('text').send({ mensagem: 'false' });
  }
});

// a palavra reservada wait é importantissima para funções que são async;
//cada coisa que for fazer em que colocar.

app.post('/createUser', async (req, res) => {
  try {
    //método do sequelize para criar linhas no banco;
    const create = await user.create({
      email: req.body.email,
      password: req.body.password,
      //req é o padrão para dados que vêm do frontend;
      //body é outro padrão, que a gente definifiu na função lá no regisnppx seqeulize
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/getAllRatings', async (req, res) => {
  let allRatings = await ratings.findAll();
  res.send(allRatings);
});

app.get('/getAllAdresses', async (req, res) => {
  let allAdresses = await adress.findAll();
  res.send(allAdresses);
});

app.get('/getAllUsers', async (req, res) => {
  let allUsers = await user.findAll();
  res.send(allUsers);
});

app.post('/createRatings', async (req, res) => {
  try {
    //método do sequelize para criar linhas no banco;
    const create = await ratings.create({
      texto: req.body.texto,
      nota: req.body.nota,
      idUser: req.body.idUser,
    });
  } catch (error) {
    console.log(error);
  }
});

<<<<<<< HEAD
app.get('/getAllUsers', async (req, res) => {
  let allUsers = await user.findAll();
  console.log(allUsers);
  res.send(allUsers)
=======
app.post('/createAdress', async (req, res) => {
  try {
    // Verificar se o endereço já existe
    const existingAdress = await adress.findOne({
      where: {
        cep: req.body.cep,
        numero: req.body.numero,
      },
    });

    if (existingAdress) {
      // O endereço já existe, crie apenas o AdressUser
      const createUserAdress = await adressUser.create({
        idUser: req.body.userId,
        idAdress: existingAdress.id,
      });
      res.status(200).send('AdressUser criado com sucesso');
    } else {
      // O endereço não existe, crie o Adress e o AdressUser
      const createdAdress = await adress.create({
        cep: req.body.cep,
        uf: req.body.uf,
        municipio: req.body.municipio,
        bairro: req.body.bairro,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        userId: req.body.userId,
      });

      // Crie o AdressUser relacionando-o ao novo Adress
      const createUserAdress = await adressUser.create({
        idUser: req.body.userId,
        idAdress: createdAdress.id,
      });

      res.status(200).send('Adress e AdressUser criados com sucesso');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
>>>>>>> 0144942ecca56fe18b6f3cbc36655aafae3a75d7
});
