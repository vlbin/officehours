import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from "swr";
import React, {useCallback, useState} from 'react'
import Fragments from "../components/Fragments";
import Link from 'next/link'
import fetcher from "../utils/fetcher";
import NoResults from "../components/NoResults";

const endpoint = () => `/api/course/all`;

const content = () => {
	const { data, error } = useSWR(endpoint(), fetcher);
	if (error) return <div>error</div>;
	if (!data) {
		return 'what';
	}
	if (!data.length) return <NoResults/>
	return (
		<ul className={styles.courseList}>
			{data.map((course) => (
				<li key={course.id} className={styles.course}>
					<Link href={`course/${course.id}`}>
						<a>
							<h3>💸{course.name}<span> | {course.code}</span></h3>
						</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

const home = ({fragments}) => {
	const [query, setQuery] = useState('');
	return (
		<div>
			{content()}
		</div>
	)
}

export default home;