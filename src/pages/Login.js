import React, { useState } from 'react';
import '../css/Loginstyle.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useMutation } from "react-query";

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goTosign = () => {
        navigate('/Sign');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    }

    const login = useMutation({
        mutationFn: async (loginUser) => {
            try {
                const response = await axios.post("http://43.201.92.62/owner/login", loginUser);
                return response;
            } catch (error) {
                throw error;
            }
        },
        onSuccess: (response) => {
            if (response && response.data && response.data.message) {
                alert(response.data.message); // 로그인 성공 메시지
                localStorage.setItem("accessToken", "임의의액세스토큰"); // 실제 애플리케이션에서는 서버 응답으로 받은 토큰 저장
                navigate("/Main");
            }
        },
        onError: (error) => {
            // 오류 처리
            let errorMessage = "로그인 중 오류가 발생했습니다.";
            if (error.response) {
                // HTTP 상태 코드별 에러 메시지 처리
                const status = error.response.status;
                const errorData = error.response.data;
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                } else if (status === 400) {
                    errorMessage = "요청이 잘못되었습니다. 입력한 정보를 다시 확인해주세요.";
                } else if (status === 401) {
                    errorMessage = "인증 실패: 아이디 또는 비밀번호를 확인해주세요.";
                } else if (status === 404) {
                    errorMessage = "서버를 찾을 수 없습니다. URL을 확인해주세요.";
                } else {
                    errorMessage = "알 수 없는 오류가 발생했습니다.";
                }
            } else if (error.request) {
                errorMessage = "서버로부터 응답을 받지 못했습니다. 네트워크 연결을 확인해주세요.";
            } else {
                errorMessage = error.message;
            }
            alert(errorMessage);
        }
    });

    const loginHandleSubmit = () => {
        login.mutate({ ownerid: email, password: password });
    }

    return (
        <div className="id1-1">
            <div className="app-nupan1-2">APP-nupan</div>
            <div className="line1-5"></div>
            <div className="container1-11">
                <div className="container1-10">
                    <div className="id1-7">ID</div>
                    <span className="id1-8">비밀번호</span>
                </div>
                <div className="container1-1">
                    <input
                        type="text"
                        name="email"
                        className="id1-4"
                        placeholder="아이디를 입력해주세요"
                        onChange={handleChange}
                        value={email}
                    />
                    <input
                        type="password"
                        name="password"
                        className="id1-5"
                        placeholder="비밀번호를 입력해주세요"
                        autoComplete="current-password"
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <button className="id1-3" onClick={loginHandleSubmit}>
                    <span className="id1-9">로그인</span>
                </button>
            </div>
            <div className="container1-2">
                <button className="id1-2" onClick={goTosign}>회원가입</button>
                <span className="id1">ID/비밀번호찾기</span>
            </div>
            <div className="info1">
                <div className="mdiinformation-outline"></div>
                <span className="app-nupan1-6">App-nupan웹은 사업자 전용입니다.</span>
            </div>
        </div>
    );
}

export default Login;
