import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Routing from "./Routes/Routing";
import { QueryClient, QueryClientProvider } from 'react-query';

import './fonts/global.css';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <Routing />
    </QueryClientProvider>
);
reportWebVitals();


