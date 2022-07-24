import Header from "../components/Header";
import "../css/PaySuccess.css";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
const GetURLParameter = (sParam) => {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1].toString();
    }
  }
};
function PaySuccess() {
  const [bill, setBill] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const id = GetURLParameter("id");
    callApi(`api/bill/getBillById?id=${id}`, "GET")
      .then((res) => {
        setBill(res.data.data);
        setProducts(res.data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <div className="main-pay-success">
        <div className="payment-steps">
          <div className="title">1. Giỏ hàng</div>
          <div className="title">2. Chi tiết thanh toán</div>
          <div className="title" style={{ color: "#22242F" }}>
            3. Hoàn thành đơn hàng
          </div>
        </div>
        <div className="payment-steps-line">
          <div className="step"></div>
          <div className="step"></div>
          <div className="step" style={{ background: "#000000" }}></div>
        </div>
        <div className="pay-success-detail">
          <img
            className="img-success"
            src={require("../img/clarity_success-standard-solid.png")}
            alt=""
          />
          <div className="title-success">ĐẶT HÀNG THÀNH CÔNG!</div>
          <div className="title-table">
            <div className="" style={{ width: "30%" }}>
              Sản phẩm
            </div>
            <div className="" style={{ width: "17.5%" }}>
              Số lượng
            </div>
            <div className="" style={{ width: "17.5%" }}>
              Tổng cộng
            </div>
            <div className="" style={{ width: "17.5%" }}>
              Vận chuyển
            </div>
            <div className="" style={{ width: " 17.5%", textAlign: "right" }}>
              Thanh toán
            </div>
          </div>
          <div className="line-table"></div>
          {products.map((data) => {
            return (
              <div className="product-table">
                <div className="box">
                  <div className="img-name">
                    <img className="img" src={data.product.img[0]} alt="" />
                    <div className="name">{data.product.name}</div>
                  </div>
                  <div className="amount">{data.amount}</div>
                  <div className="price">{format(data.totalMoney)} VND</div>
                  <div className="ship-price">Miễn phí</div>
                  <div className="pay">
                    {bill.payOnline ? <>Online</> : <>COD</>}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="row-pay-detail-success" style={{ marginTop: "31px" }}>
            <div className="title">Mã đơn hàng:</div>
            <div className="detail">{bill._id}</div>
          </div>
          <div className="row-pay-detail-success">
            <div className="title">Tên:</div>
            <div className="detail">{bill.name}</div>
          </div>
          <div className="row-pay-detail-success">
            <div className="title">Địa chỉ</div>
            <div className="detail">{bill.address}</div>
          </div>
          <div className="row-pay-detail-success">
            <div className="title">Số điện thoại</div>
            <div className="detail">{bill.phone}</div>
          </div>
          <div className="row-pay-title-success">
            Bạn sẽ nhận được email xác nhận chứa thông tin chi tiết của đơn hàng
            này.
          </div>
          <div className="title-thank-you">
            CẢM ƠN BẠN ĐÃ MUA HÀNG Ở TRẦM THỦY!
          </div>
          <a href="/">
            <button className="btn-continue-buy">TIẾP TỤC MUA HÀNG</button>
          </a>
        </div>

        <div className="pay-success-detail-moblie">
          <img
            className="img-success"
            src={require("../img/clarity_success-standard-solid.png")}
            alt=""
          />
          <div className="title-success">ĐẶT HÀNG THÀNH CÔNG!</div>
          <div className="title-table">
            <div className="" style={{ width: "50%" }}>
              Sản phẩm
            </div>
            <div className="" style={{ width: "25%" }}>
              Số lượng
            </div>
            <div className="" style={{ width: "25%", textAlign: "right" }}>
              Thành tiền
            </div>
          </div>
          <div className="line-mobile"></div>
          {products.map((data) => {
            return (
              <div className="product-table">
                <div className="img-name">
                  <img className="img" src={data.product.img[0]} alt="" />
                  <div className="name">{data.product.name}</div>
                </div>
                <div className="amount">{data.amount}</div>
                <div className="price">{format(data.totalMoney)} VND</div>
              </div>
            );
          })}
          <div className="line-mobile"></div>
          <div className="" style={{ width: "45%", float: "right" }}>
            <div className="row-product-table-extra">
              <div className="title">Vận chuyển:</div>
              <div className="detail">FREE</div>
            </div>
            <div
              className="row-product-table-extra"
              style={{ marginBottom: "12px" }}
            >
              <div className="title">Phương thức thanh toán:</div>
              <div className="detail">
                {bill.payOnline ? <>Online</> : <>COD</>}
              </div>
            </div>
          </div>
          <div className="row-pay-detail-success">
            <div className="title">Mã đơn hàng:</div>
            <div className="detail">{bill._id}</div>
          </div>
          <div className="row-pay-detail-success">
            <div className="title">Tên:</div>
            <div className="detail">{bill.name}</div>
          </div>
          <div className="row-pay-detail-success">
            <div className="title">Địa chỉ</div>
            <div className="detail">{bill.address}</div>
          </div>
          <div className="row-pay-detail-success">
            <div className="title">Số điện thoại</div>
            <div className="detail">{bill.phone}</div>
          </div>
          <div className="row-pay-title-success">
            Bạn sẽ nhận được email xác nhận chứa thông tin chi tiết của đơn hàng
            này.
          </div>
          <div className="line-mobile"></div>
          <div className="title-thank-you">
            CẢM ƠN BẠN ĐÃ MUA HÀNG Ở TRẦM THỦY!
          </div>
          <a href="/">
            <button className="btn-continue-buy">TIẾP TỤC MUA HÀNG</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default PaySuccess;
