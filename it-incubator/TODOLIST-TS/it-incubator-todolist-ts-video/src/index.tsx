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
import {Provider} from "react-redux";
import {store} from "./state/store";
import {storeTrening} from "./state_trening/storeTrening";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <>
        {/*<App/>*/}
        {/*<AppWithReducers/>*/}
        <Provider store={store}>
            <AppWithRedux/>
        </Provider>


        {/*<Border/>*/}
        {/*<AppTrening/>*/}
        {/*<AppWithReducersTrening/>*/}
        <Provider store={storeTrening}>
            <AppWithReduxTrening/>
        </Provider>


        <Counter/>
    </>

// </React.StrictMode>
);

reportWebVitals();
