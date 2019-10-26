import {getIdLocationAPI, getWeatherForecastAPI} from "../api/api";

const SET_LOCATION = 'SET_LOCATION';
const SET_BEFORE_LOCATION = 'SET_BEFORE_LOCATION';
const SET_WEATHER_FORECAST = 'SET_WEATHER_FORECAST';

const initialState = {
    beforeLocations: [
        {
            title: '',
            location_type: '',
            woeid: '',
            latt_long: ''
        }
    ],
    location: {
        title: '',
        location_type: '',
        woeid: '',
        latt_long: ''
    },
    weatherForecast: [
        {
            weather_state_name: '',
            weather_state_abbr: '',
            wind_direction_compass: '',
            created: '',
            applicable_date: '',
            min_temp: 0,
            max_temp: 0,
            the_temp: 0,
            wind_speed: 0,
            wind_direction: 0,
            air_pressure: 0,
            humidity: 0,
            visibility: 0,
            predictability: 0
        }
    ]
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {...state, location: action.locationData};
            break;
        case SET_BEFORE_LOCATION:
            return {...state, beforeLocations: action.locationsData};
            break;
        case SET_WEATHER_FORECAST:
            return {...state, weatherForecast: action.weatherForecast};
            break;
        default:
            return state;
    }
};

const setLocationAC = (locationData) => {
    return {type: 'SET_LOCATION', locationData}
};
const setBeforeLocationAC = (locationsData) => {
    return {type: 'SET_BEFORE_LOCATION', locationsData}
};
const setWeatherForecastAC = (weatherForecast) => {
    return {type: 'SET_WEATHER_FORECAST', weatherForecast}
};

export const getLocationAndWeatherForecast = (locationName) => {
    return async (dispatch) => {
        try {
            let result = await getIdLocationAPI(locationName);
            if (result.status === 200) {
                dispatch(setBeforeLocationAC(result.data));
                if (result.data.length === 1) {
                    dispatch(setLocationAC(result.data[0]));
                    result = await getWeatherForecastAPI(result.data[0].woeid);
                    if (result.status === 200) {
                        dispatch(setWeatherForecastAC(result.data.consolidated_weather));
                    }
                }
            }
        } catch (e) {

        }
    }
};