import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Routing from "./Routing";
import {BrowserRouter} from "react-router-dom";
// import {RecoilRoot} from 'recoil';
// import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routing />
);
reportWebVitals();

