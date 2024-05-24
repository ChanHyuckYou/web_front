import React, { useState } from "react";
import AdminAppManage from "./AdminPageAppManage";
import AdminSignIn from "./AdminPageSignInConfirm";
import AdminStoreManage from "./AdminPageStoreManage";
import Icon from '../../assets/IconSample.png';
import '../../css/admin/AdminPageSignInConfirm.css';

export default function AdminPage() {
    // 현재 활성화된 메뉴를 추적하는 상태, 초기값은 null
    const [activeMenu, setActiveMenu] = useState('signIn');

    // 선택된 메뉴에 따라 className을 반환하는 함수
    const getMenuClassName = (menuName) => {
        return `menu-item ${activeMenu === menuName ? 'active' : ''}`;
    };
    // line-8의 클래스 이름을 반환하는 함수
    const getLineClassName = (menuName) => {
        return `line-8 ${activeMenu === menuName ? 'active' : 'hidden'}`;
    };
    return (
        <div className="adminPageSignInConfirm">
                <div className="headerContainer">
                    <div className="logoContainer">
                        <img className="appNupanIcon" src={Icon} alt="">
                        </img>
                        <div className="app-nupan">
                            APP-nupan
                        </div>
                    </div>
                    <div className="admin">
                        Admin
                    </div>
                </div>

                <div className="line-5">
                </div>
                <div className="itemContainer">
                    <div className="menu-list">
                        <div className="menuContainer">
                            <div className={getMenuClassName('signIn')} onClick={() => setActiveMenu('signIn')}>
                                <span className={'sign-in-confirm-bt'}>회원가입 승인</span>
                            </div>
                            <div className={getLineClassName('signIn')}></div>
                        </div>
                        <div className="menuContainer">
                            <div className={getMenuClassName('storeManage')}
                                 onClick={() => setActiveMenu('storeManage')}>
                                <span className={'sign-in-confirm-bt'}>사업자 회원 조회</span>
                            </div>
                            <div className={getLineClassName('storeManage')}></div>
                        </div>
                        <div className="menuContainer">
                            <div className={getMenuClassName('appManage')} onClick={() => setActiveMenu('appManage')}>
                                <span className={'sign-in-confirm-bt'}>앱 회원 조회</span>
                            </div>
                            <div className={getLineClassName('appManage')}></div>
                        </div>
                    </div>

                    {activeMenu === 'signIn' && <AdminSignIn/>}
                    {activeMenu === 'appManage' && <AdminAppManage/>}
                    {activeMenu === 'storeManage' && <AdminStoreManage/>}

                </div>
        </div>
    );
}


