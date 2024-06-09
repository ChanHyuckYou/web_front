import '../css/Main.css'
import Vector from '../assets/Vector.png'
import EPMENU from '../assets/ep_menu.png'
import QR from '../assets/bi_qr-code-scan.png'
import MyPage from '../assets/MyPage.png';
import Icon from '../assets/IconSample.png';
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';


export default function Main() {
    const navigate = useNavigate();
    const ownerid = localStorage.getItem('ownerid');
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const goToQr = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/qrCRUD');
    };
    const MenuEdit = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/Menu/Edit');
    };
    const goToMyPage = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/MyPage');
    };
    const goToOrderCheck = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/Menu/OrderCheck');
    }
    const toggleMoreMenu = () => {
        setIsMoreOpen(prevState => !prevState);
    };
    const goToLogOut = () => {
        localStorage.removeItem('ownerid'); // ownerid 제거
        navigate('/');
    }

    useEffect(() => {
        if (!ownerid) {
            alert("잘못된 접근입니다. 다시 로그인 해주세요.");
            navigate('/');
        }
    }, [ownerid, navigate]);

    return (
        <div className="main-container">
            <div className="header">
                <div className="logo">
                    <img className="appNupanIcon" src={Icon} alt="App Nupan Logo" />
                    <h1 className="app-title">APP-nupan</h1>
                </div>
                <div className="user-info">
                    <span className="welcome-message">{ownerid}님 환영합니다!</span>
                    <button className="profile-button" onClick={toggleMoreMenu} style={{cursor: 'pointer'}}>
                        <img className="profile-icon" src={MyPage} alt="Profile" />
                        {isMoreOpen && (
                            <div className="profile-menu">
                                <button onClick={goToMyPage} style={{cursor: 'pointer'}}>내 정보</button>
                                <button onClick={goToLogOut} style={{cursor: 'pointer'}}>로그아웃</button>
                            </div>
                        )}
                    </button>
                </div>
            </div>
            
            <div className="main-content">
                <div className="button-container">
                    <button className="main-button menu-edit" onClick={MenuEdit} style={{cursor: 'pointer'}}>
                        <img src={EPMENU} alt="Menu Edit" />
                        <span>메뉴편집</span>
                    </button>
                    <button className="main-button order-check" onClick={goToOrderCheck} style={{cursor: 'pointer'}}>
                        <img src={Vector} alt="Order Check" />
                        <span>주문확인</span>
                    </button>
                    <button className="main-button qr-print" onClick={goToQr} style={{cursor: 'pointer'}}>
                        <img src={QR} alt="QR Print" />
                        <span>QR, 출력</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
