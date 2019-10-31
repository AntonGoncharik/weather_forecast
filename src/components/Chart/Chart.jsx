import React, {useState} from 'react';
import {connect} from "react-redux";
import {Bar} from "react-chartjs-2";
import RadioButtons from "../RadioButtons/RadioButtons";

const options = {
    title: {
        display: true,
        fontSize: 25
    },
    legend: {
        labels: {
            fontSize: 25
        }
    },
    animation: {
        duration: 3000
    }
};

const chartData = (weatherForecast, typeChart) => {
    const names = weatherForecast.map(item => item.applicable_date);
    const values = weatherForecast.map(item => item[typeChart]);

    return {
        labels: names,
        datasets: [
            {
                label: 'Weather forecast',
                data: values
            }
        ]
    }
};

const Chart = (props) => {
    const [typeChart, changeTypeChart] = useState('the_temp');

    const handleChangeTypeChart = (type) => {
        changeTypeChart(type);
    };

    return (
        <div>
            <Bar data={chartData(props.weatherForecast, typeChart)}
                 options={options}
                 width="300"
                 height="100"/>
            <RadioButtons handleChangeTypeChart={handleChangeTypeChart}
                          typeChart={typeChart}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        weatherForecast: state.weather.weatherForecast
    }
};

export default connect(mapStateToProps,
    null
)(Chart);