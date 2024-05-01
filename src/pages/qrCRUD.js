import '../css/qr.css';
import QRCode from 'qrcode.react';
import { useState } from "react";

// QR 생성 함수
const generateQR = () => {
    // 여기에 QR 생성 및 관련 동작 추가
    console.log("QR 생성됨!");
};

// QR CRUD 컴포넌트
export default function QrCRUD() {
    const [showTableFrame, setShowTableFrame] = useState(false);
    const [tableCount, setTableCount] = useState(0);
    const [qrGenerated, setQRGenerated] = useState(false);

    const handleTableCreateClick = () => {
        setShowTableFrame(true);
    };

    const handleCancelClick = () => {
        setShowTableFrame(false);
    };

    const handleGenerateQRClick = () => {
        generateQR(); // QR 생성 함수 호출
        setQRGenerated(true); // QR 코드 생성됨을 표시
    };

    const handleTableCountChange = (event) => {
        const count = parseInt(event.target.value);
        setTableCount(count);
        setQRGenerated(false); // 테이블 수 변경 시 QR 코드 생성 상태 초기화
    };

    return (
        <div className="qrCRUD">
            <div className="app-nupan11">
                APP-nupan
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
                            {qrGenerated && <QRCode value={`Table ${index + 1}`} />} {/* QR 코드 생성 여부에 따라 조건부 렌더링 */}

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
