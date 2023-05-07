const Pool = require('pg').Pool
const pool = new Pool({
	user: 'chan',
	host: 'dpg-cfuc26arrk0c831npb1g-a.oregon-postgres.render.com',
	database: 'bank_det',
	password: 'l3AK61KAp0yrosaj2CFvDaiayUYkWTTD',
	port: 5432,
	ssl: 'true',
  })
  


const SearchbyValue = (request, response) => {
	const q = request.query.q;
	const q2 = request.query.q2;
	const q3 = request.query.q3;
	pool.query('SELECT name,price from flight WHERE source ILIKE $1 and destination ILIKE $2 and date ILIKE $3', [q,q2,q3 ], (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
})
}

module.exports = {

SearchbyValue,
}
