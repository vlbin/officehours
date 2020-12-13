// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../../db/database";

const {PerformanceObserver, performance} = require('perf_hooks');

const entries = [
	{
		id: 1,
		title: 'how to be fkn king 👑',
		content: 'lorem ipsum dolor sit amet',
	},
	{
		id: 2,
		title: 'why government matters',
		content: 'it doesn\'t',
	},
];

export default async (req, res) => {
	let query = req.query.q;
	const {rows} = await db.query('SELECT * from fragments');
	const matching = rows.filter(fragment => {
		return Object.values(fragment)
			.filter(prop => typeof prop === 'string')
			.filter(prop => prop.includes(query)).length
	});
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(matching));
}