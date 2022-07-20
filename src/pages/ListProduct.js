import Header from "../components/Header";
import React from 'react'
import { useState, useEffect } from 'react';
function ListProduct() {
    const [min, setMin] = React.useState(0)
    const [max, setMax] = React.useState(10000)
    useEffect(() => {     
       console.log(max, min)
    }, [min, max]);
  return (
    <>
      <Header></Header>
      <img
        className="rim-right-silver"
        src={require("../img/Mask group.png")}
        alt=""
        style={{float: "right", width: "10%", marginTop: "43%"}}
      />
      <img
        className="rim-left-silver"
        src={require("../img/Mask group left.png")}
        alt=""
        style={{float: "left", width: "10%", marginTop: "43%"}}
      />
      <div className="main-all">
        <div className="column-filter">
          <div className="title-filter">Danh mục sản phẩm</div>
          <ul className="title-filter-detail">
            <li>
              Vòng tay trầm tốc vương
              <div className="amount-check" style={{display:"flex"}}>
                <p>(99)</p>
                <input type="checkbox" name="a" />
              </div>
            </li>
            <li>
              Vòng tay trầm sánh chìm
              <div className="amount-check" style={{display:"flex"}}>
                <p>(99)</p>
                <input type="checkbox" name="a" />
              </div>
            </li>
            <li>
              Vòng trầm hương Việt Nam
              <div className="amount-check" style={{display:"flex"}}>
                <p>(99)</p>
                <input type="checkbox" name="a" />
              </div>
            </li>
            <li>
              Vòng trầm hương rừng Lào
              <div className="amount-check" style={{display:"flex"}}>
                <p>(99)</p>
                <input type="checkbox" name="a" />
              </div>
            </li>
            <li>
              Vòng trầm rừng cao cấp
              <div className="amount-check" style={{display:"flex"}}>
                <p>(99)</p>
                <input type="checkbox" name="a" />
              </div>
            </li>
          </ul>
          <div className="title-filter">Mức giá</div>
          <ul className="title-filter-detail">
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input type="number" className="input-min" value={min} />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>Max</span>
                <input type="number" className="input-max" value={max} />
              </div>
            </div>
            <div className="range-wrap">
              <div className="range-value-price" id="rangeV-price-left">
                <span>0 triệu VND</span>
              </div>
              <div
                className="range-value-price"
                id="rangeV-price-right"
                style={{left: "calc(100% + -19.9px)"}}
              >
                <span>10 triệu VND</span>
              </div>
              <div className="slider">
                <div className="progress"></div>
              </div>
            </div>

            <div className="range-input">
              <input
                onChange={(event) => setMin(event.target.value)}
                type="range"
                className="range-min"
                min="0"
                max="10000"
                value={min}
                step="100"
              />
              <input
              onChange={(event) => setMax(event.target.value)}
                type="range"
                className="range-max"
                min="0"
                max="10000"
                value={max}
                step="100"
              />
            </div>
          </ul>
          <div className="list-icons">
            <div className="card-icon">
              <img
                src={require("../img/clarity_shield-check-line (1).png")}
                alt=""
              />
              <div className="title">ĐẢM BẢO CHẤT LƯỢNG</div>
              <div className="title-small">100% tự nhiên</div>
            </div>
            <div className="card-icon">
              <img
                src={require("../img/iconoir_delivery-truck (1).png")}
                alt=""
              />
              <div className="title">SHIP TOÀN QUỐC</div>
              <div className="title-small">3-5 ngày</div>
            </div>
            <div className="card-icon">
              <img src={require("../img/la_credit-card (1).png")} alt="" />
              <div className="title">THANH TOÁN ONLINE</div>
              <div className="title-small">an toàn và nhanh chóng</div>
            </div>
            <div className="card-icon">
              <img src={require("../img/Group 20 (1).png")} alt="" />
              <div className="title">ĐỔI TRẢ HÀNG</div>
              <div className="title-small">30 ngày</div>
            </div>
          </div>
        </div>
        <div className="colum-list-products">
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
                style={{width: "50%", display: "block", margin: "auto", textAlign: "center", marginTop: "12px"}}
              ></i>
            </div>
          </div>
          <div className="products-list">
            <div className="card-product">
              <div className="btn-card-product">Thêm vào giỏ hàng</div>
              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="">
                <div className="btn-card-product">Thêm vào giỏ hàng</div>
              </div>

              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="btn-card-product">Thêm vào giỏ hàng</div>
              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="">
                <div className="btn-card-product">Thêm vào giỏ hàng</div>
              </div>

              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="btn-card-product">Thêm vào giỏ hàng</div>
              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="">
                <div className="btn-card-product">Thêm vào giỏ hàng</div>
              </div>

              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="btn-card-product">Thêm vào giỏ hàng</div>
              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="">
                <div className="btn-card-product">Thêm vào giỏ hàng</div>
              </div>

              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="btn-card-product">Thêm vào giỏ hàng</div>
              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="">
                <div className="btn-card-product">Thêm vào giỏ hàng</div>
              </div>

              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="btn-card-product">Thêm vào giỏ hàng</div>
              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
            <div className="card-product">
              <div className="">
                <div className="btn-card-product">Thêm vào giỏ hàng</div>
              </div>

              <img src={require("../img/Rectangle 10.png")} alt="" />
              <div className="title-product">Nhang trầm hương</div>
              <div className="price-product">900.000 VND - 2.100.000 VND</div>
            </div>
          </div>
          <div className="line"></div>
          <ul className="number-page">
            <div className="number" style={{color: "#DBAA53"}}>
              1
            </div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="number">4</div>
            <div className="next">next</div>
          </ul>
        </div>
      </div>
      <img
        className="img-logo"
        src={require("../img/Mask group (3).png")}
        alt=""
        style={{position: "absolute", transform: "translateY(-100%)", width: "30%"}}
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
            style={{display: "block", margin: "auto", marginTop: "10px"}}
          />
        </div>
      </div>
    </>
  );
}

export default ListProduct;
