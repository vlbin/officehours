import styles from '../styles/NoResults.module.css'
const NoResults = () => {
	return (
		<div className={styles.container}>
			<p className={styles.emoji}>🤷‍♂</p>
			<p className={styles.text}>There's nothing here!</p>
		</div>
	)
}

export default NoResults;