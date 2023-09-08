import React, { useRef, useEffect } from 'react';
import styles from './Feature.module.css';

const Feature = (props) => {
	const sectionRef = useRef(null);
	const featureWrapperRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const section = sectionRef.current;
			const featureWrapper = featureWrapperRef.current;

			if (section && featureWrapper) {
				const { top, bottom, height } = section.getBoundingClientRect();
				const windowHeight = window.innerHeight;

				const isFirstFeature = featureWrapper.classList.contains(
					styles['first-feature']
				);

				if (isFirstFeature && top <= 0 && bottom > windowHeight / 2) {
					// Fix the image in the vertical center for the first feature component
					featureWrapper.style.position = 'fixed';
					featureWrapper.style.top = '50%';
					featureWrapper.style.transform = 'translateY(-50%)';
				} else if (
					!isFirstFeature &&
					top < windowHeight / 2 &&
					bottom > windowHeight / 2
				) {
					// Fix the image in the vertical center for the rest of the feature components
					featureWrapper.style.position = 'fixed';
					featureWrapper.style.top = '50%';
					featureWrapper.style.transform = 'translateY(-50%)';
				} else {
					// Set the image back to normal flow
					featureWrapper.style.position = 'static';
					featureWrapper.style.transform = 'none';
				}

				// Calculate the opacity based on scroll position
				const opacity = Math.sin(((top + height / 2) / windowHeight) * Math.PI);

				// Set opacity for the section
				section.style.opacity = opacity;
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		return () => {
			// Remove scroll event listener on component unmount
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section ref={sectionRef} className={styles.feature}>
			<div
				ref={featureWrapperRef}
				className={`${styles['feature-container']} ${
					props.isFirst ? styles['first-feature'] : ''
				}`}
			>
				<div className={styles['feature-graphics']}>
					<img src={props.image} alt="Features of Toppings" draggable="false" />
				</div>
				<div className={styles['feature-content']}>
					<h3>{props.title}</h3>
					<h2>{props.subtitle}</h2>
					<p>{props.description}</p>
				</div>
			</div>
		</section>
	);
};

export default Feature;
