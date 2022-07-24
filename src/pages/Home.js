import "../css/Home.css";
import callApi from "../api/ApiSevice.js";
// import { Helmet } from "react-helmet";
import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import format from "../sevices/FormatPrice.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Home() {
  const [incense, setIncense] = React.useState([]);
  const [incenseNext, setIncenseNext] = React.useState(true);
  const [jewels, setJewels] = React.useState([]);
  const [jewelsNext, setJewelsNext] = React.useState(true);
  const [statue, setStatue] = React.useState([]);
  const [statueNext, setStatueNext] = React.useState(true);
  const [urn, setUrn] = React.useState([]);
  const [urnNext, setUrnNext] = React.useState(true);
  useEffect(() => {
    callApi(
      `api/product/getProductByTypeId?id=62cd7c7a0d2a3b3e78ed4438&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setIncense(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    callApi(
      `api/product/getProductByTypeId?id=62cd7b3584e523f391176a97&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setJewels(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    callApi(
      `api/product/getProductByTypeId?id=62cd7c4e0d2a3b3e78ed4434&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setStatue(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    callApi(
      `api/product/getProductByTypeId?id=62cd7cbf0d2a3b3e78ed443c&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setUrn(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <input
        className="nav__input-mobile"
        type="checkbox"
        name=""
        id="nav-mobile-input"
      />

      <div className="home-nav-mobile">
        <label htmlFor="nav-mobile-input">
          <img
            className="home-nav__close"
            src={require("../img/ci_close-big.png")}
            alt=""
          />
        </label>
        <ul className="home-nav-list-mobile">
          <li className="">
            <div className="">TRANG SỨC</div>
            <label
              htmlFor="check-1"
              style={{
                alignSelf: "self-start",
                marginLeft: "auto",
                marginRight: "10px",
              }}
            >
              <img
                src={require("../img/dashicons_arrow-left-alt2-mobile.png")}
                alt=""
              />
            </label>
          </li>
          <input className="check-1" type="checkbox" name="" id="check-1" />
          <div className="list-1">
            <a
              href="/listproduct?id=62cd7b3584e523f391176a97&tag=1"
              style={{ color: "#7C82A1" }}
            >
              <li>Vòng tay trầm tốc vương</li>
            </a>
            <a
              href="/listproduct?id=62cd7b3584e523f391176a97&tag=2"
              style={{ color: "#7C82A1" }}
            >
              <li>Vòng tay trầm sánh chìm</li>
            </a>
            <a
              href="/listproduct?id=62cd7b3584e523f391176a97&tag=3"
              style={{ color: "#7C82A1" }}
            >
              <li>Vòng trầm hương Việt Nam</li>
            </a>
            <a
              href="/listproduct?id=62cd7b3584e523f391176a97&tag=4"
              style={{ color: "#7C82A1" }}
            >
              <li>Vòng trầm hương rừng Lào</li>
            </a>
            <a
              href="/listproduct?id=62cd7b3584e523f391176a97&tag=5"
              style={{ color: "#7C82A1" }}
            >
              <li>Vòng trầm rừng cao cấp</li>
            </a>
          </div>
          <div className="line"></div>
          <li className="">
            <div className="">TRẦM - NHANG</div>
            <label
              htmlFor="check-2"
              style={{
                alignSelf: "self-start",
                marginLeft: "auto",
                marginRight: "10px",
              }}
            >
              <img
                src={require("../img/dashicons_arrow-left-alt2-mobile.png")}
                alt=""
              />
            </label>
          </li>
          <input className="check-1" type="checkbox" name="" id="check-2" />
          <div className="list-1">
            <a
              href="/listproduct?id=62cd7c7a0d2a3b3e78ed4438&tag=1"
              style={{ color: "#7C82A1" }}
            >
              <li>Nhang trầm không tăm</li>
            </a>
            <a
              href="/listproduct?id=62cd7c7a0d2a3b3e78ed4438&tag=2"
              style={{ color: "#7C82A1" }}
            >
              <li>Nhang khoanh trầm hương</li>
            </a>
            <a
              href="/listproduct?id=62cd7c7a0d2a3b3e78ed4438&tag=3"
              style={{ color: "#7C82A1" }}
            >
              <li>Nụ rầm hương</li>
            </a>
          </div>
          <div className="line"></div>
          <li className="">TƯỢNG</li>
          <div className="line"></div>
          <li className="">LƯ XÔNG TRẦM</li>
          <div className="line"></div>
          <li className="">HÀNG MỚI</li>
          <div className="line"></div>
          <li className="">KIẾN THỨC</li>
          <div className="line"></div>
          <a href="/aboutus" className="disable">
            <li className="">LIÊN HỆ</li>
          </a>
          <div className="line"></div>
          <div className="icons-mobile">
            <img
              src={require("../img/eva_facebook-fill.png")}
              alt=""
              style={{ transform: "scale(0.7)", margin: "auto" }}
            />
            <img
              src={require("../img/akar-icons_instagram-fill.png")}
              alt=""
              style={{ transform: "scale(0.7)", margin: "auto" }}
            />
            <img
              src={require("../img/akar-icons_youtube-fill.png")}
              alt=""
              style={{ transform: "scale(0.7)", margin: "auto" }}
            />
          </div>
        </ul>
      </div>
      <label htmlFor="nav-mobile-input" className="nav__overlay-mobile"></label>
      <div className="home-header--profile" style={{ display: "block" }}>
        <div className="home-header--profile__contact">
          <div className="home-header--profile--email">
            <img
              style={{ marginTop: "22px", width: "21px", height: "21px" }}
              src={require("../img/line-md_email.png")}
              alt=""
            />
            <p className="email">tramthuy@mail.com</p>
          </div>
          <div className="home-header--profile--phone">
            <img
              style={{ marginTop: "20px", width: "21px", height: "21px" }}
              src={require("../img/ant-design_phone-filled.png")}
              alt=""
            />
            <p className="phone">09xx xxx xxx - 08xx xxx xxx</p>
          </div>
        </div>
        <div className="home-header--profile__ship">
          <p>Miễn phí giao hàng TP. Hồ Chí Minh - Hà Nội</p>
        </div>
      </div>
      <div className="home-header">
        <img
          className="img-mobile"
          src={require("../img/Kungyokudo_Incense_mood-styling_ITSUMO_st.jpg")}
          alt=""
        ></img>

        <div className="home-header--data">
          <div className="cloud1">
            <img src={require("../img/Asset 5@2x 2.png")} alt="" />
          </div>
          <label htmlFor="nav-mobile-input">
            <img
              className="menu"
              src={require("../img/dashicons_menu-alt.png")}
              alt=""
            />
          </label>

          <div className="user">
            <img
              className="angle-down"
              src={require("../img/dashicons_arrow-left-alt2.png")}
              alt=""
            />
            <div
              className="trans"
              style={{ margin: "auto", marginLeft: "16.55px" }}
            >
              EN
            </div>
            <img
              className="search"
              src={require("../img/eva_search-outline.png")}
              alt=""
            />
            <img
              className="avata-user"
              src={require("../img/icons8_gender-neutral-user.png")}
              alt=""
              style={{ marginLeft: "40.93px" }}
            />
            <a href="/cart">
              <img
                className="shoping"
                src={require("../img/ant-design_shopping-outlined.png")}
                alt=""
              />
            </a>
          </div>
          <div className="">
            <img
              className="logo"
              src={require("../img/Logo Trầm Thủy op2-05 1.png")}
              alt=""
            ></img>
            <div className="header">
              <div className="header1" style={{ zIndex: 3 }}>
                <div>TRẦM - NHANG</div>
                <ul className="sub-menu">
                  <a
                    href="/listproduct?id=62cd7c7a0d2a3b3e78ed4438&tag=1"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Nhang trầm không tăm</li>
                  </a>
                  <a
                    href="/listproduct?id=62cd7c7a0d2a3b3e78ed4438&tag=2"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Nhang khoanh trầm hương</li>
                  </a>
                  <a
                    href="/listproduct?id=62cd7c7a0d2a3b3e78ed4438&tag=3"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Nụ rầm hương</li>
                  </a>
                </ul>
              </div>
              <div className="header1">
                TRANG SỨC
                <ul className="sub-menu">
                  <a
                    href="/listproduct?id=62cd7b3584e523f391176a97&tag=1"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Vòng tay trầm tốc vương</li>
                  </a>
                  <a
                    href="/listproduct?id=62cd7b3584e523f391176a97&tag=2"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Vòng tay trầm sánh chìm</li>
                  </a>
                  <a
                    href="/listproduct?id=62cd7b3584e523f391176a97&tag=3"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Vòng trầm hương Việt Nam</li>
                  </a>
                  <a
                    href="/listproduct?id=62cd7b3584e523f391176a97&tag=4"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Vòng trầm hương rừng Lào</li>
                  </a>
                  <a
                    href="/listproduct?id=62cd7b3584e523f391176a97&tag=5"
                    style={{ color: "#7C82A1" }}
                  >
                    <li>Vòng trầm rừng cao cấp</li>
                  </a>
                </ul>
              </div>
              <a
                href="/listproduct?id=62cd7c4e0d2a3b3e78ed4434"
                className="disable"
              >
                <div className="header1">TƯỢNG</div>
              </a>
              <a
                href="/listproduct?id=62cd7cbf0d2a3b3e78ed443c"
                className="disable"
              >
                <div className="header1">LƯ XÔNG TRẦM</div>
              </a>
              <div className="header1">HÀNG MỚI</div>

              <a href="/knowledge" className="disable">
                <div className="header1">KIẾN THỨC</div>
              </a>
              <a href="/aboutus" className="disable">
                <div className="header1">LIÊN HỆ</div>
              </a>
            </div>
            <div className="line"></div>
          </div>
          <div className="link-img">
            <p className="title">Nhang Trầm</p>
            <button className="btn">XEM THÊM</button>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
            <li data-target="#header-carousel" data-slide-to="3"></li>
          </ol>
          <div className="cloud2">
            <img src={require("../img/Asset 4@2x 2.png")} alt="" />
          </div>
        </div>
      </div>

      <div className="home-type-product1">
        <div className="card">
          <img
            src={require("../img/istockphoto-1237854712-612x612-removebg-preview 1.png")}
            alt=""
          />
          <h4 className="title">TRẦM - NHANG</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/303171cb0d41c7e01f1c3025d03fffe6-removebg-preview 1.png")}
            alt=""
          />
          <h4 className="title">TRANG SỨC</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/large-sitting-buddha-statue-solid-wood-carved-hand-50cm-removebg-preview 1.png")}
            alt=""
          />
          <h4 className="title">TƯỢNG</h4>
        </div>
        <div className="card">
          <img
            className="img"
            src={require("../img/S-4985-2-removebg-preview 1.png")}
            alt=""
          />
          <h4 className="title">LƯ XÔNG</h4>
        </div>
      </div>
      <div className="type-product-mobile">
        <div className="owl-carousel home-type-product2">
          <div className="card">
            <img
              src={require("../img/istockphoto-1237854712-612x612-removebg-preview 1.png")}
              alt=""
              style={{ width: "149.2px", height: "99px" }}
            />
            <h4 className="title">TRẦM - NHANG</h4>
          </div>
          <div className="card">
            <img
              src={require("../img/303171cb0d41c7e01f1c3025d03fffe6-removebg-preview 1.png")}
              alt=""
              style={{ width: "149.2px", height: "99px" }}
            />
            <h4 className="title">TRANG SỨC</h4>
          </div>
          <div className="card">
            <img
              src={require("../img/large-sitting-buddha-statue-solid-wood-carved-hand-50cm-removebg-preview 1.png")}
              alt=""
              style={{ width: "149.2px", height: "99px" }}
            />
            <h4 className="title">TƯỢNG</h4>
          </div>
          <div className="card">
            <img
              className="img"
              src={require("../img/S-4985-2-removebg-preview 1.png")}
              alt=""
              style={{ width: "149.2px", height: "99px" }}
            />
            <h4 className="title">LƯ XÔNG</h4>
          </div>
        </div>
      </div>

      <div className="home-information">
        <div className="img">
          <div className="home-information-more">
            <div className="img-cloud">
              <div className="cloud1">
                <img src={require("../img/Asset 5@2x 2.png")} alt="" />
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
              <div className="cloud2">
                <img src={require("../img/Asset 4@2x 2.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main">
        <img
          className="rim-right-silver"
          src={require("../img/Mask group.png")}
          alt=""
          style={{ float: "right", width: "10%", marginTop: "13%" }}
        />
        <img
          className="rim-left-silver"
          src={require("../img/Mask group left.png")}
          alt=""
          style={{ float: "left", width: "10%", marginTop: "13%" }}
        />
        <div className="sell-a-lot">
          <div className="title">
            <div className="line"></div>
            <div className="title1">SẢN PHẨM BÁN CHẠY</div>
            <div className="line"></div>
          </div>
          <div className="products">
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 9.png")}
                alt=""
              />
              <div className="title-product">Lư xông trầm Tây Tạng mini</div>
            </div>
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 10.png")}
                alt=""
              />
              <div className="title-product">Chuỗi hạt gỗ trầm</div>
            </div>
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 11.png")}
                alt=""
              />
              <div className="title-product">Gỗ táo nhập khẩu châu ÂU</div>
            </div>
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 12.png")}
                alt=""
              />
              <div className="title-product">Nhang thơm gỗ đàn hương</div>
            </div>
          </div>

          <div className="products1 owl-carousel">
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 9.png")}
                alt=""
              />
              <div className="title-product">Lư xông trầm Tây Tạng mini</div>
            </div>
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 10.png")}
                alt=""
              />
              <div className="title-product">Chuỗi hạt gỗ trầm</div>
            </div>
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 11.png")}
                alt=""
              />
              <div className="title-product">Gỗ táo nhập khẩu châu ÂU</div>
            </div>
            <div className="card">
              <img
                className="img"
                src={require("../img/Rectangle 12.png")}
                alt=""
              />
              <div className="title-product">Nhang thơm gỗ đàn hương</div>
            </div>
          </div>

          <div className="" style={{ width: "100%" }}>
            <button className="btn">XEM THÊM</button>
          </div>
        </div>
        <div className="new-product">
          <div className="new-product-title">
            <div className="title">
              <div className="line"></div>
              <div className="title1">HÀNG MỚI VỀ</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="owl-carousel list-new-product">
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
                <div className="">1.990.000 VND</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
                <div className="">1.990.000 VND</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
                <div className="">1.990.000 VND</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
                <div className="">1.990.000 VND</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 32.png")} alt="" />
              <div className="title-new-product">
                <div className="">Vòng tay gỗ đàn hương</div>
                <div className="">1.990.000 VND</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Gỗ táo thơm</div>
                <div className="">1.990.000 VND</div>
              </div>
            </div>
          </div>

          <div className="owl-carousel list-new-product1">
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Lư xông trầm Tây Tạng cỡ lớn</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 32.png")} alt="" />
              <div className="title-new-product">
                <div className="">Vòng tay gỗ đàn hương</div>
              </div>
            </div>
            <div className="item card">
              <img src={require("../img/Rectangle 31.png")} alt="" />
              <div className="title-new-product">
                <div className="">Gỗ táo thơm</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="rim-right-silver"
          src={require("../img/Mask group.png")}
          alt=""
          style={{ float: "right", width: "10%", marginTop: "13%" }}
        />
        <img
          className="rim-left-silver"
          src={require("../img/Mask group left.png")}
          alt=""
          style={{ float: "left", width: "10%", marginTop: "13%" }}
        />
        <div className="home-list-product">
          <div className="title">
            <h4 className="title-type-product">TRANG SỨC TRẦM HƯƠNG </h4>
            <p className="title-product-in-type-product">
              <b style={{ marginLeft: "10px" }}>/</b> Vòng tay, dây chuyền phong
              thủy gỗ trầm nguyên chất
            </p>
            <div className="btn-next-page">
              <div
                className="btn-left"
                onClick={() => setJewelsNext(!jewelsNext)}
              >
                <img
                  className="img-btn-left"
                  src={require("../img/Vector-left.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
              <div
                className="btn-right"
                onClick={() => setJewelsNext(!jewelsNext)}
              >
                <img
                  className="img-btn-right"
                  src={require("../img/Vector-right.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="line-yellow"></div>
            <div className="line-silver"></div>
          </div>

          <div className="pc">
            <div className="list-product">
              {jewels.map((data, index) => {
                if (index < 4 && jewelsNext == true)
                  return (
                    <div className="item list-product-card">
                      <a href={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </a>
                    </div>
                  );

                if (index > 3 && jewelsNext == false)
                  return (
                    <div className="item list-product-card">
                      <img src={data.img[0]} alt="" />
                      <div className="title-product">{data.name}</div>
                      <div className="price-product">
                        {format(data.price)} VND
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>

          <div className="mobile">
            <div className="list-product">
              <OwlCarousel
                items={1.4}
                className="owl-theme owl-carousel"
                loop={true}
                nav={true}
                dots={false}
                margin={5}
                navText={[
                  '<div class="home-btn-left-mobile home-btn-next-page-mobile"><img class="img-btn-left" src="./img/Vector-left.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                  '<div class="home-btn-right-mobile home-btn-next-page-mobile"><img class="img-btn-right" src="./img/Vector-right.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                ]}
              >
                {jewels.map((data) => {
                  return (
                    <a href={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </a>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>

        <div className="home-list-product" style={{ marginTop: "149px" }}>
          <div className="title">
            <h4 className="title-type-product">NHANG TRẦM HƯƠNG </h4>
            <p className="title-product-in-type-product">
              <b style={{ marginLeft: "10px" }}>/</b> Nhang trầm không tăm,
              nhang khoanh, nụ trầm hương chất lượng 100%{" "}
            </p>
            <div
              className="btn-next-page"
              onClick={() => setIncenseNext(!incenseNext)}
            >
              <div className="btn-left">
                <img
                  className="img-btn-left"
                  src={require("../img/Vector-left.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
              <div
                className="btn-right"
                onClick={() => setIncenseNext(!incenseNext)}
              >
                <img
                  className="img-btn-right"
                  src={require("../img/Vector-right.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="line-yellow"></div>
            <div className="line-silver"></div>
          </div>

          <div className="pc">
            <div className="list-product">
              {incense.map((data, i) => {
                if (i < 4 && incenseNext == true)
                  return (
                    <div className="item list-product-card">
                      <a href={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </a>
                    </div>
                  );

                if (i > 3 && incenseNext == false)
                  return (
                    <div className="list-product-card">
                      <img src={data.img[0]} alt="" />
                      <div className="title-product">{data.name}</div>
                      <div className="price-product">
                        {format(data.price)} VND
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>

          <div className="mobile">
            <div className="list-product">
              <OwlCarousel
                items={1.4}
                className="owl-theme owl-carousel"
                loop={true}
                nav={true}
                dots={false}
                margin={5}
                navText={[
                  '<div class="home-btn-left-mobile home-btn-next-page-mobile"><img class="img-btn-left" src="./img/Vector-left.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                  '<div class="home-btn-right-mobile home-btn-next-page-mobile"><img class="img-btn-right" src="./img/Vector-right.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                ]}
              >
                {incense.map((data) => {
                  return (
                    <a href={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </a>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <img
          className="rim-right-white"
          src={require("../img/Mask group white right.png")}
          alt=""
          style={{ float: "right", width: "10%", marginTop: "13%" }}
        />
        <img
          className="rim-left-white"
          src={require("../img/Mask group white left.png")}
          alt=""
          style={{ float: "left", width: "10%", marginTop: "13%" }}
        />
        <div className="home-tiltok">
          <div className="home-tiltok-title">
            <div className="title">
              <div className="line"></div>
              <img src={require("../img/TikTok.png")} alt="" />
              <div className="title1">@tramthuytramhuong</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="tiktok-list-img">
            <img src={require("../img/unsplash_XQB7WWIOXUI.png")} alt="" />
            <img src={require("../img/unsplash_XQB7WWIOXUI.png")} alt="" />
            <img src={require("../img/unsplash_XQB7WWIOXUI.png")} alt="" />
            <img src={require("../img/unsplash_XQB7WWIOXUI.png")} alt="" />
          </div>

          <div className="" style={{ width: "100%" }}>
            <button className="btn">MUA TRÊN TIKTOK</button>
          </div>
        </div>

        <div className="home-instagram">
          <div className="home-instagram-title">
            <div className="title">
              <div className="line"></div>
              <img
                style={{ marginRight: "4.75px" }}
                src={require("../img/akar-icons_instagram-fill mobile.png")}
                alt=""
              />
              <div className="title1">@tramthuy</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="instagram-list-img">
            <img src={require("../img/unsplash_XQB7WWIOXUI.png")} alt="" />
            <img src={require("../img/unsplash_XQB7WWIOXUI.png")} alt="" />
            <img src={require("../img/unsplash_XQB7WWIOXUI.png")} alt="" />
          </div>

          <div className="" style={{ width: "100%" }}>
            <button className="btn">MUA TRÊN INSTAGRAM</button>
          </div>
        </div>

        <div className="home-list-product" style={{ marginTop: "149px" }}>
          <div className="title">
            <h4 className="title-type-product">LƯ XÔNG TRẦM </h4>
            <p className="title-product-in-type-product">
              <b style={{ marginLeft: "10px" }}>/</b> Lư xông trầm bằng đồng các
              loại bảo hành 2 năm
            </p>
            <div className="btn-next-page" onClick={() => setUrnNext(!urn)}>
              <div className="btn-left">
                <img
                  className="img-btn-left"
                  src={require("../img/Vector-left.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
              <div className="btn-right" onClick={() => setUrnNext(!urn)}>
                <img
                  className="img-btn-right"
                  src={require("../img/Vector-right.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="line-yellow"></div>
            <div className="line-silver"></div>
          </div>

          <div className="pc">
            <div className="list-product">
              {urn.map((data, i) => {
                if (i < 4 && urnNext == true)
                  return (
                    <div className="item list-product-card">
                      <a href={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </a>
                    </div>
                  );

                if (i > 3 && urnNext == false)
                  return (
                    <div className="list-product-card">
                      <img src={require("../img/Rectangle 31.png")} alt="" />
                      <div className="title-product">
                        Lư xông trầm bằng đồng
                      </div>
                      <div className="price-product">1.990.000 VND</div>
                    </div>
                  );
              })}
            </div>
          </div>

          <div className="mobile">
            <div className="list-product">
              <OwlCarousel
                items={1.4}
                className="owl-theme owl-carousel"
                loop={true}
                nav={true}
                dots={false}
                margin={5}
                navText={[
                  '<div class="home-btn-left-mobile home-btn-next-page-mobile"><img class="img-btn-left" src="./img/Vector-left.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                  '<div class="home-btn-right-mobile home-btn-next-page-mobile"><img class="img-btn-right" src="./img/Vector-right.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                ]}
              >
                {urn.map((data) => {
                  return (
                    <a href={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </a>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <img
          className="rim-right-silver"
          src={require("../img/Mask group.png")}
          alt=""
          style={{ float: "right", width: "10%", marginTop: "5%" }}
        />
        <img
          className="rim-left-silver"
          src={require("../img/Mask group left.png")}
          alt=""
          style={{ float: "left", width: "10%", marginTop: "5%" }}
        />

        <div className="home-list-product" style={{ marginTop: "149px" }}>
          <div className="title">
            <h4 className="title-type-product">TƯỢNG TRẦM HƯƠNG </h4>
            <p className="title-product-in-type-product">
              <b style={{ marginLeft: "10px" }}>/</b> Tượng Phật, tượng Bồ Tát
              làm bằng gỗ trầm nguyên chất
            </p>
            <div className="btn-next-page">
              <div
                className="btn-left"
                onClick={() => setStatueNext(!statueNext)}
              >
                <img
                  className="img-btn-left"
                  src={require("../img/Vector-left.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
              <div
                className="btn-right"
                onClick={() => setStatueNext((prev) => !prev)}
              >
                <img
                  className="img-btn-right"
                  src={require("../img/Vector-right.png")}
                  alt=""
                  style={{ margin: "auto", padding: "7px", display: "block" }}
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="line-yellow"></div>
            <div className="line-silver"></div>
          </div>

          <div className="pc">
            <div className="list-product">
              {statue.map((data, index) => {
                if (index < 4 && statueNext == true)
                  return (
                    <div className="item list-product-card">
                      <a href={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </a>
                    </div>
                  );

                if (index > 3 && statueNext == false)
                  return (
                    <div className="list-product-card">
                      <img src={data.img[0]} alt="" />
                      <div className="title-product">{data.name}</div>
                      <div className="price-product">
                        {format(data.price)} VND
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>

          <div className="mobile">
            <div className="list-product">
              <OwlCarousel
                items={1.4}
                className="owl-theme owl-carousel"
                loop={true}
                nav={true}
                dots={false}
                margin={5}
                navText={[
                  '<div class="home-btn-left-mobile home-btn-next-page-mobile"><img class="img-btn-left" src="./img/Vector-left.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                  '<div class="home-btn-right-mobile home-btn-next-page-mobile"><img class="img-btn-right" src="./img/Vector-right.png" alt="" style="margin: auto; padding: 7px; display: block;"></div>',
                ]}
              >
                {statue.map((data) => {
                  return (
                    <a href={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </a>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>

        <img
          className="rim-right-silver"
          src={require("../img/Mask group.png")}
          alt=""
          style={{ float: "right", width: "10%", marginTop: "13%" }}
        />
        <img
          className="rim-left-silver"
          src={require("../img/Mask group left.png")}
          alt=""
          style={{ float: "left", width: "10%", marginTop: "13%" }}
        />

        <div
          className="sell-a-lot home-main-product"
          style={{ marginTop: "198px" }}
        >
          <div className="title">
            <div className="line"></div>
            <div className="title2">MẶT HÀNG CHÍNH</div>
            <div className="line"></div>
          </div>
          <div className="home-type-product">
            <div className="card">
              <img
                src={require("../img/istockphoto-1237854712-612x612-removebg-preview 1.png")}
                alt=""
              />
              <h4 className="title">TRẦM - NHANG</h4>
            </div>
            <div className="card">
              <img
                src={require("../img/303171cb0d41c7e01f1c3025d03fffe6-removebg-preview 1.png")}
                alt=""
              />
              <h4 className="title">TRANG SỨC</h4>
            </div>
            <div className="card">
              <img
                src={require("../img/large-sitting-buddha-statue-solid-wood-carved-hand-50cm-removebg-preview 1.png")}
                alt=""
              />
              <h4 className="title">TƯỢNG</h4>
            </div>
            <div className="card">
              <img
                className="img"
                src={require("../img/S-4985-2-removebg-preview 1.png")}
                alt=""
              />
              <h4 className="title">LƯ XÔNG</h4>
            </div>
          </div>
        </div>

        <div className="sell-a-lot" style={{ marginTop: "270px" }}>
          <div className="title">
            <div className="line line-comment-about-us"></div>
            <div className="title2">PHẢN HỒI KHÁCH HÀNG</div>
            <div className="line line-comment-about-us"></div>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-gallery-container">
            <div
              className="home-gallery-item home-gallery-item-1"
              data-index="1"
            >
              <img
                className="img-user"
                src={require("../img/Ellipse 10 (1).png")}
                alt=""
              />
              <div className="name-user">Nguyễn Văn A</div>
              <div className="stars">
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector (1).png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
              </div>
              <div className="comment-user">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt vivamus feugiat sed quisque id sit ut amet, ipsum
              </div>
              <div className="line-comment"></div>
            </div>
            <div
              className="home-gallery-item home-gallery-item-2"
              data-index="2"
            >
              <img
                className="img-user"
                src={require("../img/Ellipse 10.png")}
                alt=""
              />
              <div className="name-user">Nguyễn Văn A</div>
              <div className="stars">
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector (1).png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
              </div>
              <div className="comment-user">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt vivamus feugiat sed quisque id sit ut amet, ipsum
              </div>
              <div className="line-comment"></div>
            </div>
            <div
              className="home-gallery-item home-gallery-item-3"
              data-index="3"
            >
              <img
                className="img-user"
                src={require("../img/Ellipse 10 (2).png")}
                alt=""
              />
              <div className="name-user">Nguyễn Văn A</div>
              <div className="stars">
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector.png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
                <img
                  className="img-star"
                  src={require("../img/Vector (1).png")}
                  alt=""
                  style={{ marginTop: "0" }}
                />
              </div>
              <div className="comment-user">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt vivamus feugiat sed quisque id sit ut amet, ipsum
              </div>
              <div className="line-comment"></div>
            </div>
          </div>
        </div>
        <div className="home-gallery-btn-next-page">
          <div className="home-gallery-btn-left">
            <img
              className="img-btn-left"
              src={require("../img/Vector-left.png")}
              alt=""
              style={{ margin: "auto", padding: "7px", display: "block" }}
            />
          </div>
          <div className="home-gallery-btn-right">
            <img
              className="img-btn-right"
              src={require("../img/Vector-right.png")}
              alt=""
              style={{ margin: "auto", padding: "7px", display: "block" }}
            />
          </div>
        </div>

        <div className="home-about-us">
          <div className="information-about-us">
            <img
              className="img-logo-about-us-mobile"
              src={require("../img/Mask group about us.png")}
              alt=""
            />
            <img
              className="img-about-us1"
              src={require("../img/Mask group (1).png")}
              alt=""
            />
            <a href="/aboutus">
              <img
                className="img-about-us2"
                src={require("../img/Asset 4@2x 1.png")}
                alt=""
              />
            </a>
            <img
              className="img-about-us4"
              src={require("../img/Asset 5@2x 1.png")}
              alt=""
            />
            <div className="title-about-us">Về Chúng Tôi</div>
            <p className="detailed-information">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              malesuada enim sagittis molestie sed. Ut odio massa eu faucibus
              faucibus purus. Cras vitae convallis amet id venenatis id velit.
              Felis, ipsum consectetur amet mattis massa. Nunc feugiat nunc
              massa diam. Morbi vel ipsum amet tincidunt nascetur metus, in.
            </p>
            <a href="/aboutus">
              <button className="btn-about-us">KHÁM PHÁ</button>
            </a>
            <img
              className="img-about-us3"
              src={require("../img/Mask group (2).png")}
              alt=""
            />
          </div>
          <div className="home-video-about-us">
            <video
              className="home-video-about-us-size"
              preload="auto"
              autoPlay
              loop
            >
              <source
                src="http://www.adrianparr.com/download/keyboard-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <img
          className="rim-right-silver"
          src={require("../img/Mask group.png")}
          alt=""
          style={{ float: "right", width: "10%", marginTop: "13%" }}
        />
        <img
          className="rim-left-silver"
          src={require("../img/Mask group left.png")}
          alt=""
          style={{ float: "left", width: "10%", marginTop: "13%" }}
        />
        <div className="sell-a-lot" style={{ marginTop: "183px" }}>
          <div className="title">
            <div className="line"></div>
            <div className="title2">KIẾN THỨC TRẦM THỦY</div>
            <div className="line"></div>
          </div>
        </div>
        <div className="pc">
          <div className="home-knowledge-for-product">
            <div className="card-knowledge">
              <img src={require("../img/unsplash_UzDimV2GzFA.png")} alt="" />
              <div className="title-knowledge">
                Cách nhận biết giá trị và chất lượng của trầm hương
              </div>
            </div>
            <div className="card-knowledge">
              <img src={require("../img/unsplash_p4Cq-2phCTg.png")} alt="" />
              <div className="title-knowledge">
                Kiến thức cho người mới tìm hiểu trầm hương
              </div>
            </div>
            <div className="card-knowledge">
              <img src={require("../img/unsplash_IoKbN6Nghk4.png")} alt="" />
              <div className="title-knowledge">
                Ý nghĩ phong thủy của khói thác trầm hương là gì?
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div className="owl-carousel home-knowledge-for-product home-knowledge-for-product-mobile">
            <div className="card-knowledge">
              <img src={require("../img/unsplash_UzDimV2GzFA.png")} alt="" />
              <div className="title-knowledge">
                Cách nhận biết giá trị và chất lượng của trầm hương
              </div>
            </div>
            <div className="card-knowledge">
              <img src={require("../img/unsplash_p4Cq-2phCTg.png")} alt="" />
              <div className="title-knowledge">
                Kiến thức cho người mới tìm hiểu trầm hương
              </div>
            </div>
            <div className="card-knowledge">
              <img src={require("../img/unsplash_IoKbN6Nghk4.png")} alt="" />
              <div className="title-knowledge">
                Ý nghĩ phong thủy của khói thác trầm hương là gì?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
