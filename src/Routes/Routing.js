import React from 'react';
import App from '../pages/Login';
// import App from '../pages/Sign/Sign';
// import Sign from '../pages/Sign/Sign';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "../pages/Main";
import Sign_2 from "../pages/Sign/Sign_2";
import Sign_3 from "../pages/Sign/Sign_3";
import QrCRUD from "../pages/qrCRUD";
// import Payment from "../pages/requestPay";
import StoreSign from "../pages/Sign/storeSign";
// import test11 from '../pages/Test';

import AdminPageSignInConfirm from "../pages/admin/AdminPageSignInConfirm";
import AdminPageStoreAccountManage from "../pages/admin/AdminPageStoreManage";


import AdminSignCon from '../pages/admin/AdminPageSignInConfirm';
import AdminStoreMan from '../pages/admin/AdminPageStoreManage';
import AdminAppMan from '../pages/admin/AdminPageAppManage';

import OrderCheck from '../pages/user/OrderCheck';
import MenuEdit from '../pages/user/MenuEdit';
import MenuAdd from '../pages/user/MenuAdd';
import MyPage from '../pages/user/MyPage';

import SignInPage from '../pages/Sign/SignIn';
import SignInPage2 from '../pages/Sign/SignIn2';
import SignInCom from   '../pages/Sign/SignInCom';


function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<OrderCheck />} />
                    {/*<Route path='/test' element={<test11 />} />*/}
                    <Route path='/Main' element={<Main />} />
                    <Route path='/Sign' element={<SignInPage />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_2' element={<SignInPage2 />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_3' element={<SignInCom />} />
                    <Route path='/Main/qrCRUD' element={<QrCRUD />} />
                    <Route path='/storesign' element={<StoreSign />}/>
                    <Route path='/adminsign' element={<AdminPageSignInConfirm />}/>
                    <Route path='/adminacount' element={<AdminPageStoreAccountManage />}/>
                    <Route path='/Main/Menu/Edit' element={<MenuEdit />}/>
                    <Route path='/Main/Menu/Add' element={<MenuAdd />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing;
