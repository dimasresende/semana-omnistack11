const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create); // cria a sessão de uma ong (login)

routes.get('/ongs', OngController.index); // lista as ongs cadastradas no banco
routes.post('/ongs', OngController.create); // cadastra a ong no banco com os dados enviados pelo metodo post

routes.get('/incidents', IncidentController.index); // lista os incidentes de todas as ongs
routes.post('/incidents', IncidentController.create); // cadastra o incidente de uma ong
routes.delete('/incidents/:id', IncidentController.delete); // deleta o incidente de uma ong

routes.get('/profile', ProfileController.index); // lista o incidente de uma ong

module.exports = routes;