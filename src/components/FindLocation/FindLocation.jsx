import React, {useState} from 'react';
import {connect} from "react-redux";
import Input from "../Input/Input";
import FindList from "../FindList/FindList";
import {getLocationAndWeatherForecast} from "../../redux/weatherReducer";
import style from './FindLocation.module.css';

const FindLocation = (props) => {
    const [city, changeCity] = useState('');

    const [showFindList, changeShowFindList] = useState(false);

    const handleGetLocationAndWeatherForecast = (locationName) => {
        changeCity(locationName);
        props.getLocationAndWeatherForecast(locationName);
    };

    const handleChangeShowFindList = (determination) => {
        if (determination === 1) {
            changeShowFindList(true);
        } else {
            changeShowFindList(false);
        }
    };

    return (
        <div className={style.blockFindLocation}>
            <Input handleGetLocationAndWeatherForecast={handleGetLocationAndWeatherForecast}
                   city={city}
                   handleChangeShowFindList={handleChangeShowFindList}/>
            {showFindList &&
            <div className={style.blockFindList}>
                <FindList beforeLocations={props.beforeLocations}
                          handleChangeShowFindList={handleChangeShowFindList}
                          handleGetLocationAndWeatherForecast={handleGetLocationAndWeatherForecast}/>
            </div>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        beforeLocations: state.weather.beforeLocations
    }
};

export default connect(mapStateToProps, {getLocationAndWeatherForecast})(FindLocation);

