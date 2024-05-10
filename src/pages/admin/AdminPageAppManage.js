import '../../css/admin/AdminPageAppManage.css'

export function AdminPageAppAccountManage() {
    return (
        <div className="AdminPageAppManage">
            <div className="container-1">
        <span className="app-nupan">
          APP-nupan
        </span>
                <span className="admin">
          Admin
        </span>
            </div>
            <div className="line-5">
            </div>
            <div className="container-3">
                <div className="container">
                    <div className="user-name">
                        사용자명:
                    </div>
                    <div className="user-name-space">
                    </div>
                </div>
                <div className="container-4">
                    <div className="phone-number">
                        이메일:
                    </div>
                    <div className="phone-number-space">
                    </div>
                </div>
            </div>
            <div className="container-2">
                <div className="menu-list">
                    <div className="sing-in-confirm-bt">
                        회원가입 승인
                    </div>
                    <div className="store-user-bt">
                        사업자 회원 조회
                    </div>
                    <span className="app-user-bt">
            앱 회원 조회
          </span>
                    <div className="line-8">
                    </div>
                </div>
                <div className="account-info">
                    <div className="account-1">
                        <div className="ellipse-1">
                        </div>
                        <div className="container-5">
                            <div className="user-name-1">
                                User_Name
                            </div>
                            <span className="user-mailemail-com">
                UserMail@email.com
              </span>
                        </div>
                    </div>
                    <div className="delete-bt-1">
            <span className="delete-1">
              삭제
            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminPageAppAccountManage;
