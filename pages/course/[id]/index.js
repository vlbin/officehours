import useSWR from "swr";
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import {fetcher} from "../../../utils/fetcher";
import NoResults from "../../../components/NoResults";
import styles from "../../../styles/Course.module.css";
import Link from "next/link";
import Loader from "../../../components/Loader";

const endpoint = (id) => `/api/course/${id}`;

const content = (id) => {
	const {data, error} = useSWR(endpoint(id), fetcher);
	if (error) return <div>error</div>;
	if (!data) {
		return 'what';
	}
	if (!data.length) return <NoResults/>
	return (
		<ul className={styles.questions}>
			{data.map((question) => (
				<li key={question.q_id} className={styles.question}>
					<h3>{question.title}</h3>
					<span>answered by: {question.name}</span>
					<p>{question.content}</p>
				</li>
			))}
		</ul>
	)
}

export async function getServerSideProps({query}) {
	const data = await fetcher(`/api/course/${query.id}`);
	return { props: { data } }
}

const Course = ({data}) => {
	if (!data) {
		return <Loader/>;
	}
	if (!data.length) return <NoResults/>
	return (
		<div>
			<ul className={styles.questions}>
				{data.map((question) => (
					<li key={question.q_id} className={styles.question}>
						<h3>{question.title}</h3>
						<span>answered by: {question.name}</span>
						<p>{question.content}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Course;