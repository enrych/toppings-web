import './App.css';
import navStyles from './Components/NavBar/NavBar.module.css';
import heroStyles from './Components/Routes/Home/HeroSection.module.css';

import { Navigate, Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ScrollToTop from './Components/Utils/ScrollToTop';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Routes/Home/Home';
import Farewell from './Components/Routes/Farewell/Farewell';
import Greetings from './Components/Routes/Greetings/Greetings';
import Footer from './Components/Footer/Footer';
import HowToUse from './Components/Routes/HowToUse/HowToUse';

function App() {
	const navbarRef = useRef(null);
	const footerRef = useRef(null);

	useEffect(() => {
		const navbar = document.querySelector('nav');
		const hero = document.querySelector(`.${heroStyles.hero}`);
		let fillNavAt;
		let showCtaAt;
		const handleScroll = () => {
			fillNavAt =
				document.querySelector('.App').getBoundingClientRect().top + 10;
			showCtaAt = document.querySelector('.App').getBoundingClientRect().bottom;
			if (document.querySelector(`.${heroStyles.hero}`)) {
				fillNavAt = hero.getBoundingClientRect().top + 40;
				showCtaAt = hero.getBoundingClientRect().bottom;
			}
			if (fillNavAt <= 0) {
				navbar.classList.add(navStyles.fixed);
			} else {
				navbar.classList.remove(navStyles.fixed);
			}
			if (showCtaAt <= 0) {
				navbar.classList.add(navStyles.active);
			} else {
				navbar.classList.remove(navStyles.active);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<HashRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<div className="App">
							<ScrollToTop />
							<NavBar />
							<Home />
							<Footer />
						</div>
					}
				/>
				<Route
					exact
					path="/greetings"
					element={
						<div className="App">
							<ScrollToTop />
							<NavBar />
							<Greetings />
							<Footer />
						</div>
					}
				/>
				<Route
					exact
					path="/farewell"
					element={
						<div className="App">
							<ScrollToTop />
							<NavBar />
							<Farewell />
							<Footer />
						</div>
					}
				/>
				<Route
					exact
					path="/how-to-use"
					element={
						<div className="App">
							<ScrollToTop />
							<NavBar ref={navbarRef} />
							<HowToUse navbarRef={navbarRef} footerRef={footerRef} />
						</div>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
