import React from 'react';
import '../../css/Sign/Sign_2.css'
import {useNavigate} from "react-router-dom";
export function Sign_2() {
    const navigate = useNavigate();
    const gotoSignin = () => {
        navigate('/Sign_3');
    };
    return (
        <div className="id44-2">
            <div className="app-nupan4">
                APP-nupan
            </div>
            <div className="line4-5">
            </div>
            <div className="id4-6">
                회원가입
            </div>
            <div className="container4">
                <div className="id4-3">
                    이름
                </div>
                <div className="id4">
                </div>
            </div>
            <div className="container4-1">
                <div className="id4-4">
                    전화번호
                </div>
                <div className="id4-2">
                </div>
            </div>
            <div className="container4-10">
                <div className="id4-8">
                    사업자 등록번호
                </div>
                <div className="id4-7">
                </div>
            </div>
            <button className="id4-9"onClick={gotoSignin}>
        <div className="id4-5" >
          회원가입 신청
        </div>
            </button>
        </div>
    )
}
export default Sign_2;
