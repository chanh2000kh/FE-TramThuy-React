import Header from "../components/Header";
import "../css/PayDetail.css";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
import { firebase, auth } from "../sevices/Firebase.js";
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
  //----OTP
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("INPUT_PHONE_NUMBER");
  const [result, setResult] = useState("");

  const signin = () => {
    if (phone === "") return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });
    auth
      .signInWithPhoneNumber("+84" + phone, verify)
      .then((result) => {
        setResult(result);
        setStep("VERIFY_OTP");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const ValidateOtp = () => {
    if (otp === null) return;

    result
      .confirm(otp)
      .then((result) => {
        setStep("VERIFY_SUCCESS");
      })
      .catch((err) => {
        alert("Mã OTP không hợp lệ");
      });
  };
  //--------
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
  const createBill = () => {
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
      products: listCart,
    };
    callApi(`api/bill/createBillHaventToken`, "POST", data)
      .then((res) => {
        window.alert("Tạo hóa đơn thành công!");
        localStorage.setItem("listCart", JSON.stringify([]));
        // window.location = `http://localhost:3000/paysuccess?id=${res.data.data._id}`;
        window.location=`https://fe-tram-thuy-react.vercel.app/paysuccess?id=${res.data.data._id}`;
      })
      .catch((err) => {
        window.alert("Tạo hóa đơn thất bại, vui lòng kiểm tra thông tin!")
        console.log(err);
      });
  };
  return (
    <>
      <Header></Header>
      <div className="main-pay-detail">
        <div className="payment-steps">
          <div className="title">1. Giỏ hàng</div>
          <div className="title" style={{ color: "#22242F" }}>
            2. Chi tiết thanh toán
          </div>
          <div className="title">3. Hoàn thành đơn hàng</div>
        </div>
        <div className="payment-steps-line">
          <div className="step"></div>
          <div className="step" style={{ background: "#000000" }}></div>
          <div className="step"></div>
        </div>
        <div className="pay-detail">
          <div className="pay-detail-information">
            <div className="information-title">THÔNG TIN</div>
            <div className="address-title">Địa chỉ giao hàng</div>
            <div className="add-information" style={{ marginTop: "71px" }}>
              <div className="add-information-title">Tên</div>
              <input
                className="input-information"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {name == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Địa chỉ</div>
              <input
                className="input-information"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              {address == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Mã bưu điện</div>
              <input
                className="input-information"
                type="text"
                value={ZIPcode}
                onChange={(event) => setZIPcode(event.target.value)}
              />
            </div>
            <div className="add-information">
              <div className="add-information-title">Tỉnh / Thành phố</div>
              <input
                className="input-information"
                type="text"
                value={provinceCity}
                onChange={(event) => setProvinceCity(event.target.value)}
              />
              {provinceCity == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Quốc gia</div>
              <input
                className="input-information"
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
              {country == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Số điện thoại</div>
              {step === "VERIFY_SUCCESS" && (
                <input
                  className="input-information"
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  readonly="readonly"
                />
              )}
              {(step === "INPUT_PHONE_NUMBER" || step === "VERIFY_OTP") && (
                <>
                  <input
                    className="input-information"
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                  {phone == "" && <div className="warning">*</div>}
                  <div id="recaptcha-container"></div>
                  <button onClick={signin}>Gửi OTP</button>
                </>
              )}
            </div>
            <div className="add-information">
              <div className="add-information-title">Nhập mã OTP</div>

              {step === "VERIFY_OTP" && (
                <>
                  <input
                    className="input-information"
                    type="text"
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                  />
                  <button onClick={ValidateOtp}>Xác nhận</button>
                </>
              )}
              {step === "VERIFY_SUCCESS" && (
                <h3 className="warning">Xác nhận thành công</h3>
              )}
            </div>

            <div className="add-information">
              <div className="add-information-title">Email</div>
              <input
                className="input-information"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {email == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div
                className="add-information-title"
                style={{ transform: "translateY(-150%)" }}
              >
                Ghi chú
              </div>
              <textarea
                className="input-information"
                type="text"
                style={{ height: "132px", width: "499px" }}
                value={note}
                onChange={(event) => setNote(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="pay-detail-information1">
            <div className="title-cart">GIỎ HÀNG</div>
            <div className="price-table">
              <div className="row-table-price" style={{ marginTop: "0" }}>
                <div className="title">Tạm tính</div>
                <div className="price">{format(totalBill)} VND</div>
              </div>
              <div className="line"></div>
              <div className="row-table-price">
                <div className="title">Tổng</div>
                <div className="price" style={{ color: "#DBAA53" }}>
                  {format(totalBill)} VND
                </div>
              </div>
            </div>
            <div className="check-ship">
              <div className="check-box">
                <input
                  className="check"
                  type="checkbox"
                  checked={payOnline === 1}
                  onChange={() => setPayOnline(1)}
                />
              </div>

              <div className="ship-title">Chuyển khoản ngân hàng</div>
            </div>
            <div className="check-ship">
              <div className="check-box"></div>

              <div className="ship-title1">
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
                Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
                toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
              </div>
            </div>
            <div className="check-ship">
              <div className="check-box">
                <input
                  className="check"
                  type="checkbox"
                  checked={payOnline === 0}
                  onChange={() => setPayOnline(0)}
                />
              </div>

              <div className="ship-title">Trả tiền mặt khi nhận hàng</div>
            </div>
            <div className="phone-table">
              <img
                src={require("../img/ant-design_phone-filled(2).png")}
                alt=""
              />
              <div className="box">
                <div className="title-customer">HỖ TRỢ KHÁCH HÀNG</div>
                <div className="title-phone">09XX.XXX.XXX 09XX.XXX.XXX</div>
              </div>
            </div>
            <button className="bnt-next" onClick={() => {
                if (step === "VERIFY_SUCCESS") {
                  createBill();
                } else {
                  window.alert("Chưa xác nhận mã OTP");
                }
              }}>
              Tiếp tục
            </button>
          </div>
          <div className="pay-detail-information-mobile">
            <div className="price-table">
              <div className="row-table-price" style={{ marginTop: "0" }}>
                <div className="title">Tạm tính</div>
                <div className="price">{format(totalBill)} VND</div>
              </div>
              <div className="line"></div>
              <div className="row-table-price">
                <div className="title">Tổng</div>
                <div className="price" style={{ color: "#DBAA53" }}>
                  {format(totalBill)} VND
                </div>
              </div>
            </div>
            <div className="add-information" style={{ marginTop: "31px" }}>
              <div className="add-information-title">Tên</div>
              <input
                className="input-information"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {name == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Địa chỉ</div>
              <input
                className="input-information"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              {address == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Mã bưu điện</div>
              <input
                className="input-information"
                type="text"
                value={ZIPcode}
                onChange={(event) => setZIPcode(event.target.value)}
              />
            </div>
            <div className="add-information">
              <div className="add-information-title">Tỉnh / Thành phố</div>
              <input
                className="input-information"
                type="text"
                value={provinceCity}
                onChange={(event) => setProvinceCity(event.target.value)}
              />
              {provinceCity == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Quốc gia</div>
              <input
                className="input-information"
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
              {country == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Số điện thoại</div>

              {step === "VERIFY_SUCCESS" && (
                <input
                  className="input-information"
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  readonly="readonly"
                />
              )}
              {(step === "INPUT_PHONE_NUMBER" || step === "VERIFY_OTP") && (
                <>
                  <input
                    className="input-information"
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                  {phone == "" && <div className="warning">*</div>}
                  <div id="recaptcha-container"></div>
                  <button onClick={signin}>Gửi OTP</button>
                </>
              )}
            </div>

            <div className="add-information">
              <div className="add-information-title"w>Nhập mã OTP</div>

              {step === "VERIFY_OTP" && (
                <>
                  <input
                    className="input-information"
                    type="text"
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                  />
                  <button onClick={ValidateOtp}>Xác nhận</button>
                </>
              )}
              {step === "VERIFY_SUCCESS" && (
                <h3 className="warning" style={{width: "100%"}}>Xác nhận thành công</h3>
              )}
            </div>

            <div className="add-information">
              <div className="add-information-title">Email</div>
              <input
                className="input-information"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {email == "" && <div className="warning">*</div>}
            </div>
            <div className="add-information">
              <div className="add-information-title">Ghi chú</div>
              <textarea
                className="input-information1"
                type="text"
                value={note}
                onChange={(event) => setNote(event.target.value)}
              ></textarea>
            </div>
            <div className="check-ship" style={{ marginTop: "27px" }}>
              <div className="check-box">
                <input
                  className="check"
                  type="checkbox"
                  checked={payOnline === 1}
                  onChange={() => setPayOnline(1)}
                />
              </div>

              <div className="ship-title">Chuyển khoản ngân hàng</div>
            </div>
            <div className="check-ship">
              <div className="check-box"></div>
              <div className="ship-title1">
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
                Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
                toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
              </div>
            </div>
            <div className="check-ship" style={{ marginTop: "13px" }}>
              <div className="check-box">
                <input
                  className="check"
                  type="checkbox"
                  checked={payOnline === 0}
                  onChange={() => setPayOnline(0)}
                />
              </div>

              <div className="ship-title">Trả tiền mặt khi nhận hàng</div>
            </div>
            <button
              className="bnt-next"
              onClick={() => {
                if (step === "VERIFY_SUCCESS") {
                  createBill();
                } else {
                  window.alert("Chưa xác nhận mã OTP");
                }
              }}
            >
              Tiếp tục
            </button>
            <div className="phone-table">
              <img
                src={require("../img/ant-design_phone-filled(2).png")}
                alt=""
              />
              <div className="box">
                <div className="title-customer">HỖ TRỢ KHÁCH HÀNG</div>
                <div className="title-phone">09XX.XXX.XXX 09XX.XXX.XXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayDetail;
