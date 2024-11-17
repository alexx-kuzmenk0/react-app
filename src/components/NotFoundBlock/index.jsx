import styles from './NotFound.module.scss'


const NotFoundBlock = () => {
	return (
		<h1 className={styles.root}>
			<p>Error</p>
			<span>(-_-)</span> <br/>
			<span>404 NotFound or u stupid</span>
		</h1>
	);
};

export default NotFoundBlock;