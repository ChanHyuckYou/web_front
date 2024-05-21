import '../../css/Sign/SignIn.css'
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

import Icon from '../../assets/IconSample.png';

export default function SignInPage1() {
    const navigate = useNavigate();
    const [ownerid, setOwnerId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ownername, setOwnerName] = useState('');
    const [ownercontact, setOwnerContact] = useState('')
    const [isIdUnique, setIsIdUnique] = useState(true); // ID 중복 상태 추가
    // const gotoSignin = () => {
    //     navigate('/Sign_2');
    // };
    const gotoMain = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Sign_2')
    }
    const checkIdDuplicate = async () => {
        if (!ownerid) {
            alert('ID를 입력해주세요.');
            return;
        }
        try {
            // GET 요청이므로, URL에 쿼리 파라미터를 포함시켜 요청합니다.
            const url = `http://43.201.92.62/owner/check?ownerid=${encodeURIComponent(ownerid)}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const data = await response.json();
                // 백엔드에서 'This ownerid is available' 메시지를 반환하면, ID가 중복되지 않음을 의미합니다.
                if (data.message === 'This ownerid is available') {
                    alert('사용 가능한 ID입니다.');
                    setIsIdUnique(true);
                } else {
                    alert('이미 사용 중인 ID입니다.');
                    setIsIdUnique(false);
                }
            } else {
                alert('ID 중복 확인 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('서버 통신 오류', error);
            alert('서버 통신 중 오류가 발생했습니다.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 기본 제출 이벤트 방지

        // 아이디 길이 검증
        if (ownerid.length < 6) {
            alert('아이디는 6자 이상이어야 합니다.');
            return;
        }

        // 비밀번호 복잡성 검증
        // 영문자, 숫자, 특수문자를 포함하는 정규식
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}":;'<>?,.]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('비밀번호는 영문자, 숫자, 특수문자를 포함해야 합니다.');
            return;
        }

        if (!isIdUnique) {
            alert('ID 중복을 확인해주세요.');
            return;
        }

        // 비밀번호 확인 로직
        if (password !== confirmPassword) {
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

            if (response.ok) {
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
                <div className="logoContainer">
                    <img className="appNupanIcon" src={Icon} alt="">
                    </img>
                    <div className="app-nupan">
                        APP-nupan
                    </div>
                </div>
                <div className="line-5">
                </div>
                <div className="text-auth">
                    회원가입
                </div>
                <div className="itemContainer">
                    <div className="textContainer">
                        <div className="id">
                            ID
                        </div>
                        <div className="pwd">
                            비밀번호
                        </div>
                        <div className="confirmpwd">
                            비밀번호 확인
                        </div>
                        <div className="name">
                            이름
                        </div>
                        <div className="phoneNum">
                            전화번호
                        </div>
                    </div>
                    <div className="inputContainer">
                        <input
                            type="text"
                            value={ownerid}
                            onChange={(e) => setOwnerId(e.target.value)} // 추가
                            className="inputid"
                            placeholder="아이디를 입력해주세요"
                            autoComplete="ownername"/>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // 추가
                            placeholder="비밀번호를 입력해주세요"
                            autoComplete="new-password" // 수정
                            className="inputpwd"/>
                        <input
                            type="password"
                            value={confirmPassword} // 수정
                            onChange={(e) => setConfirmPassword(e.target.value)} // 추가
                            placeholder="비밀번호를 확인해주세요"
                            autoComplete="new-password" // 수정
                            className="inputpwd2"/>
                        <input
                            type="text"
                            value={ownername} // 수정
                            onChange={(e) => setOwnerName(e.target.value)} // 추가
                            placeholder="이름을 입력해주세요."
                            autoComplete="ownername" // 수정
                            className="inputName"/>
                        <input
                            type="text"
                            value={ownercontact} // 수정
                            onChange={(e) => setOwnerContact(e.target.value)} // 추가
                            placeholder="전화번호를 입력해주세요."
                            autoComplete="contact" // 수정
                            className="inputPhone"/>
                    </div>
                    <div
                        className="btnContainer">
                        <button className="nick-ok"
                                type={"button"}
                                onClick={checkIdDuplicate}>
                            <span className="id-ok">
                                ID 중복확인
                            </span>
                        </button>
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
