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
        console.log("선택된 productid :", selectedMenu.productid);
        navigate('/Main/Menu/Add', { state: { selectedMenu } });
    };

    // 컴포넌트가 마운트될 때 메뉴 정보를 가져옴
    useEffect(() => {
        if (!ownerid) {
            alert("잘못된 접근입니다. 다시 로그인 해주세요.");
            navigate('/');
        }
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
    }, [ownerid, navigate]);

    const goToMenuAdd = () => {
        localStorage.removeItem('productid');
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/Menu/Add');
    };

    const goBack = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main');
    };

    const handleDelete = async (productid) => {
        const confirmDelete = window.confirm('메뉴를 삭제하시겠습니까?');
        if (confirmDelete) {
            try {
                const response = await fetch(`http://43.201.92.62/store/${productid}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setMenus(menus.filter(menu => menu.productid !== productid));
                    alert('메뉴가 성공적으로 삭제되었습니다.');
                } else {
                    const errorResponse = await response.json();
                    console.error('Failed to delete menu item:', errorResponse.error);
                    alert(`Failed to delete menu: ${errorResponse.error}`);
                }
            } catch (error) {
                console.error('Error deleting menu item:', error);
                alert("Failed to delete menu");
            }
        }
    };

    // Utility function to format numbers with commas
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="menu-edit-container">
            <div className="menu-edit-header">
                <div className="menu-edit-logo">
                    <img className="menu-edit-appNupanIcon" src={Icon} alt="App Nupan Logo" />
                    <h1 className="menu-edit-app-title">APP-nupan</h1>
                </div>
                <button className="menu-edit-back-button" onClick={goBack} style={{ cursor: 'pointer' }}>뒤로가기</button>
            </div>
            <div className="menu-edit-divider"></div>
            <div className="menu-edit-menu-header">
                <h2>메뉴 관리</h2>
                <button className="menu-edit-add-button" onClick={goToMenuAdd} style={{ cursor: 'pointer' }}>메뉴 추가</button>
            </div>
            <div className="menu-edit-list">
                {menus.map((menu) => (
                    <div className="menu-edit-item" key={menu.productid}>
                        <img className="menu-edit-image" src={menu.imageurl} alt={menu.productname} />
                        <div className="menu-edit-details">
                            <h3 className="menu-edit-name">{menu.productname}</h3>
                            <p className="menu-edit-description">{menu.description}</p>
                            <p className="menu-edit-category">{menu.category}</p>
                        </div>
                        <div className="menu-edit-actions">
                            <button className="menu-edit-edit-button" onClick={() => goToMenuEdit(menu)} style={{ cursor: 'pointer' }}>수정</button>
                            <button className="menu-edit-delete-button" onClick={() => handleDelete(menu.productid)} style={{ cursor: 'pointer' }}>삭제</button>
                            <p className="menu-edit-price">Price : {numberWithCommas(menu.price)}₩</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
