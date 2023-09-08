import styles from './ContentSection.module.css';
import Feature from './Feature';
import BrowserNativeCTA from '../../Browser/BrowserNative';
import feature1 from '../../../assets/feature1.png';
import feature2 from '../../../assets/feature2.png';
import feature3 from '../../../assets/feature3.png';

const ContentSection = () => {
	const contents = [
		{
			key: 1,
			image: feature1,
			title: 'Calculate Playlist Runtime',
			subtitle: 'Calculate the total duration of your playlists',
			description: 'Know exactly how long your playlists will take to watch.',
		},
		{
			key: 2,
			image: feature2,
			title: 'Shortcut to Efficiency',
			subtitle: 'Effortlessly seek forward or backward, toggle playback speed',
			description: 'Navigate YouTube like a pro with handy shortcuts.',
		},
		{
			key: 3,
			image: feature3,
			title: 'Personalized Playback Speed',
			subtitle: 'Set your preferred playback speed',
			description:
				'Watch videos at the perfect speed for your learning or entertainment.',
		},
	];
	return (
		<div className={styles.contents}>
			<div className={styles['feature-wrapper']}>
				<span className={styles.strip}></span>
				{contents.map((feature, index) => {
					return (
						<Feature
							key={feature.key}
							image={feature.image}
							title={feature.title}
							subtitle={feature.subtitle.toUpperCase()}
							description={feature.description}
							isFirst={index === 0}
						></Feature>
					);
				})}
			</div>
			<section className={styles['last-section']}>
				<h2>Don't Miss Out on Toppings</h2>
				<p>
					Experience the web like never before with the all-new Toppings.
					Unleash a new era of exploration and redefine the way you browse.
					Seamlessly personalize websites, unleash powerful productivity tools,
					and embark on a journey of limitless possibilities. Upgrade to
					Toppings today and discover a whole new world of web exploration at
					your fingertips.
				</p>
				<BrowserNativeCTA className={styles.cta} />
			</section>
		</div>
	);
};

export default ContentSection;
