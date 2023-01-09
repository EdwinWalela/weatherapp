import Header from './header';
import WeatherOverview from './weatherOverview';

const LandingPage = () => {
	return (
		<div className="w-screen p-6 px-10 flex-grow">
			<Header />
			<WeatherOverview />
		</div>
	);
};

export default LandingPage;
