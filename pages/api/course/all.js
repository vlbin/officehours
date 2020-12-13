// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../../db/database";

export default async (req, res) => {
	const {rows} = await db.query('SELECT * from course');
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(rows));
}