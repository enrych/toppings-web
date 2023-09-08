import illustration from '../../../assets/greetings_illustration.png';
import CallToAction from '../../Browser/CallToAction';
import styles from './Greetings.module.css';

const Greetings = () => {
	return (
		<main className={styles.greetings}>
			<div className={styles['greetings-wrapper']}>
				<div className={styles['greetings-content']}>
					<h2>Welcome to Toppings!</h2>
					<p>
						We're excited to have you on board. Get ready to take control of
						your browsing experience and discover the possibilities with
						Toppings. Start exploring the extension now and learn how to make
						the most of its features by checking out our "How to Use" guide.
						Happy browsing!
					</p>
					<CallToAction
						className={styles.cta}
						href={'/#/how-to-use'}
						type="how__to"
						text="How To Use?"
					></CallToAction>
				</div>
				<div className={styles['greetings-graphics']}>
					<img src={illustration} alt="Toppings Logo" draggable="false"></img>
				</div>
			</div>
		</main>
	);
};

export default Greetings;
