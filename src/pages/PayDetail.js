import Header from "../components/Header";
import "../css/PayDetail.css"
function PayDetail() {
    return (
      <>
       <Header></Header>
       <div class="main-pay-detail">
        <div class="payment-steps">
            <div class="title">
                1. Giỏ hàng
            </div>
            <div class="title" style={{color: "#22242F"}}>
                2. Chi tiết thanh toán
            </div>
            <div class="title">
                3. Hoàn thành đơn hàng
            </div>
        </div>
        <div class="payment-steps-line">
            <div class="step"></div>
            <div class="step" style={{background: "#000000"}}></div>
            <div class="step"></div>
        </div>
        <div class="pay-detail">
            <div class="pay-detail-information">
                <div class="information-title">
                    THÔNG TIN
                </div>
                <div class="address-title">
                    Địa chỉ giao hàng
                </div>
                <div class="add-information" style={{marginTop: "71px"}}>
                    <div class="add-information-title">
                        Tên
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Địa chỉ
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Mã bưu điện
                    </div>
                    <input class="input-information" type="text"/>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Tỉnh / Thành phố
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Quốc gia
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Số điện thoại
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Email
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title" style={{transform: "translateY(-150%)"}}>
                        Ghi chú
                    </div>
                    <textarea class="input-information" type="text" style={{height: "132px", width: "499px"}}></textarea>
                </div>
            </div>
            <div class="pay-detail-information1">
                <div class="title-cart">
                    GIỎ HÀNG
                </div>
                <div class="price-table">
                    <div class="row-table-price" style={{marginTop: "0"}}>
                        <div class="title">
                            Tạm tính
                        </div>
                        <div class="price">
                            900.000 VND
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="row-table-price">
                        <div class="title">
                            Tổng
                        </div>
                        <div class="price" style={{color: "#DBAA53"}}>
                            900.000 VND
                        </div>
                    </div>
                </div>
                <div class="check-ship">
                    <div class="check-box">
                        <input class="check" type="checkbox"/>
                    </div>

                    <div class="ship-title">
                        Chuyển khoản ngân hàng
                    </div>
                </div>
                <div class="check-ship">
                    <div class="check-box">
                    </div>

                    <div class="ship-title1">
                        Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng
                        của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
                    </div>
                </div>
                <div class="check-ship">
                    <div class="check-box">
                        <input class="check" type="checkbox"/>
                    </div>

                    <div class="ship-title">
                        Trả tiền mặt khi nhận hàng
                    </div>
                </div>
                <div class="phone-table">
                    <img src={require("../img/ant-design_phone-filled(2).png")} alt=""/>
                    <div class="box">
                        <div class="title-customer">
                            HỖ TRỢ KHÁCH HÀNG
                        </div>
                        <div class="title-phone">
                            09XX.XXX.XXX 09XX.XXX.XXX
                        </div>
                    </div>
                </div>
            </div>
            <div class="pay-detail-information-mobile">
                <div class="price-table">
                    <div class="row-table-price" style={{marginTop: "0"}}>
                        <div class="title">
                            Tạm tính
                        </div>
                        <div class="price">
                            900.000 VND
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="row-table-price">
                        <div class="title">
                            Tổng
                        </div>
                        <div class="price" style={{color: "#DBAA53"}}>
                            900.000 VND
                        </div>
                    </div>

                </div>
                <div class="add-information" style={{marginTop: "32px"}}>
                    <div class="add-information-title">
                        Tên
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Địa chỉ
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Mã bưu điện
                    </div>
                    <input class="input-information" type="text"/>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Tỉnh / Thành phố
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Quốc gia
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Số điện thoại
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Email
                    </div>
                    <input class="input-information" type="text"/>
                    <div class="warning">*</div>
                </div>
                <div class="add-information">
                    <div class="add-information-title">
                        Ghi chú
                    </div>
                    <textarea class="input-information1" type="text"> </textarea>          
                </div>
                <div class="check-ship" style={{marginTop: "27px"}}>
                    <div class="check-box">
                        <input class="check" type="checkbox"/>
                    </div>

                    <div class="ship-title">
                        Chuyển khoản ngân hàng
                    </div>
                </div>
                <div class="check-ship">
                    <div class="check-box">
                       
                    </div>
                    <div class="ship-title1">
                        Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
                    </div>
                </div>
                <div class="check-ship" style={{marginTop: "13px"}}>
                    <div class="check-box">
                        <input class="check" type="checkbox"/>
                    </div>

                    <div class="ship-title">
                        Trả tiền mặt khi nhận hàng
                    </div>
                </div>
                <button class="bnt-next">
                    Tiếp tục
                </button>
                <div class="phone-table">
                    <img src={require("../img/ant-design_phone-filled(2).png")} alt=""/>
                    <div class="box">
                        <div class="title-customer">
                            HỖ TRỢ KHÁCH HÀNG
                        </div>
                        <div class="title-phone">
                            09XX.XXX.XXX 09XX.XXX.XXX
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    );
  }
  
  export default PayDetail;