import '../../css/user/MyPage.css'
// import {useState} from "react";
import {useNavigate} from 'react-router-dom';
// import axios from "axios"


export default function MyPage() {
    const navigate = useNavigate();
    const ownerid = localStorage.getItem('ownerid');


    const goBack = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate(-1);
    };
    return (
        <div className="myPage">
            <div className="app-nupan">
                APP-nupan
            </div>
            <div className="line-5">
            </div>
            <div className="my-info">
                내 정보
            </div>
            <div className="myItemContainer">
                <div className="image">
                    <div className="image-sample">
                    </div>
                    <div className="image-add-bt">
                        <span className="image-change-bt">
                            사진변경
                        </span>
                    </div>
                </div>
                <div className="myInfoContainer">
                    <div className="textContainer">
                        <div className="store-name-text">
                            가게 이름
                        </div>
                        <div className="store-office-text">
                            지점
                        </div>
                        <div className="store-address-text">
                            가게 주소
                        </div>
                        <div className="user-name-text">
                            사용자 명
                        </div>
                        <div className="phone-num-text">
                            전화번호
                        </div>
                    </div>
                    <div className="inputContainer">
                        <div className="store-name-space">
                        </div>
                        <div className="store-office-space">
                        </div>
                        <div className="store-address-space">
                        </div>
                        <div className="user-name-space">
                        </div>
                        <div className="phone-num-space">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-1">
                <div className="menu-add-bt">
          <span className="menu-add">
            변경저장
          </span>
                </div>
                <div className="add-cancel-bt" onClick={goBack} style={{cursor: 'pointer'}}>
          <span className="cancel">
            변경취소
          </span>
                </div>
            </div>
        </div>
    )
}
