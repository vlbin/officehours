import '../styles/globals.css'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, {useState} from "react";

function MyApp({Component, pageProps}) {
	const [query, setQuery] = useState('');
	return (
		<div className={"container"}>
			<div className={styles.header}>
				<form onSubmit={e => e.preventDefault()}>
					<input type="hidden" value="something"/>
					<input
						autoComplete={"off"}
						type="text"
						name="q"
						value={query}
						onChange={e => setQuery(e.target.value)}
						id={styles.search}
						placeholder="Search..."
					/>
				</form>
				<div id={styles.profileButton}>
					<Link href="/profile">
						<a></a>
					</Link>
				</div>
			</div>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
