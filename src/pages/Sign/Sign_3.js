import React from 'react';
import '../../css/Sign/Sign_3.css'
import {useNavigate} from "react-router-dom";
export  function Sign_3() {
    const navigate = useNavigate();
    const gotoSignin = () => {
        navigate('/');
    };
    return (
        <div className="id5">
            <div className="app-nupan5">
                APP-nupan
            </div>
            <div className="line5-5">
            </div>
            <div className="id5-1">
                회원가입 신청이 완료되었습니다.
            </div>
            <div className="id5-2">
                관리자 승인을 기다려주세요.
            </div>
            <div className="id5-4">
        <span className="id5-3" onClick={gotoSignin}>
          로그인하기
        </span>
            </div>
        </div>
    )
}
export default Sign_3;
