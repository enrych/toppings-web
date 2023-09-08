import NavList from './NavList';
import styles from './FooterNav.module.css';

const FooterNav = () => {
	const navList = [
		{
			title: 'Sitemap',
			links: [
				{
					title: 'Home',
					href: '/',
				},
				{
					title: 'How To Use',
					href: '/#/how-to-use',
				},
			],
		},
		{
			title: 'Platforms',
			links: [
				{
					title: 'Chrome',
					href: 'https://chrome.google.com/webstore/detail/toppings/aemiblppibhggpgijajindcmmomboibl',
				},
				{
					title: 'Firefox',
					href: 'https://addons.mozilla.org/en-US/firefox/addon/toppings-for-youtube/',
				},
				{
					title: 'Manual Install',
					href: 'https://github.com/enrich-platforms/Toppings',
				},
			],
		},
		{
			title: 'Community',
			links: [
				{ title: 'Donate', href: 'https://github.com/sponsors/DarhkVoyd' },
				{
					title: 'Contribute',
					href: 'https://github.com/enrich-platforms/Toppings/tree/dev',
				},
				{
					title: 'Help Us Improve',
					href: 'https://docs.google.com/forms/d/e/1FAIpQLSfjPEHIUiKsMtI8nkM3bNHePT2EVwLg-frOozkWD8PXtO6UlQ/viewform',
				},
				{
					title: 'Report bugs',
					href: 'https://github.com/enrich-platforms/Toppings/issues',
				},
				{ title: 'Support', href: 'mailto:support@grabtoppings.xyz' },
			],
		},
	];

	const middleIndex = Math.ceil(navList.length / 2);
	return (
		<div className={styles['footer-nav']}>
			<div className={styles['list-group']}>
				{navList.slice(0, middleIndex).map((category, i) => {
					return (
						<NavList key={i} title={category.title} links={category.links} />
					);
				})}
			</div>
			<div className={styles['list-group']}>
				{navList.slice(middleIndex).map((category, i) => {
					return (
						<NavList key={i} title={category.title} links={category.links} />
					);
				})}
			</div>
		</div>
	);
};

export default FooterNav;
