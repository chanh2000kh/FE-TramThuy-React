import Header from "../components/Header";
import "../css/ProductDetail.css";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
import Rating from "@mui/material/Rating";
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
function ProductDetail() {
  const [product, setProduct] = React.useState({});
  const [imgProduct, setImgProduct] = React.useState([]);
  const [check, setCheck] = React.useState(0);
  const [type, setType] = React.useState([]);
  const [size, setSize] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [amount, setAmount] = React.useState(1);
  const [listCartLocal, setListCartLocal] = React.useState(
    JSON.parse(localStorage.getItem("listCart")) || []
  );
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    const id = GetURLParameter("id");
    callApi(`api/product/getOneProduct?id=${id}`, "GET")
      .then((res) => {
        setProduct(res.data.data);
        setImgProduct(res.data.data.img);
        setType(res.data.data.type);
        setSize(res.data.data.size);
        setPrice(res.data.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const addPrice = (n) => {
    const total = Number(product.price) + Number(n);
    setPrice(total);
  };
  const changeAmount = (n) => {
    setAmount((prev) => prev + n);
  };
  const addCart = () => {
    const newdata = {
      idProduct: product._id,
      amount: amount,
      check: check,
    };
    var newListCart = listCartLocal;
    var duplicate = false;
    listCartLocal.some((data, i) => {
      if (data.idProduct === product._id) {
        duplicate = true;
        newListCart[i] = newdata;
        localStorage.setItem("listCart", JSON.stringify(listCartLocal));
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
      <Header></Header>
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
      <div className="main-product-detail">
        <div className="product-detail">
          <div className="product-detail-column1" style={{ marginTop: "10px" }}>
            {imgProduct.map((data) => {
              return <img src={data} alt="" />;
            })}
          </div>
          <div className="product-detail-column2">
            <div className="column1-img">
              <img className="img" src={imgProduct[0]} alt="" />
              <div className="list-product-img-mobile">
                <img src={imgProduct[0]} alt="" style={{ marginLeft: "0" }} />
                {imgProduct.map((data, index) => {
                  if (index > 0) return <img src={data} alt="" />;
                })}
              </div>
              <div className="list-icons">
                <img
                  src={require("../img/eva_facebook-fill-yellow.png")}
                  alt=""
                  style={{ margin: "auto" }}
                />
                <img
                  src={require("../img/akar-icons_instagram-fill-yellow.png")}
                  alt=""
                  style={{ margin: "auto" }}
                />
                <img
                  src={require("../img/akar-icons_youtube-fill-yellow.png")}
                  alt=""
                  style={{ alignSelf: "self-start", marginLeft: "auto" }}
                />
              </div>
            </div>
            <div className="column2-detail">
              <div className="detail">
                <div className="product-name">{product.name}</div>
                <div className="row1">
                  <Rating name="read-only" value={product.star} readOnly />
                  <div className="number-of-reviews">
                    ({product.numberOfReview})
                  </div>
                  <div className="sold">Đã bán: {product.numberOfSold}</div>
                </div>
                <div className="product-price">{format(price)} VND</div>
                <div className="row2">
                  {type.length > 0 && (
                    <>
                      <div className="type">Loại:</div>
                      {type.map((data, i) => {
                        return (
                          <div className="box">
                            <input
                              className="radio-input"
                              type="radio"
                              id={"type" + i}
                              checked={check == i}
                              onChange={() => {
                                setCheck(i);
                                addPrice(data.priceAdd);
                              }}
                            />
                            <label
                              htmlFor={"type" + i}
                              className="radio-label"
                            ></label>
                            <label className="name-type" htmlFor={"type" + i}>
                              {data.typeName}
                            </label>
                          </div>
                        );
                      })}
                    </>
                  )}
                  {size.length > 0 && (
                    <>
                      <div className="type">Size:</div>
                      {size.map((data, i) => {
                        return (
                          <div className="box">
                            <input
                              className="radio-input"
                              type="radio"
                              id={"type" + i}
                              checked={check == i}
                              onChange={() => {
                                setCheck(i);
                                addPrice(data.priceAdd);
                              }}
                            />
                            <label
                              htmlFor={"type" + i}
                              className="radio-label"
                            ></label>
                            <label className="name-type" htmlFor={"type" + i}>
                              {data.sizeName}
                            </label>
                          </div>
                        );
                      })}
                    </>
                  )}
                  <div className="stock">
                    {product.numberOfRemain > 0 ? <>Còn hàng</> : <>Hết Hàng</>}
                  </div>
                </div>
                <div className="row3">
                  <div className="btn-amount-product">
                    <div
                      className="add"
                      style={{ transform: "translateY(-40%)" }}
                      onClick={() => {
                        if (amount > 1) changeAmount(-1);
                      }}
                    >
                      _
                    </div>
                    <div className="number">{amount}</div>
                    <div
                      className="add"
                      onClick={() => {
                        if (amount < product.numberOfRemain) changeAmount(1);
                      }}
                    >
                      +
                    </div>
                  </div>
                  <button
                    className="bnt-add-cart"
                    onClick={() => {
                      addCart();
                      window.alert("Thêm vào giỏ hàng thanh công!");
                      window.location = `https://fe-tram-thuy-react.vercel.app/cart`;
                      // window.location = `http://localhost:3000/cart`;
                    }}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="line"></div>
                <div className="buy-call">
                  <button className="btn-buy">MUA NGAY</button>
                  <button className="btn-call">GỌI ĐẶT HÀNG</button>
                </div>
              </div>
              <div className="icons">
                <div className="card">
                  <div className="" style={{ width: "100%", height: "76px" }}>
                    <img
                      src={require("../img/la_credit-card.png")}
                      alt=""
                      style={{
                        marginLeft: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                  <div className="title">THANH TOÁN ONLINE</div>
                  <div className="title-small">an toàn và nhanh chóng</div>
                </div>
                <div className="card">
                  <div className="" style={{ width: "100%", height: "76px" }}>
                    <img
                      src={require("../img/Group 20.png")}
                      alt=""
                      style={{
                        marginLeft: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                  <div className="title">ĐỔI TRẢ HÀNG</div>
                  <div className="title-small">30 ngày </div>
                </div>
                <div className="card">
                  <div className="" style={{ width: "100%", height: "76px" }}>
                    <img
                      src={require("../img/iconoir_delivery-truck.png")}
                      alt=""
                      style={{
                        marginLeft: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                  <div className="title">SHIP TOÀN QUỐC</div>
                  <div className="title-small">3-5 ngày</div>
                </div>
                <div className="card">
                  <div className="" style={{ width: "100%", height: "76px" }}>
                    <img
                      src={require("../img/clarity_shield-check-line.png")}
                      alt=""
                      style={{
                        marginLeft: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                  <div className="title">ĐẢM BẢO CHẤT LƯỢNG</div>
                  <div className="title-small">100% tự nhiên</div>
                </div>
              </div>
              <div className="list-icons-mobile">
                <img
                  src={require("../img/eva_facebook-fill-yellow.png")}
                  alt=""
                />
                <img
                  src={require("../img/akar-icons_instagram-fill-yellow.png")}
                  alt=""
                />
                <img
                  src={require("../img/akar-icons_youtube-fill-yellow.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="describe-product-detail-review">
        <input
          className="radio-input-title radio-input-title-describe-detail"
          type="radio"
          id="describe"
          name="radio-input-title"
        />
        <label
          htmlFor="describe"
          className="name name-describe-detail"
          id="name-describe-detail"
          style={{ marginLeft: "30%" }}
        >
          MÔ TẢ
        </label>
        <input
          className="radio-input-title radio-input-title-product-detail"
          type="radio"
          id="product-detail"
          name="radio-input-title"
        />
        <label htmlFor="product-detail" className="name name-product-detail">
          CHI TIẾT SẢN PHẨM
        </label>
        <input
          className="radio-input-title radio-input-title-review-detail"
          type="radio"
          id="review"
          name="radio-input-title"
        />
        <label htmlFor="review" className="name">
          ĐÁNH GIÁ (2)
        </label>

        <div className="describe-detail">
          <div className="question">
            <div className="">Nhang nụ Trầm Hương là gì?</div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (3).png")}
              alt=""
            />
          </div>
          <div className="line"></div>
          <div className="question-title">
            <div className="">Đặc tính của nhang trầm hương nụ?</div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (4).png")}
              alt=""
            />
          </div>
          <div
            className="line"
            style={{ width: "90%", marginLeft: "auto" }}
          ></div>
          <div className="question-title-answer">
            <p>
              Nhang trầm hương nụ là sản phẩm được sản xuất từ trầm hương; cụ
              thể là phần gỗ trầm hương sẽ được xay nhuyễn rồi tán cho thật mịn.
              Sau đó người ta sẽ kết hợp bột trầm hương cùng với những chất liệu
              hoàn toàn tự nhiên để tạo thành một hỗn hợp có độ kế dính nhất
              định. Cuối cùng các nghệ nhân sẽ tạo hình hỗn hợp này thành những
              khối nhỏ có dạng nón lá, búp sen. Nhang nụ Trầm Hương là một loại
              nhang được làm từ bột Trầm Hương và các nguyên liệu thiên nhiên
              nguyên chất khác, không sự dụng bất kì một hóa chất nào trong quá
              trình sản xuất.
            </p>

            <p>
              Loại nhang này lan tỏa hương thơm trong một không gian lớn; người
              ta thường sử dụng nhang nụ để xông nhà, xông xưởng làm việc, xông
              công ty hay xông văn phòng… Hương thơm của nhang trầm hương nụ sẽ
              khử tất cả mùi ô uế, mùi thuốc lá, mùi tanh; giúp cho không gian
              sống của bạn luôn tràn ngập hương thơm dễ chịu.
            </p>
          </div>
          <div className="line"></div>
        </div>

        <div className="product-detail">
          <div className="row">
            <div className="title">CHẤT LIỆU</div>
            <div className="detail">Trầm Hương – Charm Bạc S925</div>
          </div>
          <div className="row">
            <div className="title">NGUỒN GỐC</div>
            <div className="detail">Lào</div>
          </div>
          <div className="row">
            <div className="title">SỐ LƯỢNG HẠT</div>
            <div className="detail">17-21 hạt (Xem hướng dẫn đo size tay)</div>
          </div>
          <div className="row">
            <div className="title">TUỔI TRẦM</div>
            <div className="detail">12 – 14 năm Tích Trầm</div>
          </div>
          <div className="row">
            <div className="title">SỬ DỤNG</div>
            <div className="detail">Nữ</div>
          </div>
          <div className="more-detail" style={{ marginTop: "30px" }}>
            Quà tặng cho người thân, bạn bè, đồng nghiệp
          </div>
          <div className="more-detail">
            Mang ý nghĩa sum họp, yên vui, thịnh vượng, bình an
          </div>
        </div>

        <div className="review-detail">
          <div className="row">
            <img src={require("../img/Group 34 (1).png")} alt="" />
            <div className="number-of-reviews">(2)</div>

            {/* <input className="sent-review" type="radio" id="sent-review"/> */}

            <input
              className="checkbox-write-revie"
              type="checkbox"
              id="checkbox-write-review"
            />
            <label
              htmlFor="checkbox-write-review"
              className="nav__overplay-write-review"
            ></label>
            <div className="tab-write-review">
              <div className="product-name">NHANG TRẦM NỤ</div>
              <div className="leadership">
                Đánh giá sản phẩm từ 1 đến 5 sao và cho chúng tôi nhận xét của
                bạn về sản phẩm này. Cảm ơn!
              </div>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                style={{ marginTop: "40px", fontSize: "50px"}}
              />
              <div className="name-email">
                <input
                  type="text"
                  placeholder="Tên hiển thị"
                  style={{ width: "35%" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  style={{ width: "60%" }}
                />
              </div>
              <textarea
                className="add-write-review"
                name="Viết đánh giá"
                id=""
                cols="30"
                rows="10"
                placeholder="Viết đánh giá"
              ></textarea>

              <div className="btn-save-review">
                <input type="checkbox" name="" id="" />
                <div className="title-save-review">
                  Lưu thông tin cho bình luận sau
                </div>
                <label htmlFor="checkbox-write-review">
                  <button className="btn-close-mobile">ĐÓNG</button>
                </label>
                <label htmlFor="sent-review">
                  <button>GỬI</button>
                </label>
              </div>
            </div>
            <label className="write-review" htmlFor="checkbox-write-review">
              <img
                src={require("../img/ant-design_plus-outlined.png")}
                alt=""
              />
              Viết đánh giá
            </label>
          </div>
          <div className="row-review">
            <div className="avatar" style={{ marginTop: "15px" }}>
              <img src={require("../img/Ellipse 10 (1).png")} alt="" />
            </div>

            <div className="box">
              <img src={require("../img/Group 34 (2).png")} alt="" />
              <div className="name-date">
                <div className="name-review">Nguyen A.</div>
                <div className="date-review" style={{ color: "#ACAFC3" }}>
                  23/02/2022
                </div>
              </div>
            </div>
            <div className="content">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt vivamus feugiat sed quisque id sit ut amet, ipsum
            </div>
          </div>

          <div className="row-review">
            <div className="avatar">
              <img src={require("../img/Ellipse 10 (1).png")} alt="" />
            </div>
            <div className="box">
              <img src={require("../img/Group 34 (2).png")} alt="" />
              <div className="name-date">
                <div className="name-review">Nguyen A.</div>
                <div className="date-review" style={{ color: "#ACAFC3" }}>
                  23/02/2022
                </div>
              </div>
            </div>
            <div className="content">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt vivamus feugiat sed quisque id sit ut amet, ipsum
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#F3F4F6",
          paddingTop: "40px",
          marginTop: "60px",
          paddingBottom: "20px",
        }}
      >
        <div className="knowledge-detail-list-product">
          <div className="title">
            <h4 className="title-type-product">SẢN PHẨM LIÊN QUAN </h4>
          </div>
          <div className="line">
            <div className="line-yellow"></div>
            <div className="line-silver"></div>
          </div>

          <div className="mobile">
            <div className="owl-carousel owl-theme list-product list-product-jewels ">
              <div className="list-product-card">
                <img src={require("../img/Rectangle 43 (1).png")} alt="" />
                <div className="title-product">Nhang trầm hương</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
              <div className="list-product-card">
                <img src={require("../img/unsplash_x8zV3NNPuAk.png")} alt="" />
                <div className="title-product">Nhang trầm hương</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
              <div className="list-product-card">
                <img src={require("../img/unsplash_x8zV3NNPuAk.png")} alt="" />
                <div className="title-product">Nhang trầm hương</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
              <div className="list-product-card">
                <img src={require("../img/unsplash_x8zV3NNPuAk.png")} alt="" />
                <div className="title-product">Nhang trầm hương</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="new-product-about-us"
        style={{ height: "704px", marginTop: "0" }}
      >
        <div className="new-product-title">
          <div className="title">
            <div className="line"></div>
            <div className="title1">SẢN PHẨM TƯƠNG TỰ</div>
            <div className="line"></div>
          </div>
        </div>
        <div className="pc">
          <div className="owl-carousel owl-theme list-product list-product-product-detail">
            <div className="list-product-card">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-product">Tượng Phật tổ gỗ trầm</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
            <div className="list-product-card">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-product">Tượng Phật tổ gỗ trầm</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
            <div className="list-product-card">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-product">Tượng Phật tổ gỗ trầm</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
            <div className="list-product-card">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-product">Tượng Phật tổ gỗ trầm</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
