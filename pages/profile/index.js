import Head from 'next/head'
import styles from '../../styles/Profile.module.css';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

const profileContent = () => {
	const { data, error } = useSWR('/api/user', fetcher);

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>

	return <div>hello {data.name.toLowerCase()} who is {data.age} years old!</div>
}

const profile = () => {
	let content = profileContent();

	return (
		<div className={"container"}>
			{content}
		</div>
	)
}

export default profile;
