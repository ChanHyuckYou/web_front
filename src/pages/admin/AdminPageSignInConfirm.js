import React, {useState, useEffect} from 'react';
import '../../css/admin/AdminPageSignInConfirm.css'
import axios from 'axios';

import Icon from '../../assets/IconSample.png';

export default function AdminPageSignInConfirm() {
    // 상태 정의
    const [storeInfo, setStoreInfo] = useState([]);

    // 컴포넌트가 마운트될 때 데이터 요청
    useEffect(() => {
        fetchStoreInfo();
    }, []);

    const fetchStoreInfo = async () => {
        try {
            const response = await fetch('http://43.201.92.62/franchise');
            const data = await response.json();
            setStoreInfo(data.pendingStores); // 수정된 부분
        } catch (error) {
            console.error("Error fetching store info:", error);
        }
    };
    const handleConfirm = (tempstoreid) => {
        axios.post('http://43.201.92.62/franchise/confirm', {tempstoreid: tempstoreid})
            .then(response => {
                console.log(response.data);
                // 성공적으로 처리된 경우, 사용자에게 알림 또는 상태 업데이트
                alert('가게가 성공적으로 승인되었습니다.');
                fetchStoreInfo();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('가게 승인 처리 중 오류가 발생했습니다.');
            });
    };

    // 거절 버튼 클릭 이벤트 핸들러
    const handleDeny = (tempstoreid) => {
        axios.put('http://43.201.92.62/franchise/deny', {tempstoreid: tempstoreid})
            .then(response => {
                console.log(response.data);
                // 성공적으로 처리된 경우, 사용자에게 알림 또는 상태 업데이트
                alert('가게 신청이 거절되었습니다.');
                fetchStoreInfo();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('가게 거절 처리 중 오류가 발생했습니다.');
            });
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
                    <div className="sign-in-confirm-bt">
                        회원가입 승인
                    </div>
                    <div className="line-8">
                    </div>
                    <div className="store-user-bt">
                        사업자 회원 조회
                    </div>
                    <div className="app-user-bt">
                        앱 회원 조회
                    </div>
                </div>
                <div className="store-info">
                    {Array.isArray(storeInfo) && storeInfo.map((store, index) => (
                        <div key={index} className="storeContainer"> {/* key 추가 권장 */}
                            <div className="storeInfoContainer">
                                <div className="storeInfo1Container">
                                    <span className="storeIdText">{store.tempstoreid}</span>
                                    <span className="storeNameText">{store.storename}</span>
                                </div>
                                <div className="storeInfo2Container">
                                    {/*<span className="input-13">{store.address}</span>*/}
                                    <span className="input-11">{store.address}</span>
                                    <span className="input-12">{store.contact}</span>
                                </div>
                            </div>
                            <div className="container-2">
                                <button
                                    onClick={() => handleConfirm(store.tempstoreid)}
                                    className="confirm-bt-3">
                                    <span className="btnsub-3">승인</span>
                                </button>
                                <button
                                    onClick={() => handleDeny(store.tempstoreid)}
                                    className="deny-bt-3">
                                    <span className="btncan-3">거절</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
