import '../../css/user/Ordercheck.css'

export default function OrderCheckPage() {
    return (
        <div className="orderCheck">
            <div className="app-nupan">
                APP-nupan
            </div>
            <div className="line-5">
            </div>
            <span className="order-check">
        주문확인
      </span>
            <div className="order-list-table">
                <div className="table-list">
          <span className="order-number">
            주문번호
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
                    <span className="serving-check">
            서빙완료
          </span>
                </div>
                <div className="order-list">
                    <div className="order-no-4">
                        <div className="container-11">
                            <div className="order-4">
                                004
                            </div>
                            <div className="container-1">
                                <div className="line-6">
                                </div>
                                <div className="order-4-table">
                                    3
                                </div>
                            </div>
                            <div className="container-9">
                                <div className="line-7">
                                </div>
                                <div className="order-4-menu-1">
                                    메뉴 1 이름
                                </div>
                            </div>
                            <div className="order-4-menu-1-amount">
                                1
                            </div>
                            <div className="container-6">
                                <div className="container-14">
                  <span className="order-4-payment">
                    추후결제
                  </span>
                                    <span className="order-4-pay-check">
                    (미결제)
                  </span>
                                </div>
                                <span className="order-4-menu-1-price">
                  8000₩
                </span>
                            </div>
                        </div>
                        <div className="order-4-check">
                            <div className="rectangle-46">
                            </div>
                        </div>
                    </div>
                    <div className="order-no-3">
                        <div className="container-7">
                            <div className="order-3">
                                003
                            </div>
                            <div className="container-17">
                                <div className="line-61">
                                </div>
                                <div className="order-3-table">
                                    1
                                </div>
                            </div>
                            <div className="container-10">
                                <div className="line-71">
                                </div>
                                <div className="order-3-menu-1">
                                    메뉴 1 이름
                                </div>
                            </div>
                            <div className="order-3-menu-1-amount">
                                1
                            </div>
                            <div className="order-3-payment">
                                즉시결제
                            </div>
                            <div className="order-3-menu-1-price">
                                8000₩
                            </div>
                        </div>
                        <div className="order-3-check">
                            <div className="rectangle-461">
                            </div>
                        </div>
                    </div>
                    <div className="order-no-2">
                        <div className="container-3">
                            <div className="container-13">
                                <div className="container-8">
                                    <div className="order-2">
                                        002
                                    </div>
                                    <div className="line-62">
                                    </div>
                                    <div className="order-2-table">
                                        2
                                    </div>
                                </div>
                                <div className="container-12">
                                    <div className="order-2-menu-1">
                                        메뉴 1 이름
                                    </div>
                                    <span className="order-2-menu-2">
                    메뉴 3 이름
                  </span>
                                </div>
                                <div className="container">
                                    <div className="order-2-menu-1-amount">
                                        1
                                    </div>
                                    <span className="order-2-menu-2-amount">
                    1
                  </span>
                                </div>
                                <div className="container-2">
                                    <div className="order-2-payment">
                                        추후결제
                                    </div>
                                    <div className="order-2-pay-check">
                                        (결제완료)
                                    </div>
                                    <div className="container-16">
                                        <div className="order-2-menu-1-price">
                                            8000₩
                                        </div>
                                        <span className="order-2-menu-2-price">
                      6500₩
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-2-check">
                                <div className="material-symbolscheck">
                                    {/*<img className="vector" src="assets/vectors/Vector1_x2.svg" />*/}
                                </div>
                            </div>
                        </div>
                        <div className="line-72">
                        </div>
                    </div>
                    <div className="order-no-1">
                        <div className="container-5">
                            <div className="order-1">
                                001
                            </div>
                            <div className="container-15">
                                <div className="line-63">
                                </div>
                                <div className="order-1-table">
                                    1
                                </div>
                            </div>
                            <div className="container-4">
                                <div className="line-73">
                                </div>
                                <div className="order-1-menu-1">
                                    메뉴 1 이름
                                </div>
                            </div>
                            <div className="order-1-menu-1-amount">
                                1
                            </div>
                            <div className="order-1-pay">
                                즉시결제
                            </div>
                            <div className="order-1-menu-1-price">
                                8000₩
                            </div>
                        </div>
                        <div className="order-1-check">
                            <div className="material-symbolscheck-1">
                                {/*<img className="vector-1" src="assets/vectors/Vector6_x2.svg" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
