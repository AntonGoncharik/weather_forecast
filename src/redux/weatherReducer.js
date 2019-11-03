import {getIdLocationAPI, getWeatherForecastAPI} from "../api/api";

const SET_LOCATION = 'SET_LOCATION';
const SET_FOUND_LOCATION = 'SET_FOUND_LOCATION';
const SET_WEATHER_FORECAST = 'SET_WEATHER_FORECAST';
const SET_FETCHING_DATA = 'SET_FETCHING_DATA';

const initialState = {
    isFetching: false,
    foundLocations: [
        {
            title: '',
            location_type: '',
            woeid: '',
            latt_long: ''
        }
    ],
    location: {
        title: 'Minsk',
        location_type: 'City',
        woeid: 834463,
        latt_long: '53.90255,27.563101'
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
        case SET_FOUND_LOCATION:
            return {...state, foundLocations: action.locationsData};
            break;
        case SET_WEATHER_FORECAST:
            return {...state, weatherForecast: action.weatherForecast};
            break;
        case SET_FETCHING_DATA:
            return {...state, isFetching: action.isFetching};
            break;
        default:
            return state;
    }
};

const setLocationAC = (locationData) => {
    return {type: 'SET_LOCATION', locationData}
};
const setBeforeLocationAC = (locationsData) => {
    return {type: 'SET_FOUND_LOCATION', locationsData}
};
const setWeatherForecastAC = (weatherForecast) => {
    return {type: 'SET_WEATHER_FORECAST', weatherForecast}
};
const setFetchingDataAC = (isFetching) => {
    return {type: 'SET_FETCHING_DATA', isFetching}
};

export const getLocationAndWeatherForecast = (locationName) => {
    return async (dispatch) => {
        try {
            dispatch(setFetchingDataAC(true));
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
            dispatch(setFetchingDataAC(false));
        } catch (e) {

        }
    }
};