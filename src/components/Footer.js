import "../css/Home.css";
import callApi from "../api/ApiSevice.js";
import React from "react";
import { useState, useEffect } from "react";
function Footer() {
  const [registerByEmail, setRegisterByEmail] = React.useState("");

  const registerByEmailOnly = () => {
    if (registerByEmail != "") {
      const data = {
        email: registerByEmail,
      };
      callApi(`api/user/registerbyemail`, "POST", data)
        .then((res) => {
          window.alert("Mật khẩu tài khoản đã được gửi đến Email của bạn!");
          setRegisterByEmail("");
        })
        .catch((err) => {
          window.alert("Đăng ký thất bại!");
          console.log(err);
        });
    } else {
      window.alert("Vui lòng nhập đầy đủ email!");
    }
  };
  return (
    <div className="home-footer">
      <div className="home-footer-information">
        <div className="home-footer-information-column1">
          <img src={require("../img/Logo Trầm Thủy op2-05 1.png")} alt="" />
          <p className="home-footer-information-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nullam
            ullamcorper cursus amet risus eros. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quam nullam ullamcorper cursus amet
            risus eros. Vitae venenatis eget nunc sagittis quis facilisis sit.
            Sapien ipsum et pretium id vel suspendisse. Habitasse amet ac
            scelerisque condimentum sit lorem amet. Vitae venenatis eget nunc
            sagittis{" "}
          </p>
          <div className="home-footer-information-phone">
            Phone: 09xx xxx xxx - 08xx xxx xxx
          </div>
          <div className="home-footer-information-email">
            Email: tramthuy@gmail.com
          </div>
          <div className="home-footer-information-icons-social-network">
            <img src={require("../img/eva_facebook-fill.png")} alt="" />
            <img src={require("../img/akar-icons_instagram-fill.png")} alt="" />
            <img src={require("../img/akar-icons_youtube-fill.png")} alt="" />
          </div>
          <div className="import-email">
            <input
              onChange={(event) => setRegisterByEmail(event.target.value)}
              className="input-email"
              type="email"
              placeholder="Email"
              value={registerByEmail}
            />
            <button onClick={registerByEmailOnly} className="btn-email">
              Đăng ký
            </button>
          </div>
          <div className="home-footer-information-register">
            Đăng ký để nhận thông tin khuyến mãi mới nhất!
          </div>
        </div>
        <div className="home-footer-information-column2">
          <div className="title">SẢN PHẨM</div>
          <div className="extra" style={{ marginTop: "45px" }}>
            Nhang trầm hương
          </div>
          <div className="extra">Tượng trầm</div>
          <div className="extra">Vòng tay trầm hương</div>
          <div className="extra">Lư xông trầm</div>
          <div className="visa">
            <img src={require("../img/Components---Sprint-3.png")} alt="" />
            <img src={require("../img/Visa Inc. Logo.png")} alt="" />
          </div>
          <img
            src={require("../img/image 1.png")}
            alt=""
            style={{ marginTop: "256px", marginLeft: "20px" }}
          />
        </div>
        <div className="home-footer-information-column2">
          <div className="title">CỬA HÀNG</div>
          <div className="extra" style={{ marginTop: "45px" }}>
            Chi nhánh HCM
          </div>
          <div className="extra">Chi nhánh Huế</div>
        </div>
        <div className="home-footer-information-column2">
          <div className="title">CHÍNH SÁCH</div>
          <div className="extra" style={{ marginTop: "45px" }}>
            Chính sách bảo mật
          </div>
          <div className="extra">Điều khoản dịch vụ</div>
          <div className="extra">Chính sách bảo hành</div>
          <div className="extra">Chính sách vận chuyển</div>
          <div className="extra">Chính sách đổi trả</div>
        </div>
        <div className="home-footer-information-column2">
          <div className="title">VỀ CHÚNG TÔI</div>
          <div className="extra" style={{ marginTop: "45px" }}>
            Thông tin công ty
          </div>
          <div className="extra">FAQs</div>
        </div>
        <img className="logo-big" src={require("../img/LogoBig.png")} alt="" />
        <div className="home-footer-information-column1-mobile">
          <img
            className="logo-mobile"
            src={require("../img/Logo Trầm Thủy op2-05 1.png")}
            alt=""
          />
          <div
            className="title-phone-email-mobile"
            style={{ paddingTop: "26px" }}
          >
            Phone: 09xx xxx xxx - 08xx xxx xxx
          </div>
          <div className="title-phone-email-mobile">
            Email: tramthuy@gmail.com
          </div>
          <div className="paragraph-mobile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nullam
            ullamcorper cursus amet risus eros. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quam nullam ullamcorper cursus amet
            risus eros. Vitae venenatis eget nunc sagittis quis facilisis sit.
            Sapien ipsum et pretium id vel suspendisse. Habitasse amet ac
            scelerisque condimentum sit lorem amet. Vitae venenatis eget nunc
            sagittis
          </div>
        </div>
        <div className="home-footer-information-column2-mobile">
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

          <img
            src={require("../img/image 1.png")}
            alt=""
            style={{
              width: "96px",
              height: "36.38px",
              alignSelf: "self-start",
              marginLeft: "auto",
            }}
          />
        </div>
        <div className="home-footer-information-column3-mobile">
          <div className="products">
            <div className="title-products">
              <div className="title">SẢN PHẨM</div>
              <label
                htmlFor="check-listproducts1"
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
            </div>
            <input
              className="check-listproducts"
              type="checkbox"
              name=""
              id="check-listproducts1"
            />
            <div className="footer-list-products-mobile">
              <li>Nhang trầm hương</li>
              <li>Tượng trầm</li>
              <li>Vòng tay trầm hương</li>
              <li>Lư xông trầm</li>
            </div>
            <div className="line-fooder-mobile"></div>
          </div>

          <div className="shops" style={{ marginTop: "13px" }}>
            <div className="title-shops">
              <div className="title">CỬA HÀNG</div>
              <label
                htmlFor="check-listproducts2"
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
            </div>
            <input
              className="check-listproducts"
              type="checkbox"
              name=""
              id="check-listproducts2"
            />
            <div className="footer-list-products-mobile">
              <li>Chi nhánh HCM</li>
              <li>Chi nhánh Huế</li>
            </div>
            <div className="line-fooder-mobile"></div>
          </div>

          <div className="laws" style={{ marginTop: "13px" }}>
            <div className="title-laws">
              <div className="title">CHÍNH SÁCH</div>
              <label
                htmlFor="check-listproducts3"
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
            </div>
            <input
              className="check-listproducts"
              type="checkbox"
              name=""
              id="check-listproducts3"
            />
            <div className="footer-list-products-mobile">
              <li>Chính sách bảo mật</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách đổi trả</li>
            </div>
            <div className="line-fooder-mobile"></div>
          </div>

          <div className="about-us" style={{ marginTop: "13px" }}>
            <div className="title-about-us">
              <div className="title">VỀ CHÚNG TÔI</div>
              <label
                htmlFor="check-listproducts4"
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
            </div>
            <input
              className="check-listproducts"
              type="checkbox"
              name=""
              id="check-listproducts4"
            />
            <div className="footer-list-products-mobile">
              <li>Thông tin công ty</li>
              <li>FAQs</li>
            </div>
          </div>

          <div className="import-email">
            <input
              onChange={(event) => setRegisterByEmail(event.target.value)}
              className="input-email"
              type="email"
              placeholder="Email"
              value={registerByEmail}
            />
            <button onClick={registerByEmailOnly} className="btn-email">
              Đăng ký
            </button>
          </div>
          <div className="home-footer-information-register">
            Đăng ký để nhận thông tin khuyến mãi mới nhất!
          </div>
        </div>
      </div>
      <div className="home-footer-black">
        <div className="home-footer-black-information">
          2022 Tramthuy &ensp; | &ensp; All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
