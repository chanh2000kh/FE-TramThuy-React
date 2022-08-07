import Header from "../components/Header";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import Pagination from "@mui/material/Pagination";
import format from "../sevices/FormatPrice.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(10000);
  const [listProduct, setListProduct] = React.useState([]);
  const [totalProduct, setTotalProduct] = React.useState(0);
  const [productTypeId, setProductTypeId] = React.useState(
    GetURLParameter("id")
  );
  const [fromBigToSmall, setFromBigToSmall] = React.useState(true);
  const [name, setName] = React.useState("createdAt");
  const loadMinMax = () => {
    const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range1 = document.querySelector(".slider .progress"),
      rangeVLeft = document.getElementById("rangeV-price-left"),
      rangeVRight = document.getElementById("rangeV-price-right");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range1.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range1.style.right =
              100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range1.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range1.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

          var newPositionLeft = 10 - minVal * 0.2;
          rangeVLeft.innerHTML = `<span>${minVal / 1000} triệu VND</span>`;
          rangeVLeft.style.left = `calc(${minVal / 100}% + (${
            newPositionLeft / 100
          }px))`;

          var newPositionRight = 10 - maxVal * 0.2;
          rangeVRight.innerHTML = `<span>${maxVal / 1000} triệu VND</span>`;
          rangeVRight.style.left = `calc(${maxVal / 100}% + (${
            newPositionRight / 100
          }px))`;
        }
      });
    });
  };
  const [tag, setTag] = React.useState([GetURLParameter("tag")]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [productTagTotal, setProductTagTotal] = React.useState([]);
  const [header, setPageHeader] = React.useState(() => {
    if (GetURLParameter("id") == "62cd7c7a0d2a3b3e78ed4438") return 0;
    if (GetURLParameter("id") == "62cd7b3584e523f391176a97") return 1;
    if (GetURLParameter("id") == "62cd7c4e0d2a3b3e78ed4434") return 2;
    if (GetURLParameter("id") == "62cd7cbf0d2a3b3e78ed443c") return 3;
  });
  useEffect(() => {
    setListProduct([]);
    if (
      productTypeId == "62cd7c7a0d2a3b3e78ed4438" ||
      productTypeId == "62cd7b3584e523f391176a97"
    ) {
      const data = {
        tag: tag,
        name,
        fromBigToSmall: fromBigToSmall == true ? "-1" : "1",
      };
      callApi(
        `api/product/getProductByTypeId1?id=${productTypeId}&limit=12&skip=${pageNumber}&min=${
          min * 1000
        }&max=${max * 1000}`,
        "POST",
        data
      )
        .then((res) => {
          setListProduct(res.data.data.product);
          setTotalProduct(res.data.data.total);
          setTotalPages(res.data.data.pageNumber);
        })
        .catch((err) => {
          console.log(err);
        });

      callApi(`api/product/getProductTagTotal?id=${productTypeId}`, "GET")
        .then((res) => {
          setProductTagTotal(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const data = {
        name,
        fromBigToSmall: fromBigToSmall == true ? "-1" : "1",
      };
      callApi(
        `api/product/getProductByTypeId1?id=${productTypeId}&limit=12&skip=${pageNumber}&min=${
          min * 1000
        }&max=${max * 1000}`,
        "POST",
        data
      )
        .then((res) => {
          setListProduct(res.data.data.product);
          setTotalProduct(res.data.data.total);
          setTotalPages(res.data.data.pageNumber);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [min, max, tag, pageNumber, name, fromBigToSmall]);

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
                {incense.map((data, i) => {
                  return (
                    <li key={data.id}>
                      {data.name}
                      <div className="amount-check" style={{ display: "flex" }}>
                        <p>({productTagTotal[i]})</p>
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
                {jewels.map((data, i) => {
                  return (
                    <li key={data.id}>
                      {data.name}
                      <div className="amount-check" style={{ display: "flex" }}>
                        <p>({productTagTotal[i]})</p>
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
                onChange={(event) => {
                  // loadMinMax();
                  setMin(event.target.value);
                }}
                type="range"
                className="range-min"
                min="0"
                max="10000"
                value={min}
                step="1000"
              />
              <input
                onChange={(event) => {
                  // loadMinMax();
                  setMax(event.target.value);
                }}
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
          <div className="amount-products">{totalProduct} sản phẩm</div>
          <input
            className="checkbox-filter"
            type="checkbox"
            id="checkbox-filter"
          />
          <label htmlFor="checkbox-filter">
            <img
              className="icons_settings"
              src={require("../img/akar-icons_settings-horizontal.png")}
              alt=""
            />
          </label>
          <label
            htmlFor="checkbox-filter"
            className="nav__overplay-filter"
          ></label>
          <div className="tab-filter">
            {GetURLParameter("id") == "62cd7c7a0d2a3b3e78ed4438" && (
              <>
                {incense.map((data, i) => {
                  return (
                    <li key={data.id}>
                      {data.name}
                      <div className="amount-check" style={{ display: "flex" }}>
                        <p>({productTagTotal[i]})</p>
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
              </>
            )}
            {GetURLParameter("id") == "62cd7b3584e523f391176a97" && (
              <>
                {jewels.map((data, i) => {
                  return (
                    <li key={data.id}>
                      {data.name}
                      <div className="amount-check" style={{ display: "flex" }}>
                        <p>({productTagTotal[i]})</p>
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
              </>
            )}

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
            <div className="btns">
              <label htmlFor="checkbox-filter">
                <div className="btn-close-mobile">
                  <div style={{ margin: "auto" }}>ĐÓNG</div>
                </div>
              </label>
              <label htmlFor="checkbox-filter">
                <div className="btn-close-mobile">
                  <div style={{ margin: "auto" }}>ÁP DỤNG</div>
                </div>
              </label>
            </div>
          </div>
          <div className="sort-product-list">
            <div className="sort">Sắp xếp:</div>
            <select
              className="type-sort"
              id="type-sort"
              name="name-type-sort"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="name">Tên sản phẩm </option>
              <option value="price">Giá</option>
              <option value="createdAt">Thời gian</option>
              <option value="numberOfSold">Độ phổ biến</option>
            </select>
            {fromBigToSmall == true ? (
              <div
                className="btn-sort"
                onClick={() => setFromBigToSmall(!fromBigToSmall)}
                style={{ transform: "rotate(180deg)" }}
              >
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
            ) : (
              <div
                className="btn-sort"
                onClick={() => setFromBigToSmall(!fromBigToSmall)}
              >
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
            )}
          </div>
          <div className="products-list">
            {listProduct.map((data) => {
              return (
                <div className="card-product" key={data._id}>
                  <div
                    className="btn-card-product"
                    onClick={() => {
                      addCart(data._id);
                      window.alert("Thêm vào giỏ hàng thanh công!");
                      navigate("/cart");
                    }}
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
          <div className="line"></div>
          <ul className="number-page">
            {/* {pageNumber > 1 && <div className="next" onClick={prevPage}>
              prev
            </div>}
            <div className="number-color number">{pageNumber}</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="number">4</div>
            {pageNumber < totalPages && <div className="next" onClick={nextPage}>
              next
            </div>} */}
            <Pagination
              count={totalPages}
              page={pageNumber}
              onChange={(event, value) => setPageNumber(value)}
              className="number"
            />
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
