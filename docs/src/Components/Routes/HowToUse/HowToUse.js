import { useEffect, useRef } from 'react';
import styles from './HowToUse.module.css';

import pinning1 from '../../../assets/how-to/pinning-1.png';
import pinning2 from '../../../assets/how-to/pinning-2.png';
import openingPopup1 from '../../../assets/how-to/opening-popup-1.png';
import openingPopup2 from '../../../assets/how-to/opening-popup-2.png';
import openingSettings1 from '../../../assets/how-to/opening-settings-1.png';
import openingSettings2 from '../../../assets/how-to/opening-settings-2.png';
import customizeSettings from '../../../assets/how-to/settings-page.mov';

const HowToUse = ({ navbarRef }) => {
	const wrapperRef = useRef(null);
	const contentsRef = useRef(null);

	useEffect(() => {
		navbarRef.current.style.boxShadow = '1px 4px 10px rgba(0, 0, 0, 0.1)';
		const navbarHeight = navbarRef.current.getBoundingClientRect().height;
		wrapperRef.current.style.top = `${navbarHeight}px`;
		contentsRef.current.style.top = `${navbarHeight}px`;
	}, [navbarRef]);

	const form =
		'https://docs.google.com/forms/d/e/1FAIpQLSfjPEHIUiKsMtI8nkM3bNHePT2EVwLg-frOozkWD8PXtO6UlQ/viewform';

	const handleAnchorClick = (event, id) => {
		event.preventDefault();

		const section = document.getElementById(id);

		if (section) {
			const navbarHeight = navbarRef.current.getBoundingClientRect().height;
			const offset = section.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({ top: offset - navbarHeight, behavior: 'smooth' });
		}
	};

	return (
		<div ref={wrapperRef} className={styles.wrapper}>
			<div ref={contentsRef} className={styles.contents}>
				<div className={styles.contents__heading}>Contents</div>

				<a
					href="#pinning"
					onClick={(event) => handleAnchorClick(event, 'pinning')}
					className={styles.contents__link}
				>
					Pinning to toolbar
				</a>

				<a
					href="#opening-popup"
					onClick={(event) => handleAnchorClick(event, 'opening-popup')}
					className={styles.contents__link}
				>
					Opening popup
				</a>

				<a
					href="#opening-settings"
					onClick={(event) => handleAnchorClick(event, 'opening-settings')}
					className={styles.contents__link}
				>
					Opening settings
				</a>

				<a
					href="#setting-up"
					onClick={(event) => handleAnchorClick(event, 'setting-up')}
					className={styles.contents__link}
				>
					Customize the settings
				</a>
			</div>

			<div className={styles.how__to}>
				<section className={styles.howto__header}>
					<h2 className={styles.howto__heading}>📖 How To Use</h2>
					<span className={styles.howto__text}>
						Congratulations on installing Toppings! Get ready to experience
						effortless browsing with our convenient features. No manual setup
						required – everything is preconfigured and starts working
						automatically once you install the extension.
					</span>
				</section>

				<section id="pinning" className={styles.container}>
					<h3 className={styles.howto__subheading}>Pinning to toolbar</h3>
					<span className={styles.howto__text}>
						Click on the puzzle icon in the top right corner of the browser and
						pin Toppings to the toolbar so it's always at hand.
					</span>
					<div className={styles.illustration__container}>
						<div className={styles.relative}>
							<img src={pinning1} alt="pinning the extension"></img>
							<img
								className={`${styles.illustration__fade} ${styles.overlay}`}
								src={pinning2}
								alt="pinning the extension"
							></img>
						</div>
					</div>
				</section>

				<section id="opening-popup" className={styles.container}>
					<h3 className={styles.howto__subheading}>Opening popup</h3>
					<span className={styles.howto__text}>
						Click on the Toppings icon in the toolbar to open the popup.
					</span>
					<div className={styles.illustration__container}>
						<div className={styles.relative}>
							<img
								className={styles.vh50}
								src={openingPopup1}
								alt="opening the popup"
							></img>
							<img
								className={`${styles.illustration__fade} ${styles.overlay} ${styles.vh50}`}
								src={openingPopup2}
								alt="opening the popup"
							></img>
						</div>
					</div>
				</section>

				<section id="opening-settings" className={styles.container}>
					<h3 className={styles.howto__subheading}>Opening settings</h3>
					<span className={styles.howto__text}>
						Click on the gear icon in the bottom left corner of the popup to
						open the settings.
					</span>
					<div className={styles.illustration__container}>
						<div className={styles.relative}>
							<img
								className={styles.vh50}
								src={openingSettings1}
								alt="opening the settings"
							></img>
							<img
								className={`${styles.illustration__fade} ${styles.overlay} ${styles.vh50}`}
								src={openingSettings2}
								alt="opening the settings"
							></img>
						</div>
					</div>
				</section>

				<section id="setting-up" className={styles.container}>
					<h3 className={styles.howto__subheading}>Customize the settings</h3>
					<span className={styles.howto__text}>
						The following settings page will open where you can explore and
						modify the settings to meet your requirements. Don't forget to save
						your changes by clicking on the "Save" button at the bottom of the
						page. If you ever want to revert to the default settings, click the
						"Restore Default" button next to the "Save" button.
					</span>
					<div className={styles.illustration__container}>
						<div className={styles.relative}>
							<video
								style={{ width: '100%', height: 'auto' }}
								autoPlay
								muted
								loop
								playsInline
							>
								<source src={customizeSettings} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
					<span className={styles.howto__text}>
						Let's dive into the customization options available in Toppings!
						Explore the following sections to adjust and personalize your
						video-watching experience to perfection:
					</span>
				</section>

				<section className={styles.container}>
					<h3 className={styles.howto__subheading}>Shortcuts Section:</h3>
					<ul>
						<li className={styles.howto__text}>
							Toggle Speed: Use the default 'S' key to toggle the playback
							speed.
						</li>
						<li className={styles.howto__text}>
							Seek Forward: Press the 'X' key to skip forward in the video. Seek
						</li>
						<li className={styles.howto__text}>
							Backward: Press the 'Z' key to rewind the video.
						</li>
					</ul>
				</section>
				<section className={styles.container}>
					<h3 className={styles.howto__subheading}>YouTube Watch Section:</h3>
					<ul>
						<li className={styles.howto__text}>
							Set Custom Playback Speed: Easily adjust the playback speed using
							the custom speed list.
						</li>
						<li className={styles.howto__text}>
							Set Custom Toggle Speed: The default toggle speed is 2x, but you
							can change it to your preference.
						</li>
						<li className={styles.howto__text}>
							Set Default Playback Speed: Choose your preferred default playback
							speed (default is 1x).
						</li>
						<li className={styles.howto__text}>
							Set Seek Backward Shortcut Duration: Customize the duration
							(default is 10 seconds) for the seek backward shortcut.
						</li>
						<li className={styles.howto__text}>
							Set Seek Forward Shortcut Duration: Customize the duration
							(default is 10 seconds) for the seek forward shortcut.
						</li>
					</ul>
				</section>
				<section className={styles.container}>
					<h3 className={styles.howto__subheading}>
						YouTube Playlist Section:
					</h3>
					<ul>
						<li className={styles.howto__text}>
							Enable/Disable Playlist Runtime Duration: Choose whether to
							display the runtime duration of the playlist.
						</li>
					</ul>
				</section>
				<section className={styles.container}>
					<h3 className={styles.howto__subheading}>📬 Need help?</h3>
					<span className={styles.howto__text}>
						If you have any issues, queries, or need assistance, please feel
						free to{' '}
						<a
							className={styles.howto__link}
							href={form}
							target="_blank"
							rel="noreferrer"
							draggable="false"
						>
							submit a bug report, provide feedback, or request a new feature
						</a>
						. Your input helps us improve Toppings and provide you with an even
						better browsing experience.
					</span>
				</section>
			</div>
		</div>
	);
};

export default HowToUse;
