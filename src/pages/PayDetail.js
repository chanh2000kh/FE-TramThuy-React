import Header from "../components/Header";
import "../css/PayDetail.css";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
function PayDetail() {
  const [listCart, setListCart] = React.useState([]);
  const [listCartLocal, setListCartLocal] = React.useState(
    JSON.parse(localStorage.getItem("listCart"))
  );
  const [totalBill, setTotalBill] = React.useState(0);
  //data bill
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [ZIPcode, setZIPcode] = React.useState("");
  const [provinceCity, setProvinceCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [note, setNote] = React.useState("");
  const [discountCode, setDiscountCode] = React.useState("");
  const [payOnline, setPayOnline] = React.useState(0);
  useEffect(() => {
    const data = {
      listCart: listCartLocal,
    };
    setTotalBill(0);
    callApi(`api/cart/getCartHaventToken`, "POST", data)
      .then((res) => {
        setListCart(res.data.data);
        res.data.data.map((data) => {
          setTotalBill((prev) => prev + data.product.price * data.amount);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listCartLocal]);
  const createBill = ()=>{
    const data = {
        name,
        address,
        ZIPcode,
        provinceCity,
        country,
        phone,
        email,
        note,
        discountCode,
        payOnline: payOnline === 0 ? false : true,
        totalMoneyBill: totalBill,
        products: listCart
      };
      console.log(data)
      callApi(`api/bill/createBillHaventToken`, "POST", data)
      .then((res) => {
        window.alert("Tạo hóa đơn thành công!")
        localStorage.setItem("listCart", JSON.stringify([]));
        // window.location=`http://localhost:3000/paysuccess?id=${res.data.data._id}`;
        window.location=`https://fe-tram-thuy-react.vercel.app/paysuccess?id=${res.data.data._id}`;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Header></Header>
      <div class="main-pay-detail">
        <div class="payment-steps">
          <div class="title">1. Giỏ hàng</div>
          <div class="title" style={{ color: "#22242F" }}>
            2. Chi tiết thanh toán
          </div>
          <div class="title">3. Hoàn thành đơn hàng</div>
        </div>
        <div class="payment-steps-line">
          <div class="step"></div>
          <div class="step" style={{ background: "#000000" }}></div>
          <div class="step"></div>
        </div>
        <div class="pay-detail">
          <div class="pay-detail-information">
            <div class="information-title">THÔNG TIN</div>
            <div class="address-title">Địa chỉ giao hàng</div>
            <div class="add-information" style={{ marginTop: "71px" }}>
              <div class="add-information-title">Tên</div>
              <input
                class="input-information"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {name == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Địa chỉ</div>
              <input
                class="input-information"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              {address == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Mã bưu điện</div>
              <input
                class="input-information"
                type="text"
                value={ZIPcode}
                onChange={(event) => setZIPcode(event.target.value)}
              />
            </div>
            <div class="add-information">
              <div class="add-information-title">Tỉnh / Thành phố</div>
              <input
                class="input-information"
                type="text"
                value={provinceCity}
                onChange={(event) => setProvinceCity(event.target.value)}
              />
              {provinceCity == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Quốc gia</div>
              <input
                class="input-information"
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
              {country == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Số điện thoại</div>
              <input
                class="input-information"
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              {phone == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Email</div>
              <input
                class="input-information"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {email == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div
                class="add-information-title"
                style={{ transform: "translateY(-150%)" }}
              >
                Ghi chú
              </div>
              <textarea
                class="input-information"
                type="text"
                style={{ height: "132px", width: "499px" }}
                value={note}
                onChange={(event) => setNote(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div class="pay-detail-information1">
            <div class="title-cart">GIỎ HÀNG</div>
            <div class="price-table">
              <div class="row-table-price" style={{ marginTop: "0" }}>
                <div class="title">Tạm tính</div>
                <div class="price">{format(totalBill)} VND</div>
              </div>
              <div class="line"></div>
              <div class="row-table-price">
                <div class="title">Tổng</div>
                <div class="price" style={{ color: "#DBAA53" }}>
                  {format(totalBill)} VND
                </div>
              </div>
            </div>
            <div class="check-ship">
              <div class="check-box">
                <input
                  class="check"
                  type="checkbox"
                  checked={payOnline === 1}
                  onChange={() => setPayOnline(1)}
                />
              </div>

              <div class="ship-title">Chuyển khoản ngân hàng</div>
            </div>
            <div class="check-ship">
              <div class="check-box"></div>

              <div class="ship-title1">
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
                Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
                toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
              </div>
            </div>
            <div class="check-ship">
              <div class="check-box">
                <input
                  class="check"
                  type="checkbox"
                  checked={payOnline === 0}
                  onChange={() => setPayOnline(0)}
                />
              </div>

              <div class="ship-title">Trả tiền mặt khi nhận hàng</div>
            </div>
            <div class="phone-table">
              <img
                src={require("../img/ant-design_phone-filled(2).png")}
                alt=""
              />
              <div class="box">
                <div class="title-customer">HỖ TRỢ KHÁCH HÀNG</div>
                <div class="title-phone">09XX.XXX.XXX 09XX.XXX.XXX</div>
              </div>
            </div>

            <button class="bnt-next" onClick={createBill}>Tiếp tục</button>
          </div>
          <div class="pay-detail-information-mobile">
            <div class="price-table">
              <div class="row-table-price" style={{ marginTop: "0" }}>
                <div class="title">Tạm tính</div>
                <div class="price">{format(totalBill)} VND</div>
              </div>
              <div class="line"></div>
              <div class="row-table-price">
                <div class="title">Tổng</div>
                <div class="price" style={{ color: "#DBAA53" }}>
                  {format(totalBill)} VND
                </div>
              </div>
            </div>
            <div class="add-information" style={{ marginTop: "31px" }}>
              <div class="add-information-title">Tên</div>
              <input
                class="input-information"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {name == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Địa chỉ</div>
              <input
                class="input-information"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              {address == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Mã bưu điện</div>
              <input
                class="input-information"
                type="text"
                value={ZIPcode}
                onChange={(event) => setZIPcode(event.target.value)}
              />
            </div>
            <div class="add-information">
              <div class="add-information-title">Tỉnh / Thành phố</div>
              <input
                class="input-information"
                type="text"
                value={provinceCity}
                onChange={(event) => setProvinceCity(event.target.value)}
              />
              {provinceCity == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Quốc gia</div>
              <input
                class="input-information"
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
              {country == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Số điện thoại</div>
              <input
                class="input-information"
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              {phone == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Email</div>
              <input
                class="input-information"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {email == "" && <div class="warning">*</div>}
            </div>
            <div class="add-information">
              <div class="add-information-title">Ghi chú</div>
              <textarea
                class="input-information1"
                type="text"
                value={note}
                onChange={(event) => setNote(event.target.value)}
              ></textarea>
            </div>
            <div class="check-ship" style={{ marginTop: "27px" }}>
              <div class="check-box">
                <input
                  class="check"
                  type="checkbox"
                  checked={payOnline === 1}
                  onChange={() => setPayOnline(1)}
                />
              </div>

              <div class="ship-title">Chuyển khoản ngân hàng</div>
            </div>
            <div class="check-ship">
              <div class="check-box"></div>
              <div class="ship-title1">
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
                Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
                toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
              </div>
            </div>
            <div class="check-ship" style={{ marginTop: "13px" }}>
              <div class="check-box">
                <input
                  class="check"
                  type="checkbox"
                  checked={payOnline === 0}
                  onChange={() => setPayOnline(0)}
                />
              </div>

              <div class="ship-title">Trả tiền mặt khi nhận hàng</div>
            </div>
            <button class="bnt-next" onClick={createBill}>Tiếp tục</button>
            <div class="phone-table">
              <img
                src={require("../img/ant-design_phone-filled(2).png")}
                alt=""
              />
              <div class="box">
                <div class="title-customer">HỖ TRỢ KHÁCH HÀNG</div>
                <div class="title-phone">09XX.XXX.XXX 09XX.XXX.XXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayDetail;
