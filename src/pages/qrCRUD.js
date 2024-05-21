import '../css/qr.css';
import QRCode from 'qrcode.react';
import { useState, useEffect } from "react";

import Icon from '../assets/IconSample.png';


// QR 생성 함수 - 이제 ownerid와 tableidx를 파라미터로 받아 사용합니다.
const generateQR = (ownerid, tableidx) => {
    console.log(`QR 생성됨! Owner ID: ${ownerid}, Table Index: ${tableidx}`);
    // 여기에서는 콘솔 로그만 찍고 있지만, 실제로는 이 정보를 바탕으로 QR 코드를 생성할 수 있습니다.
    return `Owner ID: ${ownerid}, Table Index: ${tableidx}`; // 이 값을 QR 코드 값으로 사용합니다.
};

// QR CRUD 컴포넌트
export default function QrCRUD() {
    const [showTableFrame, setShowTableFrame] = useState(false);
    const [tableCount, setTableCount] = useState(0);
    const [qrGenerated, setQRGenerated] = useState(false);
    const ownerid = localStorage.getItem('ownerid');

    // 각 테이블에 대한 QR 코드 생성 상태를 관리하기 위한 상태
    const [qrValues, setQrValues] = useState([]);

    useEffect(() => {
        // 테이블 수가 변경될 때마다 QR 코드 배열을 초기화합니다.
        setQrValues(Array(tableCount).fill('')); // 테이블 수에 맞게 배열 크기 조정
    }, [tableCount]);

    const handleTableCreateClick = () => {
        setShowTableFrame(true);
    };

    const handleCancelClick = () => {
        setShowTableFrame(false);
    };

    const handleGenerateQRClick = () => {
        const newQrValues = qrValues.map((_, index) => generateQR(ownerid, index + 1));
        setQrValues(newQrValues); // 새로운 QR 코드 값으로 상태 업데이트
        setQRGenerated(true); // QR 코드 생성됨을 표시
    };

    const handleTableCountChange = (event) => {
        const count = parseInt(event.target.value);
        setTableCount(count);
        setQRGenerated(false); // 테이블 수 변경 시 QR 코드 생성 상태 초기화
    };

    return (
        <div className="qrCRUD">
            <div className="headerContainer-qr">
                <div className="logoContainer-qr">
                    <img className="appNupanIcon-qr" src={Icon} alt="">
                    </img>
                    <div className="app-nupan11">
                        APP-nupan
                    </div>
                </div>
                <div className="goBackBtn-qr">
                    <div className="goBackTxt-qr">
                        뒤로가기
                    </div>
                </div>
            </div>

            <div className="line-511"></div>
            <div className="container-511">
                <div className="table-number11">
                    테이블 번호
                </div>
                <button className="table-add-bt" onClick={handleTableCreateClick}>
                    <span className="table-add">
                        테이블추가
                    </span>
                </button>
            </div>
            {[...Array(tableCount)].map((_, index) => (
                <div key={index} className="table-no-111">
                    <div className="container-211">
                        {index + 1}
                    </div>
                    <div className="container11">
                        <div className="qradd-bt-111">
                            {/* QR 코드 값이 존재하면 QRCode 컴포넌트를 통해 표시합니다. */}
                            {qrValues[index] && <QRCode value={qrValues[index]} />}
                        </div>
                    </div>
                </div>
            ))}
            <div className={`tableframeeee11 ${showTableFrame ? 'show-tableframe' : ''}`}>
                <div className="tablessssss11">
                    테이블 생성
                </div>
                <div className="container-311">
                    <div className="tablenummmmm11">
                        테이블 수 :
                    </div>
                    <input
                        type="number"
                        value={tableCount}
                        onChange={handleTableCountChange}
                        min={0}
                    />
                </div>
                <div className="container-11111">
                    <div className="tablesubmit11" onClick={handleCancelClick}>
                        <span className="tbsub11">
                            취소
                        </span>
                    </div>
                    <div className="tablesubmit-111" onClick={handleGenerateQRClick}>
                        <span className="tbsub-111">
                            생성
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
