import '../../css/Sign/SignInCom.css';

import Icon from '../../assets/IconSample.png';



export default function SignInCompletePage() {
    const isRegistered = localStorage.getItem('isRegistered');
    // isRegistered = false





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
            {isRegistered ? (
                <>
                    <div className="sign-in-complete">
                        회원가입 신청이 완료되었습니다.
                    </div>
                    <div className="waiting-for-admin">
                        관리자 승인을 기다려주세요.
                    </div>
                    <div className="to-main-bt">
                        <span className="to-main">
                            메인 페이지로
                        </span>
                    </div>
                </>
            ) : (
                <div className="not-registered">
                    사업자 등록번호가 유효하지 않습니다. 다시 확인해주세요.
                </div>
            )}
        </div>
    );
}
