const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const ongs = await connection('ongs').select('*');

		return response.json(ongs);
	},

	// A função é async porque o insert() pode demorar
	async create(request, response) {
		const { name, email, whatsapp, city, uf } = request.body;

		const id = generateUniqueId();

		// Inserir dados na tabela ongs
		// await espera o código finalizar para depois continuar
		await connection('ongs').insert({
			id, name, email, whatsapp, city, uf
		});

		return response.json({ id });
	}
}