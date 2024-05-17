import '../../css/user/MenuEdit.css'
import {useNavigate} from 'react-router-dom';

export default function MenuEditPage() {
    const navigate = useNavigate();
    const ownerid = localStorage.getItem('ownerid');
    const goToMenuAdd = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/Menu/Add');
    };
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
                <button
                    className="tab-add-bt"
                    type={"button"}>
                    <span className="tab-add">
                        + 탭 추가
                    </span>
                </button>
            </div>
            <div className="container-7">
                <div className="menu-edit">
                    메뉴 관리
                </div>
                <button className="menu-add-bt"
                        onClick={goToMenuAdd}>
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
                                <button
                                    className="edit-bt-1"
                                    type={"button"}>
                                    <span className="edit-1">
                                        수정
                                    </span>
                                </button>
                                <button
                                    className="del-bt"
                                    type={"button"}>
                                    <span className="del-1">
                                        삭제
                                    </span>
                                </button>
                            </div>
                            <span className="menu-1-price">
                                8,000₩
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
