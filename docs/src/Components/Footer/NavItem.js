import styles from './NavItem.module.css';

const NavItem = (props) => {
	return (
		<li className={styles['item-link']}>
			<a
				href={props.href}
				onClick={() => {
					if (props.href.startsWith('/')) {
						window.scrollTo(0, 0);
					}
				}}
				target={props.href.startsWith('/') ? null : '_blank'}
				rel={props.href.startsWith('/') ? null : 'noopener noreferrer'}
			>
				{props.children}
			</a>
		</li>
	);
};

export default NavItem;
