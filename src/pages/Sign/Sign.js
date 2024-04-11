import React, {useState} from 'react';
import '../../css/Sign/SignStyle.css';
import {useNavigate} from 'react-router-dom';

export function Sign() {
    const navigate = useNavigate();
    const [ownerid, setOwnerid] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ownername, setOwnername] = useState('');
    const [ownercontact, setOwnercontact] = useState('');

    const gotoMain = () => {
        navigate('/Sign_3')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('http://43.201.92.62/store/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ownerid,
                    password,
                    ownername,
                    ownercontact
                }),
            });

            if(response.ok) {
                console.log('회원가입 성공');
                gotoMain();
            } else {
                const errorData = await response.json();
                console.error('회원가입 실패:', errorData.message);
                alert(`회원가입 실패: ${errorData.message}`);
            }
        } catch (error) {
            console.error('서버 통신 오류', error);
            alert('서버 통신 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="id3-11">
                {/* Form content updated to include ownerid, ownername, and ownercontact */}
                <div className="container3-11">
                    <div className="id3-1">ID</div>
                    <input
                        type="text"
                        value={ownerid}
                        onChange={(e) => setOwnerid(e.target.value)}
                        className="id3"
                        placeholder="아이디를 입력해주세요"
                        autoComplete="username"/>
                </div>
                <div className="container3-11">
                    <div className="id3-1">이름</div>
                    <input
                        type="text"
                        value={ownername}
                        onChange={(e) => setOwnername(e.target.value)}
                        className="id3"
                        placeholder="이름을 입력해주세요"
                        autoComplete="name"/>
                </div>
                <div className="container3-11">
                    <div className="id3-1">연락처</div>
                    <input
                        type="text"
                        value={ownercontact}
                        onChange={(e) => setOwnercontact(e.target.value)}
                        className="id3"
                        placeholder="연락처를 입력해주세요"
                        autoComplete="tel"/>
                </div>
                <div className="container3">
                    <div className="id3-5">비밀번호</div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력해주세요"
                        autoComplete="new-password"
                        className="id3-3"/>
                </div>
                <div className="container3-10">
                    <div className="id3-6">비밀번호 확인</div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="비밀번호를 확인해주세요"
                        autoComplete="new-password"
                        className="id3-4"/>
                </div>
                <button
                    type="submit"
                    className="id3-8"
                >다음으로</button>
            </div>
        </form>
    );
}
export default Sign;
