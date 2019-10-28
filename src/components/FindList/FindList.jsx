import React from 'react';
import style from './FindList.module.css';

const FindList = (props) => {
    const handleSelectCity = (locationName) => {
        props.handleGetLocationAndWeatherForecast(locationName);
        props.handleChangeShowFindList(0);
    };

    return (
        <div className={style.list}>
            {props.beforeLocations.map(item =>
                <div className={style.item}
                     onClick={(e) => handleSelectCity(e.currentTarget.innerText)}>
                    {item.title}
                </div>)}
        </div>
    )
};

export default FindList;