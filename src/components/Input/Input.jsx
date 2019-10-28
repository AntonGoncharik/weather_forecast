import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input value={props.city}
                   onChange={e => props.handleGetLocationAndWeatherForecast(e.currentTarget.value)}
                   onFocus={e => props.handleChangeShowFindList(1)}/>
        </div>
    )
};

export default Input;