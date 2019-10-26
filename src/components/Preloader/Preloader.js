import React from 'react';
import preloaderSVG from './../../resources/svg/pre.webp';

const Preloader = (props) => {
    return (
        <div>
            {/*<div className={s.preloaderBlock}>*/}
            <img src={preloaderSVG}></img>
            {/*</div>*/}
        </div>
    )
}

export default Preloader;
