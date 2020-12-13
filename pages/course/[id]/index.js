import useSWR from "swr";
import { useRouter } from 'next/router'
import fetcher from "../../../utils/fetcher";
import NoResults from "../../../components/NoResults";
import styles from "../../../styles/Course.module.css";
import Link from "next/link";

const endpoint = (id) => `/api/course/${id}`;

const content = (id) => {
	const { data, error } = useSWR(endpoint(id), fetcher);
	if (error) return <div>error</div>;
	if (!data) {
		return 'what';
	}
	if (!data.length) return <NoResults/>
	return (
		<ul className={styles.questions}>
			{data.map((question) => (
				<li key={question.id} className={styles.question}>
					<h3>{question.title}</h3>
					<p>{question.content}</p>
				</li>
			))}
		</ul>
	)
}

const course = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			{content(id)}
		</div>
	)
}

export default course;