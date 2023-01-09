import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faWind, faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import feelLikeSvg from '../../assets/feelsLike.svg';
import humiditySvg from '../../assets/humidity.svg';
import pressureSvg from '../../assets/pressure.svg';
import sunriseSvg from '../../assets/sunrise.svg';
import sunsetSvg from '../../assets/sunset.svg';
import windSvg from '../../assets/wind.svg';
import { useAppSelector } from '../../store/hooks';

const WeatherOverviewItem = (props: { weather: { category: string; value: number } }) => {
	const isLoading = useAppSelector((state) => state.weather.loading);
	let title = 'N/A';
	let value = 'N/A';
	let svg = '';

	switch (props.weather.category) {
		case 'wind':
			title = 'Wind Speed';
			svg = windSvg;
			value = `${props.weather.value} km/h`;
			break;
		case 'pressure':
			title = 'Pressure';
			svg = pressureSvg;
			value = `${props.weather.value} hpa`;
			break;
		case 'sunrise':
			title = 'Sunrise';
			svg = sunriseSvg;
			let sunriseDate = new Date(props.weather.value * 1000);
			let sunriseMinutes = sunriseDate.getMinutes();
			value = `${sunriseDate.getHours()}:${
				sunriseMinutes < 10 ? `0${sunriseMinutes}` : sunriseMinutes
			} am`;
			break;
		case 'sunset':
			title = 'Sunset';
			svg = sunsetSvg;
			let sunsetDate = new Date(props.weather.value * 1000);
			let minutes = sunsetDate.getMinutes();
			value = `${sunsetDate.getHours() - 12}:${minutes < 10 ? `0${minutes}` : minutes} pm`;
			break;
		case 'humidity':
			title = 'Humidity';
			svg = humiditySvg;
			value = `${props.weather.value} %`;
			break;
		case 'feelsLike':
			title = 'Temperature';
			svg = feelLikeSvg;
			value = `${props.weather.value} °C`;
			break;
	}

	return (
		<div className="flex p-8 bg-gray-50 rounded-md shadow-md  m-8">
			<div className="self-center">
				<img src={svg} className="w-10" />
			</div>

			<div className="ml-4">
				<p className="text-sm text-gray-500">{title}</p>
				<h1 className="text-3xl font-medium">{isLoading ? <span>...</span> : value}</h1>
			</div>
		</div>
	);
};

export default WeatherOverviewItem;
