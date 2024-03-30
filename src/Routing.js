import React from 'react';
import App from './pages/Login';
import Sign from './pages/Sign/Sign';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main";
import Sign_2 from "./pages/Sign/Sign_2";
import Sign_3 from "./pages/Sign/Sign_3";

function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/Main' element={<Main />} />
                    <Route path='/Sign' element={<Sign />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_2' element={<Sign_2 />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_3' element={<Sign_3 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing;
