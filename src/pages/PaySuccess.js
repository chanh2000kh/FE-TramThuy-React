import Header from "../components/Header";
import "../css/PaySuccess.css"
function PaySuccess() {
    return (
      <>
      <Header></Header>
      <div className="main-pay-success">
        <div className="payment-steps">
            <div className="title">
                1. Giỏ hàng
            </div>
            <div className="title">
                2. Chi tiết thanh toán
            </div>
            <div className="title" style={{color: "#22242F"}}>
                3. Hoàn thành đơn hàng
            </div>
        </div>
        <div className="payment-steps-line">
            <div className="step"></div>
            <div className="step"></div>
            <div className="step" style={{background: "#000000"}}></div>
        </div>
        <div className="pay-success-detail">
            <img className="img-success" src={require("../img/clarity_success-standard-solid.png")} alt=""/>
            <div className="title-success">
                ĐẶT HÀNG THÀNH CÔNG!
            </div>
            <div className="title-table">
                <div className="" style={{width: "30%"}}>
                    Sản phẩm
                </div>
                <div className="" style={{width: "17.5%"}}>
                    Số lượng
                </div>
                <div className="" style={{width: "17.5%"}}>
                    Tổng cộng
                </div>
                <div className="" style={{width: "17.5%"}}>
                    Vận chuyển
                </div>
                <div className="" style={{width:" 17.5%", textAlign: "right"}}>
                    Thanh toán
                </div>
            </div>
            <div className="line-table"></div>
            <div className="product-table">
                <div className="box">
                    <div className="img-name">
                        <img className="img" src={require("../img/Rectangle 10.png")} alt=""/>
                        <div className="name">
                            Nụ trầm hương
                        </div>
                    </div>
                    <div className="amount">
                        1
                    </div>
                    <div className="price">
                        900.000 VND
                    </div>
                    <div className="ship-price">
                        Miễn phí
                    </div>
                    <div className="pay">
                        COD
                    </div>
                </div>               
            </div>
            <div className="row-pay-detail-success" style={{marginTop: "31px"}}>
                <div className="title">Mã đơn hàng:</div>
                <div className="detail">JSDSJ7</div>
            </div>
            <div className="row-pay-detail-success">
                <div className="title">Tên:</div>
                <div className="detail">Nguyen Van A</div>
            </div>
            <div className="row-pay-detail-success">
                <div className="title">Địa chỉ</div>
                <div className="detail">123 Nguyen Van Troi Phu Nhuan Tp. Ho Chi Minh</div>
            </div>
            <div className="row-pay-detail-success">
                <div className="title">Số điện thoại</div>
                <div className="detail">0999999999</div>
            </div>
            <div className="row-pay-title-success">
                Bạn sẽ nhận được email xác nhận chứa thông tin chi tiết của đơn hàng này.
            </div>
            <div className="title-thank-you">
                CẢM ƠN BẠN ĐÃ MUA HÀNG Ở TRẦM THỦY!
            </div>
            <button className="btn-continue-buy">
                TIẾP TỤC MUA HÀNG
            </button>
        </div>

        <div className="pay-success-detail-moblie">
            <img className="img-success" src={require("../img/clarity_success-standard-solid.png")} alt=""/>
            <div className="title-success">
                ĐẶT HÀNG THÀNH CÔNG!
            </div>
            <div className="title-table">
                <div className="" style={{width: "50%"}}>
                    Sản phẩm
                </div>
                <div className="" style={{width: "25%"}}>
                    Số lượng
                </div>       
                <div className="" style={{width: "25%", textAlign: "right"}}>
                    Thành tiền
                </div>
            </div>
            <div className="line-mobile"></div>
            <div className="product-table">
                <div className="img-name">
                    <img className="img" src={require("../img/Rectangle 10.png")} alt=""/>
                    <div className="name">
                        Nụ trầm hương
                    </div>
                </div>
                <div className="amount">
                    1
                </div>
                <div className="price">
                    900.000 VND
                </div>
            </div>
            <div className="line-mobile"></div>
            <div className="" style={{width: "45%", float: "right"}}>
                <div className="row-product-table-extra">
                    <div className="title">Vận chuyển:</div>
                    <div className="detail">FREE</div>
                </div>
                <div className="row-product-table-extra" style={{marginBottom: "12px"}}>
                    <div className="title">Phương thức thanh toán:</div>
                    <div className="detail">COD</div>
                </div>
                
            </div>
            <div className="row-pay-detail-success">
                <div className="title">Mã đơn hàng:</div>
                <div className="detail">JSDSJ7</div>
            </div>
            <div className="row-pay-detail-success">
                <div className="title">Tên:</div>
                <div className="detail">Nguyen Van A</div>
            </div>
            <div className="row-pay-detail-success">
                <div className="title">Địa chỉ</div>
                <div className="detail">123 Nguyen Van Troi Phu Nhuan Tp. Ho Chi Minh</div>
            </div>
            <div className="row-pay-detail-success">
                <div className="title">Số điện thoại</div>
                <div className="detail">0999999999</div>
            </div>
            <div className="row-pay-title-success">
                Bạn sẽ nhận được email xác nhận chứa thông tin chi tiết của đơn hàng này.
            </div>
            <div className="line-mobile"></div>
            <div className="title-thank-you">
                CẢM ƠN BẠN ĐÃ MUA HÀNG Ở TRẦM THỦY!
            </div>
            <button className="btn-continue-buy">
                TIẾP TỤC MUA HÀNG
            </button>
        </div>
    </div>
      </>
    );
  }
  
  export default PaySuccess;