import '../css/qr.css';
import Icon from '../assets/IconSample.png';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import {useNavigate} from "react-router-dom";
import jsPDF from 'jspdf';

const QrCRUD = () => {
    const [showTableFrame, setShowTableFrame] = useState(false);
    const [tableCount, setTableCount] = useState(0);
    const [loading, setLoading] = useState([]);
    const [selectedQR, setSelectedQR] = useState(null);
    const ownerid = localStorage.getItem('ownerid');
    const navigate = useNavigate();
    const [openQRdetail, setOpenQRdetail] = useState(false);
    const qrCanvasRef = useRef(null);

    const goBack = () => {
        navigate(-1);
    };

    const handleTableCreateClick = () => {
        setShowTableFrame(true);
    };

    const handleCancelClick = () => {
        setShowTableFrame(false);
        setTableCount(0);
    };

    const qrDetailOpen = (qr, index) => {
        setSelectedQR({url: qr, tableNumber: index + 1});
        setOpenQRdetail(true);
    };

    const qrDetailClose = () => {
        setOpenQRdetail(false);
        setSelectedQR(null);
    };

    const printQRCode = () => {
        if (selectedQR && qrCanvasRef.current) {
            const pdf = new jsPDF();
            const canvas = qrCanvasRef.current.querySelector('canvas');
            if (canvas) {
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'PNG', 20, 20, 40, 40);
                pdf.setFontSize(12);
                pdf.text(`TableNumber: ${selectedQR.tableNumber}`, 20, 190);
                pdf.save(`table-${selectedQR.tableNumber}-QR.pdf`);
            }
        }
    };

    const handleGenerateQRClick = async () => {
        if (tableCount > 0) {
            try {
                const response = await axios.post(`http://43.201.92.62/store/${ownerid}/qr`, {table_count: tableCount});
                if (response.status === 201) {
                    setLoading([...loading, ...response.data.qr_urls]);
                    setShowTableFrame(false);
                    setTableCount(0);
                    console.log("생성된 tableidx : ", loading);
                }
            } catch (error) {
                console.error('Error generating QR codes:', error);
            }
        }
    };

    const fetchQRCodes = useCallback(async () => {
        try {
            const response = await axios.get(`http://43.201.92.62/store/${ownerid}/qr`);
            if (response.status === 200) {
                setLoading(response.data.qr_codes.map(qr => qr.qr_path));
            }
        } catch (error) {
            console.error('Error fetching QR codes:', error);
        }
    }, [ownerid]);

    useEffect(() => {
        if (!ownerid) {
            alert("잘못된 접근입니다. 다시 로그인 해주세요.");
            navigate('/');}
        fetchQRCodes();
    }, [fetchQRCodes, ownerid, navigate]);

    return (
        <div className="qrCRUD">
            <div className="headerContainer-qr">
                <div className="logoContainer-qr">
                    <img className="appNupanIcon-qr" src={Icon} alt="App Icon"/>
                    <div className="app-nupan11">APP-nupan</div>
                </div>
                <div
                    className="goBackBtn-qr"
                    onClick={goBack}
                    style={{cursor: 'pointer'}}>
                    <div className="goBackTxt-qr">뒤로가기</div>
                </div>
            </div>
            
            <div className="container-511">
                <div className="table-number11">테이블 번호</div>
                <button className="table-add-bt" onClick={handleTableCreateClick}
                        style={{cursor: 'pointer'}}>
                    <span className="table-add">테이블추가</span>
                </button>
            </div>

            {loading.map((url, index) => (
                <div key={index} className="table-no-111"
                     onClick={() => qrDetailOpen(url, index)}>
                    <div className="container-211">{index + 1}</div>
                    <div className="container11">
                        <div className="qradd-bt-111">
                            <QRCode value={url}/>
                        </div>
                    </div>
                </div>
            ))}
            {openQRdetail && selectedQR && (
                <div className="qrDetailFrame">
                    <div className="table-no">
                        <span className="container">
                            테이블 번호
                        </span>
                        <span className="container-1">
                            {selectedQR.tableNumber}
                        </span>
                    </div>
                    <div className="qr-code" ref={qrCanvasRef}>
                        <QRCode value={selectedQR.url}/>
                    </div>
                    <div className="container">
                        <div className="close-bt"
                             onClick={qrDetailClose}>
                            <span className="container-2">
                                닫기
                            </span>
                        </div>
                        <div className="qr-print-bt" onClick={printQRCode}>
                            <span className="qr-1">QR인쇄</span>
                        </div>
                    </div>
                </div>
            )}
            <div className={`qrAddEvntFrame ${showTableFrame ? 'show-tableframe' : ''}`}>
                <div className="tableAddTxt">
                    테이블 추가
                </div>
                <div className="table-add-container">
                    <div className="setTableAddTxt">
                        추가할 테이블 수
                    </div>
                    <div className="eventReduceBtn"
                         onClick={() => setTableCount(prevCount => Math.max(prevCount - 1, 0))}
                         style={{cursor: 'pointer'}}>
                        <div className="reduceBox">
                        </div>
                        <span className="reduceMinus">
                            -
                        </span>
                    </div>
                    <div className="tableCountTxt">
                        {tableCount}
                    </div>
                    <div className="eventAddBtn"
                         onClick={() => setTableCount(prevCount => prevCount + 1)}
                         style={{cursor: 'pointer'}}>
                        <div className="addBox">
                        </div>
                        <span className="addPlus">
                            +
                        </span>
                    </div>
                </div>
                <div className="eventBtnContainer">
                    <div className="evntCancelBtn"
                         onClick={handleCancelClick}>
                            <span className="evntCancelTxt">
                                취소
                            </span>
                    </div>
                    <div className="evntSaveBtn"
                         onClick={handleGenerateQRClick}>
                            <span className="evntSaveTxt">
                                추가
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrCRUD;
