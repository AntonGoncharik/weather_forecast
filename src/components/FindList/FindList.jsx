import React from 'react';
import style from './FindList.module.css';

const FindList = (props) => {
    return (
        <div className={style.list}>
            {/*{props.beforeLocations.map(item => <div className={style.item}*/}
            {/*                                        onClick={(e) =>*/}
            {/*                                            props.handleGetLocationAndWeatherForecast(e.currentTarget.innerText)}>*/}
            {props.beforeLocations.map(item => <div className={style.item}
                                                    onClick={(e) => console.log('awdfafweq')}>
                {item.title}</div>)}
        </div>
    )
};

export default FindList;