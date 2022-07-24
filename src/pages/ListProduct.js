import Header from "../components/Header";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
const jewels = [
  {
    id: "1",
    name: "Vòng tay trầm tốc vương",
  },
  {
    id: "2",
    name: "Vòng tay trầm sánh chìm",
  },
  {
    id: "3",
    name: "Vòng trầm hương Việt Nam",
  },
  {
    id: "4",
    name: "Vòng trầm hương rừng Lào",
  },
  {
    id: "5",
    name: "Vòng trầm rừng cao cấp",
  },
];
const incense = [
  {
    id: "1",
    name: "Nhang trầm không tăm",
  },
  {
    id: "2",
    name: "Nhang khoanh trầm hương",
  },
  {
    id: "3",
    name: "Nụ rầm hương",
  },
];
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
function ListProduct() {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(10000);
  const [listProduct, setListProduct] = React.useState([]);
  const [productTypeId, setProductTypeId] = React.useState(
    GetURLParameter("id")
  );
  const [tag, setTag] = React.useState([GetURLParameter("tag")]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [header, setPageHeader] = React.useState(() => {
    if (GetURLParameter("id") == "62cd7c7a0d2a3b3e78ed4438") return 0;
    if (GetURLParameter("id") == "62cd7b3584e523f391176a97") return 1;
    if (GetURLParameter("id") == "62cd7c4e0d2a3b3e78ed4434") return 2;
    if (GetURLParameter("id") == "62cd7c7a0d2a3b3e78ed4438") return 3;
  });
  useEffect(() => {
    setListProduct([]);
    if (
      productTypeId == "62cd7c7a0d2a3b3e78ed4438" ||
      productTypeId == "62cd7b3584e523f391176a97"
    )
      tag.map((data) => {
        callApi(
          `api/product/getProductByTypeId?id=${productTypeId}&limit=12&skip=${pageNumber}&tag=${data}&min=${
            min * 1000
          }&max=${max * 1000}`,
          "GET"
        )
          .then((res) => {
            if (listProduct.length == 0) setListProduct(res.data.data);
            else {
              res.data.data.map((product) => {
                setListProduct((prev) => {
                  return [...prev, product];
                });
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    else
      callApi(
        `api/product/getProductByTypeId?id=${productTypeId}&limit=12&skip=${pageNumber}&min=${
          min * 1000
        }&max=${max * 1000}`,
        "GET"
      )
        .then((res) => {
          setListProduct(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [min, max, tag]);

  const handleCheck = (id) => {
    setTag((prev) => {
      const isChecked = tag.includes(id);
      if (isChecked) {
        //Uncheck
        return tag.filter((data) => data != id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <>
      <Header id={header}></Header>
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
        <div className="column-filter">
          {GetURLParameter("id") == "62cd7c7a0d2a3b3e78ed4438" && (
            <>
              <div className="title-filter">Danh mục sản phẩm</div>
              <ul className="title-filter-detail">
                {incense.map((data) => {
                  return (
                    <li key={data.id}>
                      {data.name}
                      <div className="amount-check" style={{ display: "flex" }}>
                        <p>(99)</p>
                        <input
                          type="checkbox"
                          checked={tag.includes(data.id)}
                          onChange={() => {
                            handleCheck(data.id);
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {GetURLParameter("id") == "62cd7b3584e523f391176a97" && (
            <>
              <div className="title-filter">Danh mục sản phẩm</div>
              <ul className="title-filter-detail">
                {jewels.map((data) => {
                  return (
                    <li key={data.id}>
                      {data.name}
                      <div className="amount-check" style={{ display: "flex" }}>
                        <p>(99)</p>
                        <input
                          type="checkbox"
                          checked={tag.includes(data.id)}
                          onChange={() => {
                            handleCheck(data.id);
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          <div className="title-filter">Mức giá</div>
          <ul className="title-filter-detail">
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input
                  type="number"
                  className="input-min"
                  value={min}
                  readOnly
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>Max</span>
                <input
                  type="number"
                  className="input-max"
                  value={max}
                  readOnly
                />
              </div>
            </div>
            <div className="range-wrap">
              <div className="range-value-price" id="rangeV-price-left">
                <span>0 triệu VND</span>
              </div>
              <div
                className="range-value-price"
                id="rangeV-price-right"
                style={{ left: "calc(100% + -19.9px)" }}
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
                step="1000"
              />
              <input
                onChange={(event) => setMax(event.target.value)}
                type="range"
                className="range-max"
                min="0"
                max="10000"
                value={max}
                step="1000"
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
            {listProduct.map((data) => {
              return (
                <div className="card-product" key={data._id}>
                  <a href="">
                    <div className="btn-card-product">Thêm vào giỏ hàng</div>
                    <img src={data.img[0]} alt="" />
                    <div className="title-product">{data.name}</div>
                    {/* 900.000 VND - 2.100.000 VND */}
                    <div className="price-product">
                      {format(data.price)} VND
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="line"></div>
          <ul className="number-page">
            <div className="number" style={{ color: "#DBAA53" }}>
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

export default ListProduct;
