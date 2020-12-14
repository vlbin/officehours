// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../../../db/database";

export default async (req, res) => {
	let id = await req.query.id;
	let sql = `
		SELECT 
			q.id AS q_id, 
			q.title AS title, 
			a.content AS content,
			CONCAT(u.first_name, ' ', u.last_name) AS name,
			c.code as course_code,
			c.name as course_name 
		FROM question q
		LEFT JOIN "answer" a ON a.question_id = q.id
		LEFT JOIN "user" u ON a.user_id = u.id
		LEFT JOIN course AS c ON q.course_id = c.id
		WHERE q.course_id = $1
	`;
	const {rows} = await db.query(sql, [id]);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	console.log(rows);
	res.end(JSON.stringify(rows));
}