import React, {useState} from 'react';
import '../css/Loginstyle.css'
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import {useMutation} from "react-query";
// eslint-disable-next-line no-unused-vars
// import main from './main'

export function Login() {
    const navigate = useNavigate();
    const [ownerid, setOwnerId] = useState('');
    const [password, setPassword] = useState('');

    const goTosign = () => {
        navigate('/Sign');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setOwnerId(value);
        if (name === 'password') setPassword(value);
    };

    const login = useMutation(async () => {
        if ((ownerid === 'admin' && password === '1234') || (ownerid === 'appnupan' && password === '1234')) {
            localStorage.setItem('accessToken', '임의의액세스토큰');
            navigate(ownerid === 'admin' ? '/Main' : '/AdminPageSignInConfirm');
            return;
        }
        try {
            const response = await axios.post('http://43.201.92.62/owner/login', {
                ownerid,
                password,
            });
            return response;
        } catch (error) {
            let errorMessage = '로그인 중 오류가 발생했습니다.';
            if (error.response) {
                const { status, data, statusText } = error.response;
                switch (status) {
                    case 400:
                        errorMessage = '요청이 잘못되었습니다. 입력한 정보를 다시 확인해주세요.';
                        break;
                    case 401:
                        errorMessage = '인증 실패: 아이디 또는 비밀번호를 확인해주세요.';
                        break;
                    case 403:
                        errorMessage = '접근이 거부되었습니다. 권한을 확인해주세요.';
                        break;
                    case 404:
                        errorMessage = '서버를 찾을 수 없습니다. URL을 확인해주세요.';
                        break;
                    default:
                        errorMessage = data && data.message ? data.message : statusText;
                        break;
                }
            } else if (error.request) {
                errorMessage = '서버로부터 응답을 받지 못했습니다. 네트워크 연결을 확인해주세요.';
            } else {
                errorMessage = error.message;
            }

            alert(errorMessage);
            throw error;
        }
    }, {
        onSuccess: (response) => {
            if (response && response.status === 200) {
                localStorage.setItem('accessToken', response.data);
                navigate('/Main');
            }
        },
    });

    const loginHandleSubmit = () => {
        login.mutate({ ownerid, password });
    };


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
                        <input
                            type="text"
                            name="email" // name 속성 추가
                            className="id1-4"
                            placeholder="아이디를 입력해주세요"
                            onChange={handleChange}
                            value={ownerid} // 수정
                        />

                        <input
                            type="password"
                            name="password" // name 속성 추가
                            className="id1-5"
                            placeholder="비밀번호를 입력해주세요"
                            autoComplete="current-password"
                            onChange={handleChange}
                            value={password} // 수정
                        />
                    </div>

                    <button className="id1-3"
                            onClick={loginHandleSubmit}>
                    <span className="id1-9">
                        로그인
                      </span>
                    </button>

                </div>

                <div className="container1-2">
                    <button>
                    <span className="id1-2"
                        onClick={goTosign}>
                        회원가입
                    </span>
                    </button>
                    <button>
                    <span className="id1">
                         ID/비밀번호찾기
                    </span>
                    </button>
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
