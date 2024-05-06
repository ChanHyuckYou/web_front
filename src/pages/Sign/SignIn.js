import '../../css/Sign/SignIn.css'

export default function SignInPage1() {
    return (
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
                <div className="inputid">
                </div>
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
                <div className="inputconfpwd">
                </div>
            </div>
            <div className="container-3">
                <div className="confrimpwd">
                    비밀번호 확인
                </div>
                <div className="pwdconff">
                </div>
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
            <div className="nextform">
        <span className="nexybtn">
          다음으로
        </span>
            </div>
        </div>
    )
}