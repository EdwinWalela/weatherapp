import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface WeatherState {
	location: string;
	windSpeed: number;
	humidity: number;
	temperature: number;
	pressure: number;
	sunrise: number;
	sunset: number;
}

const initialState = {
	location: '',
	windSpeed: 0,
	humidity: 0,
	temperature: 0,
	pressure: 0,
	sunrise: 0,
	sunset: 0,
} as WeatherState;

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		fetchWeather: (state, action: PayloadAction<string>) => {},
	},
});

export const { fetchWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
