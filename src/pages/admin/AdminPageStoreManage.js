import '../../css/admin/AdminPageStoreManage.css'


export default function AdminPageStoreManage() {
    return (
        <div className="adminPageStoreManage">
            <div className="itemContainer">
                <div className="manageContainer">
                    <div className="searchContainer">
                        <div className="nameSearchContainer">
                            <div className="store-name">
                                가게이름:
                            </div>
                            <div className="store-name-space">
                            </div>
                        </div>
                        <div className="userSearchContainer">
                            <div className="user-name">
                                사용자명:
                            </div>
                            <div className="account-name-space">
                            </div>
                        </div>
                        <div className="phoneSearchContainer">
                            <div className="phone-number">
                                전화번호:
                            </div>
                            <div className="phone-number-space">
                            </div>
                        </div>
                    </div>

                    <div className="account-info">
                        <div className="accountInfoContainer">
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
        </div>
    )
}
