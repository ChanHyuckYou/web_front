import '../../css/Sign/SignIn.css'
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
export default function SignInPage1() {
    const navigate = useNavigate();
    const [ownerid, setOwnerId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const ownername = '찬혁';
    const ownercontact = '1'
    // const gotoSignin = () => {
    //     navigate('/Sign_2');
    // };
    const gotoMain = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Sign_2')
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 기본 제출 이벤트 방지

        // 비밀번호 확인 로직
        if(password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('http://43.201.92.62/owner/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ownerid, password, ownername, ownercontact}),
            });

            if(response.ok) {
                // 회원가입 성공 처리
                console.log('회원가입 성공');
                gotoMain()
            } else {  // 오류 처리
                // 서버에서 반환된 오류 메시지를 로그로 찍고, 사용자에게 알림
                const errorData = await response.json(); // 오류 정보가 담긴 응답을 JSON 형태로 변환
                throw new Error(`회원가입 실패: ${errorData.message}`);
            }
        } catch (error) {
            // 네트워크 오류 또는 예상치 못한 오류 처리
            console.error('서버 통신 오류 또는 처리 중 오류 발생', error);
            alert(`서버 통신 중 오류가 발생했습니다. 나중에 다시 시도해주세요. 오류 메시지: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="signInPage">
            <div className="app-nupan">
                APP-nupan
            </div>
            <div className="line-5">
            </div>
            <div className="text-auth">
                회원가입
            </div>
            <div className="container-4">
                <div className="id">
                    ID
                </div>
                <input
                    type="text"
                    value={ownerid}
                    onChange={(e) => setOwnerId(e.target.value)} // 추가
                    className="inputid"
                    placeholder="아이디를 입력해주세요"
                    autoComplete="email"/>

            <div className="nick-ok">
          <span className="id-ok">
            ID 중복확인
          </span>
            </div>
        </div>
            <div className="container-2">
                <div className="pwd">
                    비밀번호
                </div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // 추가
                    placeholder="비밀번호를 입력해주세요"
                    autoComplete="new-password" // 수정
                    className="inputconfpwd"/>
            </div>
            <div className="container-3">
                <div className="confrimpwd">
                    비밀번호 확인
                </div>
                <input
                    type="password"
                    value={confirmPassword} // 수정
                    onChange={(e) => setConfirmPassword(e.target.value)} // 추가
                    placeholder="비밀번호를 확인해주세요"
                    autoComplete="new-password" // 수정
                    className="pwdconff"/>
            </div>
            <div className="container">
                <div className="email">
                    이메일
                </div>
                <div className="inputpwd">
                </div>
                <div className="confrimpwd-2">
          <span className="email-authen">
            인증번호 발송
          </span>
                </div>
            </div>
            <div className="container-1">
                <div className="authen">
                    인증번호
                </div>
                <div className="pwdcf">
                </div>
            </div>
            <button className="nextform"
                    type="submit">
        <span className="nexybtn">
          다음으로
        </span>
            </button>
        </div>
        </form>
    )
}
