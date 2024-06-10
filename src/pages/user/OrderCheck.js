import '../../css/user/Ordercheck.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Icon from '../../assets/IconSample.png';
import {useNavigate} from 'react-router-dom';

export default function OrderCheckPage() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const ownerid = localStorage.getItem('ownerid');
    const [isOrderDetail, setIsOrderDetail] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        if (!ownerid) {
            alert("잘못된 접근입니다. 다시 로그인 해주세요.");
            navigate('/');
        }
        // 데이터 불러오기
        const fetchOrders = async () => {
            try {
                const response = await axios.post('http://43.201.92.62/order/serve_list', {
                    ownerid: ownerid  // 가맹점의 ID를 여기에 넣습니다.
                });

                // 주문 내역을 최신순으로 정렬
                const sortedOrders = response.data.sort((a, b) => new Date(b.ordertime) - new Date(a.ordertime));
                setOrders(sortedOrders);
            } catch (error) {
                console.error("주문 현황을 불러오는 중 오류가 발생했습니다!", error);
                window.alert("오류", "주문 현황을 불러오는 중 오류가 발생했습니다.");
            }
        };
        fetchOrders();
    }, [ownerid, navigate]);

    const goBack = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main');
    }

    const openOrderDetail = (order) => {
        setSelectedOrder(order);
        setIsOrderDetail(true);
    };

    const closeOrderDetail = () => {
        setIsOrderDetail(false);
        setSelectedOrder(null);
    };

    const formatPrice = (price) => {
        return Number(price).toLocaleString('ko-KR') + '₩';
    };

    const formatTime = (timeString) => {
        if (timeString && typeof timeString === 'string') {
            const parts = timeString.split('T');
            if (parts.length > 1) {
                const timeParts = parts[1].split('.');
                if (timeParts.length > 0) {
                    return timeParts[0]; // 시간만 추출
                }
            }
        }
        return '';
    };

    const handleServeDone = async (orderid) => {
        try {
            const response = await axios.post('http://43.201.92.62/order/serve_done', {orderid: orderid});
            if (response.data.message) {
                setOrders(orders.filter(order => order.orderid !== orderid));
                closeOrderDetail();
            } else {
                window.alert("오류", "서빙 완료 처리 중 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error("서빙 완료 처리 중 오류가 발생했습니다!", error);
            window.alert("오류", "서빙 완료 처리 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="order-check-container">
            <div className="menu-edit-header">
                <div className="logo1234">
                    <img className="appNupanIcon" src={Icon} alt="App Nupan Logo"/>
                    <h1 className="app-title">APP-nupan</h1>
                </div>
                <button className="back-button" onClick={goBack} style={{cursor: 'pointer'}}>뒤로가기</button>
            </div>
            <div className="order-divider"></div>
            <div className="order-header">
                <h2>주문확인</h2>
                <h2>현재 주문 건수 : {orders.length}건</h2>
            </div>
            <div className="order-list-table">
                <div className="table-list">
                    <span className="order-column">주문시간</span>
                    <span className="order-column">테이블 번호</span>
                    <span className="order-column">주문 메뉴</span>
                    <span className="order-column">수량</span>
                    <span className="order-column">결제여부</span>
                    <span className="order-column">금액</span>
                </div>
                <div className="order-list">
                    {orders.map((order, index) => (
                        <div className="order-item" key={order.orderid}>
                            <div className="order-info" onClick={() => openOrderDetail(order)}>
                                <div className="order-detail">{formatTime(order.ordertime)}</div>
                                <div className="order-detail">{order.tablenumber}</div>
                                <div className="order-detail">
                                    {order.order_details.map((detail, idx) => (
                                        <div key={idx}>{detail.menu_name}</div>
                                    ))}
                                </div>
                                <div className="order-detail">
                                    {order.order_details.map((detail, idx) => (
                                        <div key={idx}>{detail.quantity}</div>
                                    ))}
                                </div>
                                <div className="order-detail">{order.pg}</div>
                                <div className="order-detail">
                                    {order.order_details.map((detail, idx) => (
                                        <div
                                            key={idx}>{formatPrice(parseFloat(detail.menu_price) * parseInt(detail.quantity))}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isOrderDetail && selectedOrder && (
                <div className="order-detail-frame">
                    <div className="frame-header">
                        <span className="order-detail-title">주문상세</span>
                    </div>
                    <div className="detail-info">
                        <div className="order-table-time">
                            <span className="detail-menu-quantity">테이블 번호 : {selectedOrder.tablenumber}</span>
                            <span>주문시간 : {formatTime(selectedOrder.ordertime)}</span>
                        </div>
                    </div>
                    <div className="detail-list">
                        <span>메뉴이름</span>
                        <span className="detail-menu-quantity">수량</span>
                        <span>금액</span>
                    </div>
                    <div className="detail-info-container">
                        {selectedOrder.order_details.map((detail, idx) => (
                            <div className="detail-item" key={idx}>
                                <span className="detail-menu-name">{detail.menu_name}</span>
                                <span className={"detail-menu-quantity", "detail-menu-quantity-margin"}>{detail.quantity}</span>
                                <span className="detail-menu-price">{formatPrice(parseFloat(detail.menu_price) * parseInt(detail.quantity))}</span>
                            </div>
                        ))}
                    </div>
                    <div className="price-sum">
                        <span>금액합계</span>
                        <span>{formatPrice(selectedOrder.order_details.reduce((total, item) => total + (parseFloat(item.menu_price) * parseInt(item.quantity)), 0))}</span>
                    </div>
                    <div className="btn-container-detail">
                        <button className="close-btn" onClick={closeOrderDetail}>닫기</button>
                        <button className="serve-done-btn" onClick={() => handleServeDone(selectedOrder.orderid)}>서빙완료</button>
                    </div>
                </div>


            )}
        </div>
    );
}
