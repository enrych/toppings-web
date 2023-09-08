import illustration from '../../../assets/hero_illustration.png';
import BrowserNativeCTA from '../../Browser/BrowserNative';
import styles from './HeroSection.module.css';

const HeroSection = () => {
	return (
		<main className={styles.hero}>
			<div className={styles['hero-wrapper']}>
				<div className={styles['hero-content']}>
					<h2>Seamless Experience for Your Convenience</h2>
					<p>
						Toppings is a open-source browser extension designed to elevate your
						experience. With Toppings, you can unlock a new level of
						customization and convenience. Seamlessly enhance your favorite
						websites, streamline your workflow, and enjoy a more personalized
						browsing experience.
					</p>
					<BrowserNativeCTA className={styles.heroCTA}>
						<p className={styles.heroCTA}>Rating: ★★★★★</p>
					</BrowserNativeCTA>
				</div>
				<div className={styles['hero-graphics']}>
					<img src={illustration} alt="Toppings Logo" draggable="false"></img>
				</div>
			</div>
		</main>
	);
};

export default HeroSection;
