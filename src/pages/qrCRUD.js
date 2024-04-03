import '../css/qr.css';
import React from 'react';

export function QrCRUD() {
    return (
        <div className="qrqr">
            <div className="qrapp-nupan">APP-nupan</div>
            <div className="qrline-5"></div>
            <div className="qrcontainer-30">
                <div className="qrcontainer-t">테이블 번호</div>
                <div className="qrcontainer-13">
                    <span className="qrcontainer-14">테이블추가</span>
                </div>
            </div>

            <div className="qrcontainer-9">
                <div className="qrcontainer-12">1</div>
                <div className="qrcontainer">
                    <div className="qrqr-5">
                        <div className="qrbiqr-code-scan-2">
                            {/* <img className="group-2" src="assets/vectors/Group5_x2.svg" /> */}
                        </div>
                        <span className="qrqr-6">QR</span>
                    </div>
                    <div className="qrcontainer-10">
                        <span className="qrcontainer-11">삭제</span>
                    </div>
                </div>
            </div>

            <div className="qrcontainer-5">
                <div className="qrcontainer-8">2</div>
                <div className="qrcontainer-20">
                    <div className="qrqr-3">
                        <div className="qrbiqr-code-scan-1">
                            {/* <img className="group-1" src="assets/vectors/Group2_x2.svg" /> */}
                        </div>
                        <span className="qrqr-4">QR</span>
                    </div>
                    <div className="qrcontainer-6">
                        <span className="qrcontainer-7">삭제</span>
                    </div>
                </div>
            </div>

            <div className="qrcontainer-100">
                <div className="qrcontainer-4">3</div>
                <div className="qrcontainer-1">
                    <div className="qrqr-1">
                        <div className="qrbiqr-code-scan">
                            {/* <img className="group" src="assets/vectors/Group1_x2.svg" /> */}
                        </div>
                        <span className="qrqr-2">QR</span>
                    </div>
                    <div className="qrcontainer-2">
                        <span className="qrcontainer-3">삭제</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QrCRUD;
