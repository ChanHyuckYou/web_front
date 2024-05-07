import React, { useState, useEffect } from 'react';
import '../../css/admin/AdminPageSignInConfirm.css'
import axios from 'axios';

export default function AdminPageSignInConfirm() {
    // 상태 정의
    const [storeInfo, setStoreInfo] = useState([]);

    // 컴포넌트가 마운트될 때 데이터 요청
    useEffect(() => {
        fetchStoreInfo();
    }, []);

    const fetchStoreInfo = async () => {
        try {
            const response = await fetch('http://43.201.92.62/store');
            const data = await response.json();
            setStoreInfo(data.pendingStores); // 수정된 부분
        } catch (error) {
            console.error("Error fetching store info:", error);
        }
    };
    const handleConfirm = (tempstoreid) => {
        axios.post('http://43.201.92.62/store/confirm', { tempstoreid: tempstoreid })
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
        axios.put('http://43.201.92.62/store/deny', { tempstoreid: tempstoreid })
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
        <div className="AdminPageSignInConfirm">
            <div className="dsadsa">
                <div className="frame">
                    <span className="app-nupan">
                    APP-nupan
                    </span>
                    <span className="admin">
                    Admin
                    </span>
                </div>
                <div className="line-5">
                </div>
                <div className="frame-1">
                    <div className="container-8">
                        <div className="authbtn">
                            회원가입 승인
                        </div>
                        <div className="line-8">
                        </div>
                        <div className="storeuserbtn">
                            사업자 회원 조회
                        </div>
                        <span className="userbtn">
                        앱 회원 조회
                        </span>
                    </div>
                    <div className="store-info">
                        {Array.isArray(storeInfo) && storeInfo.map((store, index) => (
                            <div key={index} className="container-7"> {/* key 추가 권장 */}
                                <div className="store-info-1">
                                    <div className="container-12">
                                        <span className="input-15">{store.tempstoreid}</span>
                                        <span className="input-14">{store.storename}</span>
                                    </div>
                                    <div className="container-5">
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
                                        onClick={() => handleDeny(store.tempstoreid)} className="deny-bt-3">
                                        <span className="btncan-3">거절</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
