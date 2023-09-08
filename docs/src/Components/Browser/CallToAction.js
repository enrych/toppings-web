import styles from './CallToAction.module.css';

const CallToAction = (props) => {
	return (
		<div className={styles.cta + ' ' + props?.className}>
			<a
				className={styles.ctnBtn + ' ' + props?.className}
				href={props.href}
				target={props.href.startsWith('/') ? null : '_blank'}
				rel={props.href.startsWith('/') ? null : 'noopener noreferrer'}
				draggable="false"
			>
				<span
					className={`${styles['icon_button']} ${styles[props.type]}`}
				></span>
				{props.text}
			</a>
			{props?.children}
		</div>
	);
};

export default CallToAction;
