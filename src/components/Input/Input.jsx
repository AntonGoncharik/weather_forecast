import React from 'react';
import style from './Input.module.css';

const Input = (props) => {
    return (
        <div>
            <input className={style.input}
                   value={props.city}
                   placeholder={`please, enter city`}
                   onChange={e => props.handleChangeCity(e.currentTarget.value)}
                   onFocus={e => props.handleChangeShowFindList(1)}/>
        </div>
    )
};

export default Input;