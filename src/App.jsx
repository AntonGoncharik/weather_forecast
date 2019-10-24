import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Header/>
                <WeatherForecast/>
            </Provider>
        </div>
    )
}

export default App;
