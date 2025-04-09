import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTrening from "./App-trening";
import {Border} from "./Border";

import {Counter} from "./Counter";
import AppWithReducers from "./AppWithReducers";
import AppWithReducersTrening from "./App-treningWithReducers";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <>
        {/*<App/>*/}
        <AppWithReducers/>

        {/*<Border/>*/}
        {/*<AppTrening/>*/}
        <AppWithReducersTrening/>

        <Counter/>
    </>

// </React.StrictMode>
);

reportWebVitals();
