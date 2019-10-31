import React, {useState} from 'react';
import {connect} from "react-redux";
import FindLocation from "../FindLocation/FindLocation";
import InformWeather from "../InformWeather/InformWeather";
import Preloader from "../Preloader/Preloader";
import Chart from "../Chart/Chart";
import c from './../../resources/svg/c.svg';
import h from './../../resources/svg/h.svg';
import hc from './../../resources/svg/hc.svg';
import hr from './../../resources/svg/hr.svg';
import lc from './../../resources/svg/lc.svg';
import lr from './../../resources/svg/lr.svg';
import s from './../../resources/svg/s.svg';
import sl from './../../resources/svg/sl.svg';
import sn from './../../resources/svg/sn.svg';
import t from './../../resources/svg/t.svg';
import prev from './../../resources/png/prev.png';
import next from './../../resources/png/next.png';
import style from './WeatherForecast.module.css';

const WeatherForecast = (props) => {
    const [day, setDay] = useState(0);

    const [showChart, changeShowChart] = useState(false);

    const changeDay = (determination) => {
        if (determination === 1 && day < 5) {
            setDay(day + 1);
        } else if (determination === 0 && day > 0) {
            setDay(day - 1);
        }
    };

    const handleChangeShowChart = () => {
        changeShowChart(!showChart);
    };

    const accordanceImgWithWeather = [
        {abbr: 'c', img: c},
        {abbr: 'h', img: h},
        {abbr: 'hc', img: hc},
        {abbr: 'hr', img: hr},
        {abbr: 'lc', img: lc},
        {abbr: 'lr', img: lr},
        {abbr: 's', img: s},
        {abbr: 'sl', img: sl},
        {abbr: 'sn', img: sn},
        {abbr: 't', img: t},
    ];

    return (
        <div>
            <div className={style.title}>
                WEATHER FORECAST
            </div>
            <div className={style.findLocationButtonChart}>
                <FindLocation/>
                <div className={style.buttonChart}
                     onClick={handleChangeShowChart}>chart
                </div>
            </div>
            {props.isFetching && <Preloader/> || showChart && <Chart/> || <div className={style.blockWeather}>
                <div className={style.button}
                     onClick={() => {
                         changeDay(0)
                     }}>
                    <img src={prev}/>
                </div>
                <InformWeather day={day}
                               accordanceImgWithWeather={accordanceImgWithWeather}
                               weatherForecast={props.weatherForecast}/>
                <div className={style.button}
                     onClick={() => {
                         changeDay(1)
                     }}>
                    <img src={next}/>
                </div>
            </div>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        weatherForecast: state.weather.weatherForecast,
        isFetching: state.weather.isFetching
    }
};

export default connect(mapStateToProps,
    null
)(WeatherForecast);