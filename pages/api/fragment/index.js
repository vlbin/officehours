// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from "../../../db/database";

const data = [
	{
		id: 1,
		title: 'how to make soup 🍜',
		content: 'lorem ipsum dolor sit amet',
	},
	{
		id: 2,
		title: 'why government matters',
		content: 'it doesn\'t',
	},
];

export default (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	const data = client.query(`SELECT * FROM fragments`, (err, res) => {
		console.log(res);
	});
	res.end(JSON.stringify(data));
}