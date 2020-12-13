// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../../../db/database";

export default async (req, res) => {
	let id = req.query.id;
	const {rows} = await db.query(`SELECT * FROM question WHERE course_id = ${id}`);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(rows));
}