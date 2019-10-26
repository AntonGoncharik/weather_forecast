import React, {useState} from 'react';
import Input from "../Input/Input";
import {connect} from "react-redux";
import style from './WeatherForecast.module.css';
import c from './../../resources/svg/c.svg';
import h from './../../resources/svg/h.svg';
import hc from './../../resources/svg/hc.svg';
import hr from './../../resources/svg/hr.svg';
import lc from './../../resources/svg/lc.svg';
import lr from './../../resources/svg/lr.svg';
import s from './../../resources/svg/s.svg';
import sl from './../../resources/svg/sl.svg';
import sn from './../../resources/svg/sn.svg';
import t from './../../resources/svg/t.svg';
import {roundUp} from "../../helpers/helpers";
import FindList from "../FindList/FindList";

const WeatherForecast = (props) => {
    const [day, setDay] = useState(0);

    const changeDay = (determination) => {
        if (determination === 1 && day < 5) {
            setDay(day + 1);
        } else if (determination === 0 && day > 0) {
            setDay(day - 1);
        }
    };

    const accordanceImgWithWeather = [
        {abbr: 'c', img: c},
        {abbr: 'h', img: h},
        {abbr: 'hc', img: hc},
        {abbr: 'hr', img: hr},
        {abbr: 'lc', img: lc},
        {abbr: 'lr', img: lr},
        {abbr: 's', img: s},
        {abbr: 'sl', img: sl},
        {abbr: 'sn', img: sn},
        {abbr: 't', img: t},
    ];

    return (
        <div>
            <Input/>
            <FindList/>
            <button onClick={() => {
                changeDay(0)
            }}>prev
            </button>
            <button onClick={() => {
                changeDay(1)
            }}>next
            </button>
            {props.weatherForecast[day].weather_state_abbr && <div className={style.dayImg}><img
                src={accordanceImgWithWeather.find(item => item.abbr === props.weatherForecast[day].weather_state_abbr).img}/>
            </div>}
            <div>{props.weatherForecast[day].applicable_date}</div>
            <div>{props.weatherForecast[day].weather_state_name}</div>
            <div>wind: {props.weatherForecast[day].wind_direction_compass}</div>
            <div>temp: {roundUp(props.weatherForecast[day].the_temp)}</div>
            <div>min temp: {roundUp(props.weatherForecast[day].min_temp)}</div>
            <div>max temp: {roundUp(props.weatherForecast[day].max_temp)}</div>
            <div>wind speed: {roundUp(props.weatherForecast[day].wind_speed)}</div>
            <div>air pressure: {roundUp(props.weatherForecast[day].air_pressure)}</div>
            <div>humidity: {roundUp(props.weatherForecast[day].humidity)}</div>
            <div>visibility: {roundUp(props.weatherForecast[day].visibility)}</div>
            <div>predictability: {roundUp(props.weatherForecast[day].predictability)}</div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        weatherForecast: state.weather.weatherForecast
    }
};

export default connect(mapStateToProps, null)(WeatherForecast);