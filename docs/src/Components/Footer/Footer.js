import { forwardRef, useRef, useImperativeHandle } from 'react';
import AboutCompany from './AboutCompany';
import styles from './Footer.module.css';

import FooterNav from './FooterNav';
const Footer = forwardRef((props, ref) => {
	const footerRef = useRef(null);
	useImperativeHandle(ref, () => footerRef.current);
	return (
		<footer ref={footerRef}>
			<div className={styles.container}>
				<div className={styles.content}>
					<AboutCompany />
					<FooterNav />
				</div>
				<div className={styles.copyright}>
					<p>© 2023 Enrich Platforms, Inc. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
});

export default Footer;
