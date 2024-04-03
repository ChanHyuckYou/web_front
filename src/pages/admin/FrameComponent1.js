import "../../css/admin/FrameComponent1.css";

const FrameComponent1 = ({ input15 }) => {
    return (
        <div className="storeinfo1-parent">
            <div className="storeinfo11">
                <div className="input-15-parent">
                    <i className="input-15">{input15}</i>
                    <div className="input-13-parent">
                        <div className="input-13">00지점</div>
                        <div className="input-11">00시 00동 ...</div>
                    </div>
                </div>
                <div className="frame-parent6">
                    <div className="input-14-wrapper">
                        <i className="input-14">(신청인 이름)</i>
                    </div>
                    <div className="input-12">010-0000-0000</div>
                </div>
            </div>
            <div className="confirm-bt-3-parent">
                <button className="confirm-bt-3">
                    <div className="btnsub-3">승인</div>
                </button>
                <button className="deny-bt-3">
                    <div className="btncan-3">거절</div>
                </button>
            </div>
        </div>
    );
};

export default FrameComponent1;
