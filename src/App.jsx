import React from 'react';
import './App.css';
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <WeatherForecast/>
            </Provider>
        </div>
    )
}

export default App;
