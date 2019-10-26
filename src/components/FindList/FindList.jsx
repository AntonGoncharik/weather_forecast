import React, {useState} from 'react';
import {connect} from "react-redux";
import {getLocationAndWeatherForecast} from "../../redux/weatherReducer";
import style from './FindList.module.css';
import Preloader from "../Preloader/Preloader";

const Input = (props) => {
    const [city, changeCity] = useState('');

    const getLocationAndWeatherForecast = (e) => {
        changeCity(e.currentTarget.value);
        props.getLocationAndWeatherForecast(city);
    };

    return (
        <div>
            <input value={city}
                   onChange={(e) => getLocationAndWeatherForecast(e)}/>
        </div>
    )
};

const FindList = (props) => {
    const getLocationAndWeatherForecast = (e) => {
        props.getLocationAndWeatherForecast(e.currentTarget.innerText);
    };

    return (
        <div>
            <div className={style.list}>
                {props.beforeLocations.map(item => <div className={style.item}
                                                        onClick={(e) => getLocationAndWeatherForecast(e)}>{item.title}</div>)}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        beforeLocations: state.weather.beforeLocations
    }
};

export default connect(mapStateToProps, {getLocationAndWeatherForecast})(FindList);