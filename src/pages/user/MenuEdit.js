import '../../css/user/MenuEdit.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Icon from '../../assets/IconSample.png';

export default function MenuEditPage() {
    const navigate = useNavigate();
    const ownerid = localStorage.getItem('ownerid');
    const [menus, setMenus] = useState([]); // 메뉴 정보를 저장할 상태



    const goToMenuEdit = (selectedMenu) => {
        localStorage.setItem('ownerid', ownerid);
        localStorage.setItem('productid', selectedMenu.productid);
        console.log("선택된 productid :", selectedMenu);
        // navigate 함수를 통해 선택한 menu만을 상태로 전달합니다.
        navigate('/Main/Menu/Add', { state: { selectedMenu } });
    };




    // 컴포넌트가 마운트될 때 메뉴 정보를 가져옴
    useEffect(() => {
        // 메뉴 정보를 가져오는 함수
        const fetchMenus = async () => {
            try {
                const response = await fetch(`http://43.201.92.62/store/${ownerid}/menu`);
                if (!response.ok) {
                    throw new Error('서버 통신에 실패했습니다');
                }
                const data = await response.json();
                setMenus(data.menu); // 가져온 메뉴 정보를 상태에 저장
            } catch (error) {
                console.error("메뉴 정보를 가져오는데 실패했습니다", error);
            }
        };
        fetchMenus();
    }, [ownerid]);

    const goToMenuAdd = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/Menu/Add');
    };

    const goBack = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate(-1);
    };


    return (
        <div className="menuEdit">
            <div className="headerContainer">
                <div className="logoContainer">
                    <img className="appNupanIcon" src={Icon} alt="">
                    </img>
                    <div className="app-nupan">
                        APP-nupan
                    </div>
                </div>
                <div className="goBackBtn">
                    <div className="goBackTxt" onClick={goBack} style={{cursor: 'pointer'}}>
                        뒤로가기
                    </div>
                </div>
            </div>

            <div className="line-5"></div>
            <div className="menu-tab-edit">
                메뉴 탭 관리
            </div>
            <div className="container-14">
                <div className="recommended-menu">
                    <span className="recommended">
                        추천 메뉴
                    </span>
                </div>
                <div className="main-menu">
                    <span className="main">
                        주 메뉴
                    </span>
                </div>
                <div className="side-tab">
                    <span className="side">
                        사이드
                    </span>
                </div>
                <button className="tab-add-bt" type="button">
                    <span className="tab-add">
                        + 탭 추가
                    </span>
                </button>
            </div>
            <div className="container-7">
                <div className="menu-edit">
                    메뉴 관리
                </div>
                <button className="menu-add-bt" onClick={goToMenuAdd} style={{cursor: 'pointer'}}>
                    <span className="menu-add">
                        메뉴 추가
                    </span>
                </button>
            </div>
            <div className="menu-list">
                {menus.map((menu) => (
                    <div className="menu-1" key={menu.productid}>
                        <div className="container-6">
                                {/* 이미지 URL이 있다면 아래와 같이 사용할 수 있습니다. */}
                                <img
                                    className="menu-1-image"
                                     src={menu.imageurl} alt={""} />
                            <div className="container-4">
                                <div className="menu-1-name">
                                    {menu.productname}
                                </div>
                                <span className="menu-1-info">
                                    {menu.description}
                                </span>
                            </div>
                        </div>
                        <div className="container-18">
                            <div className="menu-1-tag">
                                #추천메뉴, 주메뉴
                            </div>
                            <div className="container-3">
                                <div className="container-10">
                                    <button className="edit-bt-1" type="button" style={{cursor: 'pointer'}} onClick={() => goToMenuEdit(menu)}>
                                        <span className="edit-1">
                                            수정
                                        </span>
                                    </button>
                                    <button className="del-bt" type="button" style={{cursor: 'pointer'}}>
                                        <span className="del-1">
                                            삭제
                                        </span>
                                    </button>
                                </div>
                                <span className="menu-1-price">
                                    <PriceComponent price={menu.price} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
function PriceComponent({ price }) {
    // 숫자를 지역화된 문자열로 변환하여 3자리마다 쉼표를 추가
    const formattedPrice = parseInt(price, 10).toLocaleString();

    return <div>{formattedPrice}원</div>;
}
