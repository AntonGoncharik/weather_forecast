import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.metaweather.com/api/location/'
});

export const getIdLocationAPI = (location) => {
    return instance.get(`?query=${location}`)
};

export const getWeatherForecastAPI = (id) => {
    return instance.get(id)
};
