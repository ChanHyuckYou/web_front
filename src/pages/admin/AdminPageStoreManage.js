import '../../css/admin/AdminPageStoreManage.css'

export default function AdminPageStoreManage() {
    return (
        <div className="adminPageStoreManage">
            <div className="container-6">
        <span className="app-nupan">
          APP-nupan
        </span>
                <span className="admin">
          Admin
        </span>
            </div>
            <div className="line-5">
            </div>
            <div className="container-7">
                <div className="menu-list">
                    <div className="sign-in-confirm-bt">
                        회원가입 승인
                    </div>
                    <span className="store-user-bt">
            사업자 회원 조회
          </span>
                    <div className="line-8">
                    </div>
                    <span className="app-user-bt">
            앱 회원 조회
          </span>
                </div>
                <div className="container-5">
                    <div className="container-8">
                        <div className="container-3">
                            <div className="store-name">
                                가게이름:
                            </div>
                            <div className="store-name-space">
                            </div>
                        </div>
                        <div className="container-2">
                            <div className="user-name">
                                사용자명:
                            </div>
                            <div className="account-name-space">
                            </div>
                        </div>
                    </div>
                    <div className="container-1">
                        <div className="phone-number">
                            전화번호:
                        </div>
                        <div className="phone-number-space">
                        </div>
                    </div>
                    <div className="account-info">
                        <div className="store-1">
                            <div className="container">
                <span className="store-1-name">
                  가게이름-1
                </span>
                                <span className="store-1-user-name">
                  (회원_이름)
                </span>
                            </div>
                            <div className="container-4">
                <span className="store-1-ofice">
                  00지점
                </span>
                                <span className="store-1-adress">
                  00시 00동 ...
                </span>
                                <span className="store-1-phon-num">
                  010-0000-0000
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
        </div>
    )
}