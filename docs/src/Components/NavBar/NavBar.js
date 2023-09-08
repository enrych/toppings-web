import logo from '../../assets/icon512.png';
import styles from './NavBar.module.css';
import BrowserNativeCTA from '../Browser/BrowserNative';
import { useNavigate } from 'react-router';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const NavBar = forwardRef((props, ref) => {
	const navRef = useRef(null);
	useImperativeHandle(ref, () => navRef.current);
	const navigate = useNavigate();
	return (
		<nav ref={navRef}>
			<div
				className={styles.logo}
				onClick={() => {
					navigate('/');
					window.scrollTo(0, 0);
					window.location.reload();
				}}
			>
				<img src={logo} alt="Toppings Logo" draggable="false" />
				<h1>Toppings</h1>
			</div>
			<BrowserNativeCTA
				className={`${styles.hidden} ${styles.visible} ${styles.cta}`}
			></BrowserNativeCTA>
		</nav>
	);
});

export default NavBar;
