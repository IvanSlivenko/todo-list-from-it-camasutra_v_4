import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTrening from "./App-trening";
import {Border} from "./Border";

import {Counter} from "./Counter";
import AppWithReducers from "./AppWithReducers";
import AppWithRedux from "./AppWithRedux";
import AppWithReducersTrening from "./App-treningWithReducers";
import AppWithReduxTrening from "./AppWithReduxTrening";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <>
        {/*<App/>*/}
        {/*<AppWithReducers/>*/}
        <AppWithRedux/>

        {/*<Border/>*/}
        {/*<AppTrening/>*/}
        {/*<AppWithReducersTrening/>*/}
        <AppWithReduxTrening/>

        <Counter/>
    </>

// </React.StrictMode>
);

reportWebVitals();
