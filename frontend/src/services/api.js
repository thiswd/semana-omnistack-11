import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3333'
	// Parte da url mantida em todas as chamadas
});

export default api;