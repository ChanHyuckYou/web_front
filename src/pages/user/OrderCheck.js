import '../../css/user/Ordercheck.css';
import React, { useState, useEffect } from 'react';
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
        // 데이터 불러오기
        const fetchOrders = async () => {
            try {
                const response = await axios.post('http://43.201.92.62/order/serve_list', {
                    ownerid: ownerid  // 가맹점의 ID를 여기에 넣습니다.
                });
                setOrders(response.data);
            } catch (error) {
                console.error("주문 현황을 불러오는 중 오류가 발생했습니다!", error);
                window.alert("오류", "주문 현황을 불러오는 중 오류가 발생했습니다.");
            }
        };
        fetchOrders();
    }, [ownerid]);

    const goBack = () => {
        localStorage.setItem('ownerid', ownerid);
        navigate('/Main')
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

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const handleServeDone = async (orderid) => {
        try {
            const response = await axios.post('http://43.201.92.62/order/serve_done', { orderid: orderid });
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
        <div className="orderCheck">
            <div className="headerContainer">
                <div className="logoContainer">
                    <img className="appNupanIcon" src={Icon} alt="">
                    </img>
                    <div className="app-nupan">
                        APP-nupan
                    </div>
                </div>
                <div className="goBackBtn" onClick={goBack} style={{cursor: 'pointer'}}>
                    <div className="goBackTxt">
                        뒤로가기
                    </div>
                </div>
            </div>
            <div className="line-5">
            </div>
            <div className="order-check">
                주문확인
            </div>

                <span className="order-check">
                    현재 주문 건수 : {orders.length}건
                </span>
            <div className="order-list-table">
                <div className="table-list">
                    <span className="order-number">
                        주문시간
                    </span>
                    <span className="order-table">
                        테이블 번호
                    </span>
                    <span className="order-menu">
                        주문 메뉴
                    </span>
                    <span className="order-amount">
                        수량
                    </span>
                    <span className="order-payment">
                        결제여부
                    </span>
                    <span className="order-price">
                        금액
                    </span>
                </div>
                <div className="order-list">
                    {orders.map((order, index) => (
                        <div className={`order-no-4`} key={order.orderid}>
                            <div className="order4InfoContainer"
                                 onClick={() => openOrderDetail(order)}>
                                <div className="orderNoContainer">
                                    <div className={`order-4`}>
                                        {formatTime(order.ordertime)}
                                    </div>
                                </div>
                                <div className="orderTableContainer">
                                    <div className={`order-4-table`}>
                                        {order.tablenumber}
                                    </div>
                                </div>
                                <div className="orderMenuContainer">
                                    {order.order_details.map((detail, idx) => (
                                        <div className={`order-4-menu-1`} key={idx}>
                                            {detail.menu_name}
                                        </div>
                                    ))}
                                </div>
                                <div className="orderAmountContainer">
                                    {order.order_details.map((detail, idx) => (
                                        <div className="orderAmount" key={idx}>
                                            {detail.quantity}
                                        </div>
                                    ))}
                                </div>
                                <div className="orderPaymentContainer">
                                    <div className="orderPayment">
                                        결제완료
                                    </div>
                                </div>
                                <div className="orderPriceContainer">
                                    {order.order_details.map((detail, idx) => (
                                        <div className="orderPrice" key={idx}>
                                            {formatPrice(parseFloat(detail.menu_price) * parseInt(detail.quantity))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isOrderDetail && selectedOrder && (
                <div className="orderDetailFrame">
                    <div className="frameHeader">
                        <span className="order-detail">
                            주문상세
                        </span>
                        <div className="orderDetailTxt">
                            <span className="container-10">
                                테이블 번호
                            </span>
                            <span className="container-11">
                                주문시간
                            </span>
                        </div>
                        <div className="orderDetailInfo">
                            <span className="container-13">
                                {selectedOrder.tablenumber}
                            </span>
                            <span className="container-12">
                                {formatTime(selectedOrder.ordertime)}
                            </span>
                        </div>
                    </div>
                    <div className="detailList">
                        <span className="listMenuName">
                            메뉴이름
                        </span>
                        <span className="listMenuNum">
                            수량
                        </span>
                        <span className="listMenuPrice">
                            금액
                        </span>
                    </div>
                    <div className="detailInfoContainer">
                        {selectedOrder.order_details.map((detail, idx) => (
                            <div className="ordersDetailContainer" key={idx}>
                                <span className="detailMenuName">
                                    {detail.menu_name}
                                </span>
                                <span className="detailMenuNum">
                                    {detail.quantity}
                                </span>
                                <span className="detailMenuPrice">
                                    {formatPrice(parseFloat(detail.menu_price) * parseInt(detail.quantity))}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="price-sum">
                        <span className="container-4">
                            금액합계
                        </span>
                        <span className="container-5">
                            {formatPrice(selectedOrder.order_details.reduce((total, item) => total + (parseFloat(item.menu_price) * parseInt(item.quantity)), 0))}
                        </span>
                    </div>
                    <div className="btnContainer-detail">
                        <div className="close-bt"
                             onClick={closeOrderDetail}>
                            <span className="container-7">
                                닫기
                            </span>
                        </div>
                        <div className="serve-done-bt" onClick={() => handleServeDone(selectedOrder.orderid)}>
                            <span className="container-6">
                                서빙완료
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
