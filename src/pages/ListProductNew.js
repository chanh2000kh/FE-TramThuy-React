import Header from "../components/Header";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ListProductNew() {
  const navigate = useNavigate();

  const [listProductNew, setListProductNew] = React.useState([]);
  const loadListProductNew = () => {
    callApi(`api/product/getProductAll?limit=6&skip=1`, "GET")
      .then((res) => {
        setListProductNew(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addCart = (id) => {
    const newdata = {
      idProduct: id,
      amount: 1,
      check: 0,
    };
    var newListCart = JSON.parse(localStorage.getItem("listCart")) || [];
    var duplicate = false;
    newListCart.some((data, i) => {
      if (data.idProduct === id) {
        duplicate = true;
        newListCart[i] = newdata;
        localStorage.setItem("listCart", JSON.stringify(newListCart));
        return;
      }
    });
    if (duplicate == false) {
      newListCart.push(newdata);
      localStorage.setItem("listCart", JSON.stringify(newListCart));
    }
  };
  useEffect(() => {
    loadListProductNew();
  }, []);
  return (
    <>
      <Header id={7}></Header>
      <img
        className="rim-right-silver"
        src={require("../img/Mask group.png")}
        alt=""
        style={{ float: "right", width: "10%", marginTop: "43%" }}
      />
      <img
        className="rim-left-silver"
        src={require("../img/Mask group left.png")}
        alt=""
        style={{ float: "left", width: "10%", marginTop: "43%" }}
      />
      <div className="main-all">
        <div className="colum-list-products" style={{width: "100%"}}>
          <div className="amount-products">297 sản phẩm</div>
          <img
            className="icons_settings"
            src={require("../img/akar-icons_settings-horizontal.png")}
            alt=""
          />
          <div className="sort-product-list">
            <div className="sort">Sắp xếp:</div>
            <select className="type-sort" id="type-sort" name="name-type-sort">
              <option value="1">Mặc định </option>
              <option value="2">Tên sản phẩm</option>
              <option value="3">Thời gian</option>
              <option value="4">Độ phổ biến</option>
            </select>
            <div className="btn-sort">
              <i
                className="fa-solid fa-arrow-up icon-btn-sort"
                style={{
                  width: "50%",
                  display: "block",
                  margin: "auto",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              ></i>
            </div>
          </div>
          <div className="products-list">
            {listProductNew.map((data) => {
              return (
                <div className="card-product" key={data._id}>
                  <div
                    className="btn-card-product"
                    onClick={() => {
                      addCart(data._id);
                      window.alert("Thêm vào giỏ hàng thanh công!");
                      navigate("/cart")
                    }}
                    style={{transform: "translate(35%, 250%)"}}
                  >
                    Thêm vào giỏ hàng
                  </div>
                  <Link to={"/productdetail?id=" + data._id}>
                    <img src={data.img[0]} alt="" />
                    <div className="title-product">{data.name}</div>
                    {/* 900.000 VND - 2.100.000 VND */}
                    <div className="price-product">
                      {format(data.price)} VND
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img
        className="img-logo"
        src={require("../img/Mask group (3).png")}
        alt=""
        style={{
          position: "absolute",
          transform: "translateY(-100%)",
          width: "30%",
        }}
      />
      <div className="list-chat">
        <img
          className="chat"
          src={require("../img/ant-design_phone-filled (1).png")}
          alt=""
        />
        <img className="chat" src={require("../img/image 3.png")} alt="" />
        <img className="chat" src={require("../img/image 2.png")} alt="" />
        <div className="btn-chat">
          <img
            className="icon-btn-chat"
            src={require("../img/dashicons_arrow-left-alt2 (2).png")}
            alt=""
            style={{ display: "block", margin: "auto", marginTop: "10px" }}
          />
        </div>
      </div>
    </>
  );
}

export default ListProductNew;
