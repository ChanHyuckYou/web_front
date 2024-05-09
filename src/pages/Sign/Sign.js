import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressSearch = () => {
    const [address, setAddress] = useState('');
    const [zoneCode, setZoneCode] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [extraAddress, setExtraAddress] = useState('');
    const [open, setOpen] = useState(false);


    const handleComplete = (data) => {
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
        setZoneCode(data.zonecode);
    };

    return (
        <div>
            <label>우편번호</label>
            <input type="text" value={zoneCode} readOnly />
            <button onClick={() => setOpen(true)}>주소검색</button>

            <label>도로명주소</label>
            <input type="text" value={address} readOnly />

            <label>상세주소</label>
            <input type="text" value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} />
            <input type="text" value={extraAddress} readOnly />

            <DaumPostcode onComplete={handleComplete} autoClose />
        </div>
    );
};

export default AddressSearch;
