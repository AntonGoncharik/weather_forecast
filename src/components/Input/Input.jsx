import React, {useState} from 'react';
import {connect} from "react-redux";
import {getLocationAndWeatherForecast} from "../../redux/weatherReducer";
import Preloader from "../Preloader/Preloader";

const Input = (props) => {
    const [city, changeCity] = useState('');

    const getLocationAndWeatherForecast = (e) => {
        changeCity(e.currentTarget.value);
        props.getLocationAndWeatherForecast(city);
    };

    return (
        <div>
            {/*<Preloader/>*/}
            <input value={city}
                   onChange={(e) => getLocationAndWeatherForecast(e)}/>
        </div>
    )
};

export default connect(null, {getLocationAndWeatherForecast})(Input);