import React from 'react';
import preloaderSVG from './../../resources/svg/pre.webp';
import style from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div>
            <div className={style.preloaderBlock}>
                <img src={preloaderSVG}></img>
            </div>
        </div>
    )
};

export default Preloader;
