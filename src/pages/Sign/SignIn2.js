import '../../css/Sign/SignIn2.css'
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
export default function SignInPage2() {
    const navigate = useNavigate();
    const [storename, setStoreName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const ownerid = localStorage.getItem('ownerid');
    // const gotoSignin = () => {
    //     navigate('/Sign_2');
    // };
    const gotoMain = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Sign_3')
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 기본 제출 이벤트 방지


        try {
            const response = await fetch('http://43.201.92.62/store/regist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({storename, address, contact, ownerid}),
            });

            if(response.ok) {
                // 회원가입 성공 처리
                console.log('가맹점등록 성공');
                gotoMain()
            } else {  // 오류 처리
                // 서버에서 반환된 오류 메시지를 로그로 찍고, 사용자에게 알림
                const errorData = await response.json(); // 오류 정보가 담긴 응답을 JSON 형태로 변환
                throw new Error(`가맹점 등록 실패: ${errorData.message}`);
            }
        } catch (error) {
            // 네트워크 오류 또는 예상치 못한 오류 처리
            console.error('서버 통신 오류 또는 처리 중 오류 발생', error);
            alert(`서버 통신 중 오류가 발생했습니다. 나중에 다시 시도해주세요. 오류 메시지: ${error.message}`);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
        <div className="signInPage2">
            <div className="app-nupan">
                APP-nupan
            </div>
            <div className="line-5">
            </div>
            <div className="sign-in">
                회원가입
            </div>

            <div className="container-2">
                <div className="phone-num">
                    전화번호
                </div>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)} // 추가
                    className="phone-num-space"
                    placeholder="가게 전화번호를 입력해주세요"
                    autoComplete="contact"/>
            </div>
            <div className="container-3">
                <div className="store-name">
                    가게이름
                </div>

                <input
                    type="text"
                    value={storename}
                    onChange={(e) => setStoreName(e.target.value)} // 추가
                    className="store-name-space"
                    placeholder="가게이름을 입력해주세요"
                    autoComplete="storename"/>
            </div>

            <div className="container">
                <div className="store-address">
                    가게주소
                </div>

                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} // 추가
                    className="store-address-space"
                    placeholder="가게주소를 입력해주세요"
                    autoComplete="address"/>
            </div>
            <button className="sign-in-bt" type={"submit"}>
        <span className="sing-in-request">
          회원가입 신청
        </span>
            </button>
        </div>
        </form>
    )
}
