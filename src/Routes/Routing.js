import React from 'react';
import App from '../pages/Login';
import Sign from '../pages/Sign/Sign';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "../pages/Main";
import Sign_2 from "../pages/Sign/Sign_2";
import Sign_3 from "../pages/Sign/Sign_3";
import QrCRUD from "../pages/qrCRUD";
// import Payment from "../pages/requestPay";
import StoreSign from "../pages/Sign/storeSign";
// import test11 from '../pages/Test';
import AdminPageSignInConfirm from "../pages/admin/AdminPageSignInConfirm";
import AdminPageStoreAccountManage from "../pages/admin/AdminPageStoreAccountManage";




function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    {/*<Route path='/test' element={<test11 />} />*/}
                    <Route path='/Main' element={<Main />} />
                    <Route path='/Sign' element={<Sign />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_2' element={<Sign_2 />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_3' element={<Sign_3 />} />
                    <Route path='/Main/qrCRUD' element={<QrCRUD />} />
                    <Route path='/storesign' element={<StoreSign />}/>
                    <Route path='/adminsign' element={<AdminPageSignInConfirm />}/>
                    <Route path='/adminacount' element={<AdminPageStoreAccountManage />}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing;
