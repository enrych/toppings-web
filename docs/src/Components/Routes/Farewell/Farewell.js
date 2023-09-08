import illustration from '../../../assets/farewell_illustration.png';
import CallToAction from '../../Browser/CallToAction';
import styles from './Farewell.module.css';

const Farewell = () => {
	const form =
		'https://docs.google.com/forms/d/e/1FAIpQLSfjPEHIUiKsMtI8nkM3bNHePT2EVwLg-frOozkWD8PXtO6UlQ/viewform';
	return (
		<main className={styles.farewell}>
			<div className={styles['farewell-wrapper']}>
				<div className={styles['farewell-content']}>
					<h2>Goodbye! We'll Miss You!</h2>
					<p>
						We're sorry to see you go, but we understand that circumstances
						change. We'd love to hear about your experience with Toppings and
						any feedback you may have. Your insights help us improve and provide
						a better experience for our users.
					</p>
					<CallToAction
						className={styles.cta}
						href={form}
						type="form"
						text="Help Us Improve!"
					></CallToAction>
				</div>
				<div className={styles['farewell-graphics']}>
					<img src={illustration} alt="Toppings Logo" draggable="false"></img>
				</div>
			</div>
		</main>
	);
};

export default Farewell;
