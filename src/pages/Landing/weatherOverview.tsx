import WeatherOverviewItem from './weatherOverviewItem';

const WeatherOverview = () => {
	return (
		<div className="mt-10">
			<h2 className="font-medium text-lg">Today overview</h2>
			<div className="flex justify-center">
				<div className="mr-10 w-full cursor-pointer">
					<WeatherOverviewItem weather={{ category: 'wind', value: 10 }} />
					<WeatherOverviewItem weather={{ category: 'pressure', value: 1018 }} />
				</div>
				<div className="mr-10 w-full cursor-pointer">
					<WeatherOverviewItem weather={{ category: 'humidity', value: 24 }} />
					<WeatherOverviewItem weather={{ category: 'sunrise', value: 1673235225 }} />
				</div>
				<div className="mr-10 w-full cursor-pointer">
					<WeatherOverviewItem weather={{ category: 'feelsLike', value: 27 }} />
					<WeatherOverviewItem weather={{ category: 'sunset', value: 1673279106 }} />
				</div>
			</div>
		</div>
	);
};

export default WeatherOverview;
