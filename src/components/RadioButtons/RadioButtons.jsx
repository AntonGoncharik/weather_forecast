import React from 'react';
import style from './RadioButtons.module.css';

const RadioButtons = (props) => {
    return (
        <div className={style.radio}>
            <div>
                temp
                <input name="the_temp"
                       type="radio"
                       value="the_temp"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'the_temp'}/>
            </div>
            <div>
                max temp
                <input name="max_temp"
                       type="radio"
                       value="max_temp"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'max_temp'}/>
            </div>
            <div>
                min temp
                <input name="min_temp"
                       type="radio"
                       value="min_temp"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'min_temp'}/>
            </div>
            <div>
                wind speed
                <input name="wind_speed"
                       type="radio"
                       value="wind_speed"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'wind_speed'}/>
            </div>
            <div>
                air pressure
                <input name="air_pressure"
                       type="radio"
                       value="air_pressure"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'air_pressure'}/>
            </div>
            <div>
                humidity
                <input name="humidity"
                       type="radio"
                       value="humidity"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'humidity'}/>
            </div>
            <div>
                visibility
                <input name="visibility"
                       type="radio"
                       value="visibility"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'visibility'}/>
            </div>
            <div>
                predictability
                <input name="predictability"
                       type="radio"
                       value="predictability"
                       onChange={e => props.handleChangeTypeChart(e.currentTarget.value)}
                       checked={props.typeChart === 'predictability'}/>
            </div>
        </div>
    )
};
export default RadioButtons;