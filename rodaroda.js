const { Sequelize, DataTypes } = require('sequelize');
const https = require('https');

// Configuração do Sequelize
const sequelize = new Sequelize('vidaplena', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Modelo da tabela Clinicas
const Clinica = sequelize.define('clinica', {
  nome_da_clinica: DataTypes.STRING,
  cep: DataTypes.STRING,
  uf: DataTypes.STRING,
  municipio: DataTypes.STRING,
  bairro: DataTypes.STRING,
  logradouro: DataTypes.STRING,
  numero: DataTypes.STRING,
});

// Função para verificar se a clínica já existe no banco de dados
async function clinicaJaCadastrada(clinica) {
  const existingClinica = await Clinica.findOne({
    where: {
      nome_da_clinica: clinica.nome_da_clinica,
      cep: clinica.cep,
      uf: clinica.uf,
      municipio: clinica.municipio,
      bairro: clinica.bairro,
      logradouro: clinica.logradouro,
      numero: clinica.numero,
    },
  });

  return !!existingClinica;
}

// Função para obter e salvar clínicas no banco de dados
async function obterESalvarClinicas() {
  const api_key = 'AIzaSyCghJp5DYojJ-0-zYyBKD0b3lhbXGPqPbI';
  const endpoint = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  const query = 'clínicas médicas em Guarulhos, SP, Brasil';

  let nextPageToken = '';

  try {
    do {
      // Obter dados da API do Google Places usando 'fetch' e a token de próxima página
      const response = await fetch(
        `${endpoint}?query=${query}&key=${api_key}&pagetoken=${nextPageToken}`
      );
      const data = await response.json();
      const results = data.results;

      // Inserir clínicas no banco de dados
      for (const result of results) {
        const endereco = result.formatted_address.split(', ');
        const [cep, uf, municipio, bairro, logradouro, numero] =
          endereco.slice(-6);

        const novaClinica = {
          nome_da_clinica: result.name,
          cep,
          uf,
          municipio,
          bairro,
          logradouro,
          numero,
        };

        // Verificar se a clínica já está cadastrada antes de adicioná-la
        const jaCadastrada = await clinicaJaCadastrada(novaClinica);

        if (!jaCadastrada) {
          await Clinica.create(novaClinica);
        }
      }

      nextPageToken = data.next_page_token || '';
    } while (nextPageToken);

    console.log('Clínicas cadastradas com sucesso!');
  } catch (error) {
    console.error('Erro ao obter dados da API:', error.message);
  }
}

// Sincronizar o modelo com o banco de dados e, em seguida, obter e salvar as clínicas
sequelize
  .sync()
  .then(() => {
    obterESalvarClinicas();
  })
  .catch((error) => {
    console.error(
      'Erro ao sincronizar modelo com o banco de dados:',
      error.message
    );
  });
