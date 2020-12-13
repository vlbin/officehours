const { Pool, Client } = require('pg')
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'mind',
	password: 'qwerty',
	port: 5432,
});

module.exports = {
	query: (text, params) => pool.query(text, params),
}