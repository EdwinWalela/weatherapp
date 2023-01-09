import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchWeather } from './weatherSlice';
import WeatherOverviewItem from './weatherOverviewItem';

const WeatherOverview = () => {
	const weather = useAppSelector((state) => state.weather);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchWeather(weather.location));
	}, [weather.location]);

	return (
		<div className="mt-10">
			<h2 className="font-medium text-lg">Today overview at {weather.location}</h2>
			{weather.error && (
				<p className="text-center bg-red-500 text-white m-auto w-1/4 px-1 py-2 rounded-md shadow-lg cursor-pointer">
					{weather.errorMsg}
				</p>
			)}
			<div className="flex justify-center">
				<div className="mr-10 w-full cursor-pointer">
					<WeatherOverviewItem weather={{ category: 'wind', value: weather.windSpeed }} />
					<WeatherOverviewItem weather={{ category: 'pressure', value: weather.pressure }} />
				</div>
				<div className="mr-10 w-full cursor-pointer">
					<WeatherOverviewItem weather={{ category: 'humidity', value: weather.humidity }} />
					<WeatherOverviewItem weather={{ category: 'sunrise', value: weather.sunrise }} />
				</div>
				<div className="mr-10 w-full cursor-pointer">
					<WeatherOverviewItem weather={{ category: 'feelsLike', value: weather.temperature }} />
					<WeatherOverviewItem weather={{ category: 'sunset', value: weather.sunset }} />
				</div>
			</div>
		</div>
	);
};

export default WeatherOverview;
