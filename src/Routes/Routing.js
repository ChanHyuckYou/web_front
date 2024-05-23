import React from 'react';
import App from '../pages/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "../pages/Main";
import QrCRUD from "../pages/qrCRUD";
import AdminPageSignInConfirm from "../pages/admin/AdminPageSignInConfirm";
import AdminPageStoreAccountManage from "../pages/admin/AdminPageStoreManage";
import AdminPage from "../pages/admin/AdminPage";
import OrderCheck from '../pages/user/OrderCheck';
import MenuEdit from '../pages/user/MenuEdit';
import MenuAdd from '../pages/user/MenuAdd';
import MyPage from '../pages/user/MyPage';
import SignInPage from '../pages/Sign/SignIn';
import SignInPage2 from '../pages/Sign/SignIn2';
import SignInCom from   '../pages/Sign/SignInCom';
import AdminPageAppManage from '../pages/admin/AdminPageAppManage';


function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    {/*<Route path='/test' element={<test11 />} />*/}
                    <Route path='/Main' element={<Main />} />
                    <Route path='/Sign' element={<SignInPage />} />
                    <Route path='/Main/MyPage' element={<MyPage />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_2' element={<SignInPage2 />} />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Route path='/Sign_3' element={<SignInCom />} />
                    <Route path='/Main/qrCRUD' element={<QrCRUD />} />
                    <Route path='/admin/sign' element={<AdminPageSignInConfirm />}/>
                    <Route path='/admin/App' element={<AdminPageAppManage />}/>
                    <Route path='/admin' element={<AdminPage />}/>
                    <Route path='/admina/count' element={<AdminPageStoreAccountManage />}/>
                    <Route path='/Main/Menu/Edit' element={<MenuEdit />}/>
                    <Route path='/Main/Menu/Add' element={<MenuAdd />}/>
                    <Route path='/Main/Menu/OrderCheck' element={<OrderCheck />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing;
