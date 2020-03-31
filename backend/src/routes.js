const express = require('express');

// Validações
const { celebrate, Segments, Joi } = require('celebrate');

const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/*
Tipos de parâmetros e como acessar na request:

Query Params: Parâmetros nomeados enviados na rota após '?'
request.query

Route Params: Parâmetros utilizados para identifcar recursos '/users/:id'
request.params

Request Body: Corpo da requisição usado para criar ou alterar recursos
request.body
*/

routes.post('/sessions', SessionController.create);

// Por ser a validação, o celebrate() precisa vir antes do create
routes.post('/ongs', celebrate({
	// Sempre que a chave de um objeto for uma variável, é necessário colocá-lo entre []
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(11),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2)
	})
}), OngController.create);

routes.get('/ongs', OngController.index);

routes.post('/incidents', celebrate({
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required()
	}).unknown(),
	[Segments.BODY]: Joi.object().keys({
		title: Joi.string().required(),
		description: Joi.string().required(),
		value: Joi.number().required()
	})
}), IncidentController.create);

routes.get('/incidents', celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number()
	})
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required()
	})
}), IncidentController.delete);

routes.get('/profile', celebrate({
	// A validação do headers é diferente porque contém várias chaves que são enviadas de qualquer forma
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required()
	}).unknown()
}), ProfileController.index);

// Exportar uma variável de dentro do arquivo
module.exports = routes;
