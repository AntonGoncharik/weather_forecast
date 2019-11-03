import React from 'react';
import style from './FindList.module.css';

const FindList = (props) => {
    const handleSelectCity = (locationName) => {
        props.handleChangeCity(locationName);
        props.handleChangeShowFindList(0);
    };

    return (
        <div className={style.list}>
            {props.foundLocations.map(item =>
                <div key={item.woeid}
                     className={style.item}
                     onClick={(e) => handleSelectCity(e.currentTarget.innerText)}>
                    {item.title}
                </div>)}
        </div>
    )
};

export default FindList;