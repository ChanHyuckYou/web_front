import '../../css/Sign/SignIn2.css';
import { useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';

export default function SignInPage2() {
    const navigate = useNavigate();
    const [storename, setStoreName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [storeUID, setStoreUID] = useState('');
    const ownerid = localStorage.getItem('ownerid');
    const [registrationStatus, setRegistrationStatus] = useState(''); // 사업자 등록 상태 메시지 state
    // const API_URL = "PXG4lbu1zrrFC627PIole4Nm0A1pWRNSNrPPZN9EF64HZEvNt1NSrVm98ZZsqkDYtdQ9s98zQCcW84N984DDiw%3D%3D";
    const [isPostOpen, setIsPostOpen] = useState(false);


    const fetchBusinessStatus = async () => {
        const data = {
            businesses: [
                {
                    b_no: "1303587275", // 사용자로부터 입력받은 사업자번호
                    start_dt: '19960425', // 예시 개업일자, 실제 사용 시 변경 필요
                    p_nm: '김태성', // 예시 대표자명, 실제 사용 시 변경 필요
                },
            ],
        };

        try {
            const response = await axios.post(
                'https://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=PXG4lbu1zrrFC627PIole4Nm0A1pWRNSNrPPZN9EF64HZEvNt1NSrVm98ZZsqkDYtdQ9s98zQCcW84N984DDiw%3D%3D', // 여기에서비스키 부분을 실제 서비스키로 교체해야 합니다.
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const { status_code, data: responseData } = response.data;

            if (status_code === 'OK') {
                responseData.forEach((result) => {
                    if (result.valid === '01') {
                        console.log('진위확인 성공:', result);
                        setRegistrationStatus("사업자 등록번호가 확인되었습니다.");
                    } else if (result.valid === '02') {
                        console.log('진위확인 실패:', result.valid_msg);
                        setRegistrationStatus("사업자 등록번호가 일치하지 않습니다.");
                    }
                });
            } else {
                console.error('API 호출 실패:', status_code);
                setRegistrationStatus("API 호출 실패:");
            }
        } catch (error) {
            console.error('API 호출 중 에러 발생:', error);
            setRegistrationStatus("API 호출 중 에러 발생");
        }
    };

    const gotoMain = () => {
        // 사업자 등록 상태를 확인하여 조건부로 navigate 함수 실행
        if (registrationStatus === "사업자 등록번호가 확인되었습니다.") {
            // 사업자 등록번호 확인 성공 시
            localStorage.setItem('ownerid', ownerid);
            localStorage.setItem('storeUID', storeUID);
            navigate('/Sign_3');
        } else {
            // 사업자 등록번호 확인 실패 시
            console.log('가맹점 등록 상태가 확인되지 않았습니다.');
            alert('가맹점 등록 상태가 확인되지 않았습니다.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://43.201.92.62/store/regist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ storename, address, contact, ownerid }),
            });
            if (response.ok) {
                console.log('가맹점 등록 성공');
                gotoMain();
            }
            else {
                const errorData = await response.json();
                throw new Error(`가맹점 등록 실패: ${errorData.message}`);
            }
        } catch (error) {
            console.error('서버 통신 오류 또는 처리 중 오류 발생', error);
            alert(`서버 통신 중 오류가 발생했습니다. 나중에 다시 시도해주세요. 오류 메시지: ${error.message}`);
        }
    };
    const openPostCode = () => {
        setIsPostOpen(true);
    };

    const handlePostCodeComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setAddress(fullAddress);
        setIsPostOpen(false);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="signInPage2">
            <div className="app-nupan">
                APP-nupan
            </div>
            <div className="line-5">
            </div>
            <div className="sign-in">
                회원가입
            </div>
            <div className="itemContainer">
                <div className="textContainer">
                    <div className="store-name">
                        가게이름
                    </div>
                    <div className="phone-num">
                        가게번호
                    </div>
                    <div className="store-address">
                        가게주소
                    </div>
                    <div className="store-office">
                        사업자 등록번호
                    </div>

                </div>
                <div className="inputContainer">
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)} // 추가
                        className="inputStoreName"
                        placeholder="가게이름을 입력해주세요"
                        autoComplete="contact"/>
                    <input
                        type="text"
                        value={storename}
                        onChange={(e) => setStoreName(e.target.value)} // 추가
                        className="inputStoreNum"
                        placeholder="가게 전화번호를 입력해주세요"
                        autoComplete="storename"/>
                    <input
                        type="text"
                        value={address}
                        onClick={openPostCode}
                        readOnly
                        className="inputStoreAddress"
                        placeholder="가게주소를 입력해주세요"
                        autoComplete="address"
                    />
                    {isPostOpen && (
                        <div style={{
                            display: 'block',
                            position: 'absolute',
                            top: '100px',
                            zIndex: '100',
                            border: '1px solid',
                            backgroundColor: '#ffffff'
                        }}>
                            <DaumPostcode
                                onComplete={handlePostCodeComplete}
                                width={600}
                                height={450}
                                style={{display: 'block'}}
                            />
                            <button type="button" onClick={() => setIsPostOpen(false)}
                                    style={{margin: '0 0 10px 10px'}}>닫기
                            </button>
                        </div>
                    )}
                    <input
                        type="text"
                        value={storeUID}
                        onChange={(e) => setStoreUID(e.target.value)} // 추가
                        className="inputStoreId"
                        placeholder="사업자등록번호를 입력해주세요"
                        autoComplete="storeUID"/>

                </div>
                <div className="btnContainer">
                    <button className= "idCheckBtn"
                            type="button" onClick={fetchBusinessStatus}>
                        조회
                    </button>
                </div>
            </div>
            <div style={{height: '10px',
            marginLeft: '225px'}}>
                {registrationStatus && (
                    <div className="registration-status">
                    {registrationStatus}
                    </div>
                )}
            </div>
            <button className="sign-in-bt" type={"submit"}>
                <span className="sing-in-request">
                    회원가입 신청
                </span>
            </button>
        </div>
        </form>
    )
}
