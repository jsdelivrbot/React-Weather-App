import axios from 'axios';

const API_KEY = '179b7c28df14ed3bc741fa79af2845a1';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us&units=metric`; 
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}