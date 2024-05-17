import '../css/Main.css'
import MoreMenuBT from '../assets/MoreMenu_BT.png'
import Vector from '../assets/Vector.png'
import EPMENU from '../assets/ep_menu.png'
import QR from '../assets/bi_qr-code-scan.png'
import {useNavigate} from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    const ownerid = localStorage.getItem('ownerid');

    const goToQr = () => {
        navigate('/Main/qrCRUD');
    };
    const MenuEdit = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main/Menu/Edit');
    };
    // useEffect(() => {
    //     fetch(`http://localhost:5000/storeinfo/${ownerid}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); // 여기서 받은 데이터를 활용
    //         })
    //         .catch(error => console.error("Error fetching data: ", error));
    // }, [ownerid]); // ownerid가 변경될 때마다 다시 호출
    return (
        <div className="container-2-ad">
            <div className="container-ad">
                <div className="app-nupan-ad">
                    APP-nupan
                </div>
                <div className="more-menu-bt-ad">
                    <img className="vector-ad" src={MoreMenuBT} alt={""} />

                </div>
            </div>
            <div className="line-5-ad">
            </div>

            <div className="user-name-ad">
                {ownerid}님 환영합니다.
            </div>
            <div className="container-2111-ad">
        <span className="storeName">
          가게이름-1
        </span>
                <span className="container-122-ad">
          00지점
        </span>
            </div>
            <div className="container-1-ad">
                <button className="container-6-ad"
                onClick={MenuEdit}>
                    <div className="epmenu-ad">
                        <img className="vector-5-ad" src={EPMENU} alt="" />
                    </div>
                    <span className="container-3-ad">
                        메뉴편집
                    </span>
                </button>
                <div className="container-4-ad">
                    <div className="solarclipboard-list-outline-ad">
                        <img className="vector-5-ad" src={Vector}alt=""/>
                    </div>
                    <span className="container-5-ad">
                        주문확인
                    </span>
                </div>
                <button className="qr-ad"
                onClick={goToQr}>
                    <div className="biqr-code-scan-ad">
                        <img className="vector-5-ad" src={QR} alt=""/>
                    </div>
                    <span className="qr-1-ad">
            QR, 출력
          </span>
                </button>
            </div>
        </div>
    )
}
