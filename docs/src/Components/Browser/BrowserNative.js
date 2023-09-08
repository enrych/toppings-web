import CallToAction from './CallToAction';

const BrowserNativeCTA = (props) => {
	const natives = {
		chrome: {
			store:
				'https://chrome.google.com/webstore/detail/toppings/aemiblppibhggpgijajindcmmomboibl',
		},
		firefox: {
			store:
				'https://addons.mozilla.org/en-US/firefox/addon/toppings-for-youtube/',
		},
	};

	const supported = ['chrome', 'firefox'];
	const browser = supported.includes(getBrowser()) ? getBrowser() : 'browser';
	const store = natives[browser]
		? natives[browser].store
		: 'https://github.com/DarhkVoyd/Toppings';
	return (
		<CallToAction
			className={props.className}
			href={store}
			type={browser}
			text={`Add to ${browser.charAt(0).toUpperCase() + browser.slice(1)}${' '}
		- It's Free`}
		>
			{props?.children}
		</CallToAction>
	);
};

const getBrowser = () => {
	let userAgent = navigator.userAgent;
	let browserName;

	if (userAgent.match(/chrome|chromium|crios/i)) {
		browserName = 'chrome';
	} else if (userAgent.match(/firefox|fxios/i)) {
		browserName = 'firefox';
	} else if (userAgent.match(/safari/i)) {
		browserName = 'safari';
	} else if (userAgent.match(/opr\//i)) {
		browserName = 'opera';
	} else if (userAgent.match(/edg/i)) {
		browserName = 'edge';
	} else {
		browserName = 'No browser detection';
	}

	return browserName;
};

export default BrowserNativeCTA;
