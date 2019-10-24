import {getIdLocationAPI} from "../api/api";

const SET_LOCATION = 'SET_LOCATION';
const SET_BEFORE_LOCATION = 'SET_BEFORE_LOCATION';
const SET_WEATHER_FORECAST = 'SET_WEATHER_FORECAST';

const initialState = {
    beforeLocations: [
        {
            title: "London",
            location_type: "City",
            woeid: 44418,
            latt_long: "51.506321,-0.12714"
        }
    ],
    location: {
        title: "London",
        location_type: "City",
        woeid: 44418,
        latt_long: "51.506321,-0.12714"
    },
    weatherForecast: [
        {
            weather_state_name: "Heavy Rain",
            weather_state_abbr: "hr",
            wind_direction_compass: "E",
            created: "2019-10-23T15:16:02.872588Z",
            applicable_date: "2019-10-23",
            min_temp: 7.675,
            max_temp: 14.649999999999999,
            the_temp: 13.94,
            wind_speed: 3.2127621754473874,
            wind_direction: 86.87080006069073,
            air_pressure: 1012.5,
            humidity: 86,
            visibility: 4.98091147697447,
            predictability: 77
        }
    ]
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {state};
            break;
        case SET_BEFORE_LOCATION:
            return {...state, beforeLocations: action.locationsData};
            break;
        case SET_WEATHER_FORECAST:
            return {state};
            break;
        default:
            return state;
    }
};

const setLocationAC = () => {
    return {}
};
const setBeforeLocationAC = (locationsData) => {
    return {type: 'SET_BEFORE_LOCATION', locationsData}
};
const setWeatherForecastAC = () => {
    return {}
};

export const getLocation = (locationName) => {
    return async (dispatch) => {
        try {
            const result = await getIdLocationAPI(locationName);
            if (result.status === 200) {
                dispatch(setBeforeLocationAC(result.data));
            }
        } catch (e) {

        }
    }
};
export const getWeatherForecast = () => {
    return (dispatch) => {

    }
};