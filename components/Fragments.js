import styles from '../styles/Fragments.module.css'
import useSWR from 'swr';
import fetcher from "../utils/fetcher";
import Loader from "./Loader";
import NoResults from "./NoResults";

const endpoint = (query) => `/api/fragment/search?q=${query}`;

const content = (query) => {
	const { data, error } = useSWR(endpoint(query), fetcher);
	if (error) return <LoadingError/>
	if (!data) {
		return '';
	}
	if (!data.length) return <NoResults/>
	return (
		<ul className={styles.fragmentContainer}>
			{data.map((fragment) => (
				<li key={fragment.id} className={styles.fragment}>
					<h3>{fragment.title}</h3>
					<p>{fragment.content}</p>
				</li>
			))}
		</ul>
	)
}

const Fragments = (props) => {
	return (
		<div className={styles.container}>
			{content(props.query)}
		</div>
	)
}

export default Fragments;