import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import Input from "../Input/Input";
import FindList from "../FindList/FindList";
import {getLocationAndWeatherForecast} from "../../redux/weatherReducer";
import style from './FindLocation.module.css';

const FindLocation = (props) => {
    const [city, changeCity] = useState('Minsk');

    const [showFindList, changeShowFindList] = useState(false);

    useEffect(() => {
        props.getLocationAndWeatherForecast(city);
    }, [city]);

    const handleChangeCity = (locationName) => {
        changeCity(locationName);
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
            <Input handleChangeCity={handleChangeCity}
                   city={city}
                   handleChangeShowFindList={handleChangeShowFindList}/>
            {showFindList &&
            <div className={style.blockFindList}>
                <FindList foundLocations={props.foundLocations}
                          handleChangeShowFindList={handleChangeShowFindList}
                          handleChangeCity={handleChangeCity}/>
            </div>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        foundLocations: state.weather.foundLocations
    }
};

export default connect(mapStateToProps,
    {getLocationAndWeatherForecast}
)(FindLocation);

