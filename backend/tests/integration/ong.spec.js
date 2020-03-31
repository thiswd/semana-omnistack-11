const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ONG', () => {
	// Executar as migrations antes de cada teste
	beforeEach(async () => {
		await connection.migrate.rollback(); // Zerar o db antes de começar o teste
		await connection.migrate.latest();
	});

	// Desfazer a conexão do teste com o banco de dados
	afterAll(async () => {
		await connection.destroy();
	});

	it('should be able to create a new ONG', async () => {
		const response = await request(app)
			.post('/ongs')
			// .set('Authorization', id_valido)
			.send({
				name: "Greenpeace",
				email: "contato@greenpeace.com",
				whatsapp: "1234567890",
				city: "São Paulo",
				uf: "SP"
			});

		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	});
});