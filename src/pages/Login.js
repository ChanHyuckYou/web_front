import React, {useEffect, useState} from 'react';
import '../css/Loginstyle.css'
import {useNavigate} from 'react-router-dom';
import axios from "axios"
// eslint-disable-next-line no-unused-vars
// import main from './main'

export function Login() {
    const navigate = useNavigate();
    const goTosign = () => {
        navigate('/Sign');
    };
    const goTomain = () => {
        navigate('/Main');
    };
    // const [users, serUsers] = useState();
    // useEffect(() => {
    //     async function getUser() {
    //         const response = await axios.get('/user');
    //         const data = response.data;
    //
    //         setUsers(data);
    //     }
    // //     getUser();
    // }, []);
    return (
        <div className="id1-1">
            <div className="app-nupan1-2">
                APP-nupan
            </div>
            <div className="line1-5">
            </div>
            <div className="container1-11">
                <div className="container1-10">
                    <div className="id1-7">
                        ID
                    </div>
                    <span className="id1-8">
                     비밀번호
                    </span>
                </div>
                <div className="container1-1">

                    <input type="text" id="username" className={"id1-4"} placeholder="아이디를 입력해주세요" autoComplete="username"/>

                    <input type="password" id="password" className={"id1-5"} placeholder="비밀번호를 입력해주세요"
                           autoComplete="current-password"/>
                </div>

                <button className="id1-3"
                        onClick={goTomain}>
                    <span className="id1-9">
                        로그인
                      </span>
                </button>

            </div>

            <div className="container1-2">
                <button className="id1-2"
                        onClick={goTosign}>
                    회원가입</button>
                <span className="id1">
          ID/비밀번호찾기
        </span>
            </div>
            <div className="info1">
                <div className="mdiinformation-outline">
                    {/*<img className="vector" />*/}
                </div>
                <span className="app-nupan1-6">
          App-nupan웹은 사업자 전용입니다.
        </span>
            </div>
        </div>
    )
}
export default Login;
