import Header from "../components/Header";
import "../css/Cart.css";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
function Cart() {
  // localStorage.setItem('listCart', JSON.stringify([{idProduct:"62ceca58b6f47eb61bb4fe41",amount: 1}, {idProduct:"62cecbfbb6f47eb61bb4fe45",amount: 1}]));
  const [listCart, setListCart] = React.useState([]);
  const [listCartLocal, setListCartLocal] = React.useState(
    JSON.parse(localStorage.getItem("listCart"))
  );
  const [totalBill, setTotalBill] = React.useState(0);
  const [discountCode, setDiscountCode] = React.useState("");
  useEffect(() => {
    const data = {
      listCart: listCartLocal,
    };
    setTotalBill(0);
    callApi(`api/cart/getCartHaventToken`, "POST", data)
      .then((res) => {
        setListCart(res.data.data);
        console.log(res.data.data);
        res.data.data.map((data) => {
          if (data.product.size.length > 0)
            setTotalBill(
              (prev) =>
                prev +
                (data.product.price +
                  Number(data.product.size[data.check].priceAdd)) *
                  data.amount
            );
          if (data.product.type.length > 0)
            setTotalBill(
              (prev) =>
                prev +
                (data.product.price +
                  Number(data.product.type[data.check].priceAdd)) *
                  data.amount
            );
          if (data.product.type.length == 0 && data.product.size.length == 0)
            setTotalBill((prev) => prev + data.product.price * data.amount);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listCartLocal]);
  const addAmount = (id) => {
    listCartLocal.map((data) => {
      if (data.idProduct == id) data.amount = data.amount + 1;
    });
    localStorage.setItem("listCart", JSON.stringify(listCartLocal));
    setListCartLocal(JSON.parse(localStorage.getItem("listCart")));
  };
  const addMinus = (id) => {
    listCartLocal.map((data) => {
      if (data.idProduct == id && data.amount > 1)
        data.amount = data.amount - 1;
    });
    localStorage.setItem("listCart", JSON.stringify(listCartLocal));
    setListCartLocal(JSON.parse(localStorage.getItem("listCart")));
  };
  const deleteCart = (id) => {
    const listCartLocalNew = listCartLocal.filter((data) => {
      return data.idProduct != id;
    });
    localStorage.setItem("listCart", JSON.stringify(listCartLocalNew));
    setListCartLocal(JSON.parse(localStorage.getItem("listCart")));
  };
  const addDiscountCode = () => {
    localStorage.setItem("discountCode", discountCode);
  };
  return (
    <>
      <Header></Header>
      <div className="main-cart">
        <div className="list-product-cart">
          <div className="title-cart">GIỎ HÀNG</div>
          <div className="table-list-product-cart">
            <div className="row-name-column">
              <div className="product" style={{ width: "44%" }}>
                Sản phẩm
              </div>
              <div className="name-column" style={{ width: "22%" }}>
                Số lượng
              </div>
              <div className="name-column float-right" style={{ width: "22%" }}>
                Tạm tính
              </div>
            </div>
            <div className="line"></div>
            {listCart.map((data, index) => {
              return (
                <>
                  <div className="row-product">
                    <div className="img-name-product">
                      <img src={data.product.img[0]} alt="" />
                      <div className="name-product">
                        <div className="" style={{ height: "78%" }}>
                          {data.product.name}
                        </div>
                        <div
                          className="delete-mobile"
                          onClick={() => deleteCart(data.product._id)}
                        >
                          XÓA
                        </div>
                      </div>
                    </div>
                    <div className="amount-product">
                      <div className="btn-amount-product">
                        <div
                          className="add"
                          style={{ transform: "translateY(-40%)" }}
                          onClick={() => addMinus(data.product._id)}
                        >
                          _
                        </div>
                        <div className="number">{data.amount}</div>
                        <div
                          className="add"
                          onClick={() => addAmount(data.product._id)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="temporary-price float-right">
                      {data.product.size.length > 0 && <>{format((data.product.price + Number(data.product.size[data.check].priceAdd)) * data.amount)} VND</>}
                      {data.product.type.length > 0 && <>{format((data.product.price + Number(data.product.type[data.check].priceAdd))* data.amount)} VND</>}
                      {(data.product.size.length == 0 && data.product.type.length == 0) && <>{format(data.product.price * data.amount)} VND</>}
                    </div>
                    <div
                      className="delete"
                      onClick={() => deleteCart(data.product._id)}
                    >
                      XÓA
                    </div>
                  </div>
                  <div className="line"></div>
                </>
              );
            })}
          </div>
        </div>
        <div className="price-product-cart">
          <div className="table-price">
            <div className="table-price-detail">
              <div className="title-price">Cộng giỏ hàng</div>
              <div className="line-mobile"></div>
              <div className="row-table-price">
                <div className="title">Tạm tính</div>
                <div className="price">{format(totalBill)} VND</div>
              </div>
              <div className="line-mobile"></div>
              <div className="row-table-price">
                <div className="title">Giao hàng</div>
                <div className="contact-to-know-price">
                  Liên hệ để được báo giá giao hàng
                </div>
              </div>
              <div className="line-mobile"></div>
              <div className="row-table-price">
                <div className="title">Tổng</div>
                <div className="price">{format(totalBill)} VND</div>
              </div>
              <div className="add-discount-code">
                <input
                  className="discount-code"
                  type="text"
                  placeholder="Mã ưu đãi"
                  value={discountCode}
                  onChange={(event) => setDiscountCode(event.target.value)}
                />
                <button className="btn-add-code" onClick={addDiscountCode}>
                  Áp dụng
                </button>
              </div>
              <a href="/paydetail">
                <button className="btn-pay">TIẾN HÀNH THANH TOÁN</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
