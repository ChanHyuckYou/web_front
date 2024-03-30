import '../css/Mainstyle.css'
import React from 'react';
export function Main() {
    return (
        <div className="id2-1">
            <div className="app-nupan2">
                APP-nupan
            </div>
            <div className="line2-5">
            </div>
            <div className="user-name2">
                User_Name님 환영합니다.
            </div>
            <div className="container2">
                <div className="id2-10">
                    <div className="epmenu2">
                        {/*<img className="vector-9" />*/}
                    </div>
                    <span className="id2-4">
            메뉴편집
          </span>
                </div>
                <div className="id2-5">
                    <div className="solarclipboard-list-outline2">
                        {/*<img className="vector-7" />*/}
                    </div>
                    <span className="id2-8">
            주문확인
          </span>
                </div>
                <div className="qr">
                    <div className="biqr-code-scan">
                        {/*<img className="group" />*/}
                    </div>
                    <span className="qr-12">
            QR생성, 출력
          </span>
                </div>
            </div>
        </div>
    )
}
export default Main;
