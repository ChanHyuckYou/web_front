import '../../css/Sign/SignInCom.css';
import {useNavigate} from 'react-router-dom';
import Icon from '../../assets/IconSample.png';



export default function SignInCompletePage() {
    const navigate = useNavigate();
    const gotoLogin = () => {
        navigate('/');
    };
    return (
        <div className="signInCom">
            <div className="logoContainer">
                <img className="appNupanIcon" src={Icon} alt="">
                </img>
                <div className="app-nupan">
                    APP-nupan
                </div>
            </div>
            <div className="line-5">
            </div>
            <div className="sign-in-complete">
                회원가입 신청이 완료되었습니다.
            </div>
            <div className="waiting-for-admin">
                관리자 승인을 기다려주세요.
            </div>
            <div className="to-main-bt" onClick={gotoLogin} style={{cursor: 'pointer'}}>
                <span className="to-main">
                    로그인 페이지로
                </span>
            </div>
        </div>
    );
}
