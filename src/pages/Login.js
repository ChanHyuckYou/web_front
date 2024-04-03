import React, {useState} from 'react';
import '../css/Loginstyle.css'
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import {useMutation} from "react-query";
// eslint-disable-next-line no-unused-vars
// import main from './main'

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const goTosign = () => {
        navigate('/Sign');
    };
    const [loginUser, setLoginUser] = useState({ email, password });
    // 오류 메시지 상태를 사용하는 부분 제거 및 사용하지 않는 setUsername, setPassword 제거

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    }


    const login = useMutation(async (loginUser) => {
        try {
            return await axios.post("http://localhost:8080/login", loginUser);
        } catch (error) {
            let errorMessage = "로그인 중 오류가 발생했습니다.";
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        errorMessage = "요청이 잘못되었습니다. 입력한 정보를 다시 확인해주세요.";
                        break;
                    case 401:
                        errorMessage = "인증 실패: 아이디 또는 비밀번호를 확인해주세요.";
                        break;
                    case 403:
                        errorMessage = "접근이 거부되었습니다. 권한을 확인해주세요.";
                        break;
                    case 404:
                        errorMessage = "서버를 찾을 수 없습니다. URL을 확인해주세요.";
                        break;
                    // 기타 다른 상태 코드에 대한 처리를 추가할 수 있습니다.
                    default:
                        if (error.response.data && error.response.data.message) {
                            errorMessage = error.response.data.message;
                        } else if (error.response.statusText) {
                            errorMessage = error.response.statusText;
                        }
                        break;
                }
            } else if (error.request) {
                errorMessage = "서버로부터 응답을 받지 못했습니다. 네트워크 연결을 확인해주세요.";
            } else {
                errorMessage = error.message;
            }

            alert(errorMessage);
            throw error;
        }

    }, {
        onSuccess: (response) => {
            if (response.status === 200) {
                localStorage.setItem("accessToken", response.data);
                navigate("/Main");
            }
        }
    });

    const loginHandleSubmit = async () => {
        login.mutate(loginUser);
    }


    // const googleAuthClickHandle = () => {
        //     window.location.href="http://localhost:8080/oauth2/authorization/google";
        // }
        //
        // const naverAuthCliclkHandle = () => {
        //     window.location.href="http://localhost:8080/oauth2/authorization/naver";
        // }
        //
        // const kakaoAuthClickHandle = () => {
        //     window.location.href="http://localhost:8080/oauth2/authorization/kakao";
        // }

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
                            value={loginUser.email} // 수정
                        />

                        <input
                            type="password"
                            name="password" // name 속성 추가
                            className="id1-5"
                            placeholder="비밀번호를 입력해주세요"
                            autoComplete="current-password"
                            onChange={handleChange}
                            value={loginUser.password} // 수정
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
                <button className="id1-2"
                            onClick={goTosign}>
                        회원가입
                    </button>
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
