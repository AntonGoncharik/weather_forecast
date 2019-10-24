import React, {useState} from 'react';
import {connect} from "react-redux";
import {getLocation} from "../../redux/weatherReducer";

const Input = (props) => {
    const [city, changeCity] = useState('');

    return (
        <div>
            <input value={city}
                   onChange={(e) => changeCity(e.currentTarget.value)}/>
            <button onClick={(e) => props.getLocation(city)}>find</button>
        </div>
    )
};

export default connect(null, {getLocation})(Input);