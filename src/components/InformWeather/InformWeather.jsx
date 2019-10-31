import React from 'react';
import {roundUp} from "../../helpers/helpers";
import style from "./InformWeather.module.css";

const InformWeather = (props) => {
    return (
        <div className={style.blockWeatherCenter}>
            {props.weatherForecast[props.day].weather_state_abbr &&
            <div className={style.dayImg}>
                <img src={props.accordanceImgWithWeather.find(item =>
                    item.abbr === props.weatherForecast[props.day].weather_state_abbr).img}/>
            </div>}
            <div>{props.weatherForecast[props.day].applicable_date}</div>
            <div>{props.weatherForecast[props.day].weather_state_name}</div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>wind:</div>
                <div className={style.blockValue}>{props.weatherForecast[props.day].wind_direction_compass}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>temp:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].the_temp)}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>min temp:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].min_temp)}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>max temp:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].max_temp)}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>wind speed:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].wind_speed)}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>air pressure:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].air_pressure)}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>humidity:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].humidity)}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>visibility:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].visibility)}</div>
            </div>
            <div className={style.blockNameValue}>
                <div className={style.blockName}>predictability:</div>
                <div className={style.blockValue}>{roundUp(props.weatherForecast[props.day].predictability)}</div>
            </div>
        </div>
    )
};

export default InformWeather;