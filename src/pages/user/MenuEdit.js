import '../../css/user/MenuEdit.css'
import {useNavigate} from 'react-router-dom';
export default function MenuEditPage() {
    const navigate = useNavigate();
    return (
        <div className="MenuEdit">
            <div className="app-nupan">
                APP-nupan
            </div>
            <div className="line-5">
            </div>
            <div className="menu-tab-edit">
                메뉴 탭 관리
            </div>
            <div className="container-14">
                <div className="recommended-menu">
                    <span className="recommended">
                        추천 메뉴
                     </span>
                </div>
                <div className="main-menu">
                    <span className="main">
                        주 메뉴
                    </span>
                </div>
                <div className="side-tab">
                    <span className="side">
                        사이드
                    </span>
                </div>
                <div className="tab-add-bt">
                    <span className="tab-add">
                        + 탭 추가
                    </span>
                </div>
            </div>
            <div className="container-7">
                <div className="menu-edit">
                    메뉴 관리
                </div>
                <button className="menu-add-bt" onClick={navigate('/Main/Menu/Add')}>
                    <span className="menu-add">
                        메뉴 추가
                    </span>
                </button>
            </div>
            <div className="menu-list">
                <div className="menu-1">
                    <div className="container-6">
                        <div className="menu-1-image">
                        </div>
                        <div className="container-4">
                            <div className="menu-1-name">
                                메뉴 1 이름
                            </div>
                            <span className="menu-1-info">
                                메뉴 1 설명
                            </span>
                        </div>
                    </div>
                    <div className="container-18">
                        <div className="menu-1-tag">
                            #추천메뉴, 주메뉴
                        </div>
                        <div className="container-3">
                            <div className="container-10">
                                <div className="edit-bt-1">
                                <span className="edit-1">
                                    수정
                                </span>
                                </div>
                                <div className="del-bt">
                                    <span className="del-1">
                                        삭제
                                    </span>
                                </div>
                            </div>
                            <span className="menu-1-price">
                                8,000₩
                            </span>
                        </div>
                    </div>
                </div>
                <div className="menu-2">
                    <div className="container-11">
                        <div className="menu-2-image">
                        </div>
                        <div className="container">
                            <div className="menu-2-name">
                                메뉴 2 이름
                            </div>
                            <span className="menu-2-info">
                메뉴 2 설명
              </span>
                        </div>
                    </div>
                    <div className="container-2">
                        <div className="menu-2-tag">
                            #추천메뉴, 주메뉴
                        </div>
                        <div className="container-5">
                            <div className="container-8">
                                <div className="edit-bt-2">
                  <span className="edit-21">
                    수정
                  </span>
                                </div>
                                <div className="del-bt-2">
                  <span className="edit-2">
                    삭제
                  </span>
                                </div>
                            </div>
                            <span className="menu-2-price">
                7,000₩
              </span>
                        </div>
                    </div>
                </div>
                <div className="menu-3">
                    <div className="container-12">
                        <div className="menu-3-image">
                        </div>
                        <div className="container-13">
                            <div className="menu-3-name">
                                메뉴 3 이름
                            </div>
                            <span className="menu-3-info">
                메뉴 3 설명
              </span>
                        </div>
                    </div>
                    <div className="container-16">
                        <div className="menu-3-tag">
                            #추천메뉴, 주메뉴
                        </div>
                        <div className="container-15">
                            <div className="container-9">
                                <div className="edit-bt-3">
                  <span className="edit-3">
                    수정
                  </span>
                                </div>
                                <div className="del-bt-3">
                  <span className="del-3">
                    삭제
                  </span>
                                </div>
                            </div>
                            <span className="menu-3-price">
                6,500₩
              </span>
                        </div>
                    </div>
                </div>
                <div className="menu-4">
                    <div className="container-20">
                        <div className="menu-4-image">
                        </div>
                        <div className="container-19">
                            <div className="menu-4-name">
                                메뉴 4 이름
                            </div>
                            <span className="menu-4-info">
                메뉴 4 설명
              </span>
                        </div>
                    </div>
                    <div className="menu4SecondContainer">
                        <div className="menu-4-tag">
                            #사이드
                        </div>
                        <div className="container-17">
                            <div className="container-1">
                                <div className="edit-bt-4">
                                <span className="edit-4">
                                    수정
                                </span>
                                </div>
                                <div className="del-bt-4">
                                    <span className="del-4">
                                        삭제
                                    </span>
                                </div>
                            </div>
                            <span className="menu-4-price">
                                4,000₩
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
