import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface WeatherState {
	location: string;
	windSpeed: number;
	humidity: number;
	temperature: number;
	pressure: number;
	sunrise: number;
	sunset: number;
	loading: boolean;
}

const initialState = {
	location: 'Nairobi',
	windSpeed: 0,
	humidity: 0,
	temperature: 0,
	pressure: 0,
	sunrise: 0,
	sunset: 0,
	loading: false,
} as WeatherState;

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

export const fetchWeather = createAsyncThunk(
	'weather/location',
	async (location: string, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}?appid=${API_KEY}&q=${location}&units=metric`);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchWeather.fulfilled, (state, action) => {
			state.location = action.payload.name;
			state.humidity = action.payload.main.humidity;
			state.pressure = action.payload.main.pressure;
			state.sunrise = action.payload.sys.sunrise;
			state.sunset = action.payload.sys.sunset;
			state.temperature = Math.floor(action.payload.main.temp);
			state.windSpeed = Math.floor(action.payload.wind.speed);
			state.loading = false;
		});
		builder.addCase(fetchWeather.pending, (state, action) => {
			state.loading = true;
		});
	},
});

export default weatherSlice.reducer;
