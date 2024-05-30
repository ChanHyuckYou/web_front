import '../../css/user/MenuAdd.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Icon from '../../assets/IconSample.png';



export default function MenuAdd() {
    const navigate = useNavigate();
    const [productname, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [available, setAvailable] = useState(true);
    const [preview, setPreview] = useState('');
    const storename = '스타벅스';
    const fileInputRef = useRef();
    const ownerid = localStorage.getItem('ownerid');
    const productid = localStorage.getItem('productid');
    const location = useLocation();
    const menus = location.state?.selectedMenu;

    useEffect(() => {
        if (productid && menus) {
            const fetchMenuData = async () => {
                const data = menus;
                setProductName(data.productname || '');
                setPrice(data.price || '');
                setCategory(data.category || '');
                setDescription(data.description || '');
                setAvailable(data.available);
                setPreview(data.imageurl || '');
            }
            fetchMenuData();
        }
    }, [productid, menus]);

    const goToMenuEdit = () => {
        navigate('/Main/Menu/Edit');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview('');
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedPrice = parseInt(price, 10).toLocaleString();

        const formData = new FormData();
        formData.append('productname', productname);
        formData.append('price', formattedPrice);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('available', available);
        if (fileInputRef.current.files[0]) {
            formData.append('menuimage', fileInputRef.current.files[0]);
        }
        formData.append('storename', storename);

        try {
            let response;
            if (productid) {
                response = await fetch(`http://43.201.92.62/store/${productid}/menu`, {
                    method: 'PUT',
                    body: formData
                });
            } else {
                response = await fetch(`http://43.201.92.62/store/${ownerid}/menu`, {
                    method: 'POST',
                    body: formData
                });
            }

            if (response.ok) {
                goToMenuEdit();
                console.log(`메뉴아이템 등록 성공 : ${formData}`);
            } else {
                console.error('Failed to add menu item:', response.statusText);
                alert("Failed to add menu");
            }
        } catch (error) {
            console.error('Error adding menu item:', error);
            alert("Failed to add menu");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="menuAdd">
                <div className="logoContainer">
                    <img className="appNupanIcon" src={Icon} alt="" />
                    <div className="app-nupan">APP-nupan</div>
                </div>
                <div className="line-5"></div>
                <div className="menu-add-1">메뉴추가</div>
                <div className="menuItemContainer">
                    <div className="image">
                        {preview && (
                            <img src={preview} alt="메뉴 미리보기" className="image-sample" />
                        )}
                        <div className="image-add-bt" onClick={handleButtonClick} type="button" style={{ cursor: 'pointer' }}>
                            <span className="image-add">사진추가</span>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className="menuInfoContainer">
                        <div className="textContainer">
                            <div className="menu-name">메뉴이름</div>
                            <div className="menu-info">메뉴설명</div>
                            <div className="tag">태그</div>
                            <div className="price">가격</div>
                        </div>
                        <div className="inputContainer">
                            <input
                                type="text"
                                value={productname}
                                onChange={(e) => setProductName(e.target.value)}
                                className="inputMenuName"
                                placeholder="메뉴이름을 입력해주세요"
                                autoComplete="off" />
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="inputMenuInfo"
                                placeholder="메뉴설명을 입력해주세요"
                                autoComplete="off" />
                            <input
                                list="categories"
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="inputMenuTag"
                                placeholder="태그 이름"
                                autoComplete="off" />
                            <datalist id="categories">
                                <option value="태그1"></option>
                                <option value="태그2"></option>
                                <option value="태그3"></option>
                            </datalist>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="inputMenuPrice"
                                placeholder="가격을 입력해주세요"
                                autoComplete="off" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button className="menu-add-bt"
                            type="submit"
                            style={{ cursor: 'pointer' }}>
                        <span className="menu-add-2">메뉴추가</span>
                    </button>
                    <button className="add-cancel-bt"
                            type="button"
                            onClick={goToMenuEdit}
                            style={{ cursor: 'pointer' }}>
                        <span className="cancel">작성취소</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
