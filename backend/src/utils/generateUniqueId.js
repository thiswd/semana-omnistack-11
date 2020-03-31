const crypto = require('crypto')

module.exports = function generateUniqueId() {
	// Gera 4 bytes de caracteres aleatórios e converte para uma string to tipo hexadecimal
	return crypto.randomBytes(4).toString('HEX');
}