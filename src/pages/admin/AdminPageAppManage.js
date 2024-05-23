import '../../css/admin/AdminPageAppManage.css'
import React, { useState, useEffect } from 'react';

export default function AdminPageAppAccountManage() {
    const [users, setUsers] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState({ userid: '', username: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://43.201.92.62/admin/view/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const searchUser = async () => {
        try {
            const response = await fetch('http://43.201.92.62/admin/view/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(searchCriteria),
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error searching user:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };

    return (
        <div className="AdminPageAppManage">
            <div className="container-3">
                <div className="container">
                    <div className="user-name">
                        사용자명:
                    </div>
                    <input
                        className="user-name-space"
                        type="text"
                        name="username"
                        value={searchCriteria.username}
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="container-4">
                    <div className="phone-number">
                        전화번호:
                    </div>
                    <input
                        className="phone-number-space"
                        type="text"
                        name="userid"
                        value={searchCriteria.userid}
                        onChange={handleInputChange}>
                    </input>
                </div>
                <button onClick={searchUser}>검색</button>
            </div>
            <div className="container-2">
                    <div className="account-info" >
                        {users.map((user) => (
                            <div>
                        <div className="account-1">
                            <div className="ellipse-1"></div>
                            <div className="container-5">
                                <div className="user-name-1">{user.username}</div>
                                <span className="user-mailemail-com">{user.usercontact}</span>
                            </div>
                        </div>
                        <div className="delete-bt-1">
                            <span className="delete-1">삭제</span>
                        </div>
                            </div>
                            ))}
                    </div>
            </div>
        </div>
    );
}
