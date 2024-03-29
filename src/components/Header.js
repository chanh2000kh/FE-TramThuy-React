import "../css/ListProduct.css";
import "../css/AboutUs.css";
import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import callApi from "../api/ApiSevice.js";
import SearchIcon from "@mui/icons-material/Search";
import format from "../sevices/FormatPrice.js";
function Header(body) {
  const [valueSeach, setValueSeach] = React.useState("");
  const [seach, setSeach] = React.useState(false);
  const [listProduct, setListProduct] = React.useState([]);
  useEffect(() => {
    if (valueSeach != "")
      callApi(
        `api/product/searchProduct?limit=5&skip=1&name=${valueSeach}`,
        "GET"
      )
        .then((res) => {
          setListProduct(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    else setListProduct([]);
  }, [valueSeach]);
  // const myref = useRef(null);
  useEffect(() => {
    // 👇️ use a ref (best)
    // const el2 = myref.current;
    // console.log(el2);

    // 👇️ use document.getElementById()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    switch (body.id) {
      case 0:
        {
          const log = document.getElementById("headerincense");
          log.style.borderBottom = "3px solid #000000";
        }
        break;
      case 1:
        {
          const log = document.getElementById("headerjewels");
          log.style.borderBottom = "3px solid #000000";
        }
        break;
      case 2:
        {
          const log = document.getElementById("headerstatue");
          log.style.borderBottom = "3px solid #000000";
        }
        break;
      case 3:
        {
          const log = document.getElementById("headerurn");
          log.style.borderBottom = "3px solid #000000";
        }
        break;
      case 4:
        {
          const log = document.getElementById("headerknowledge");
          log.style.borderBottom = "3px solid #000000";
        }
        break;
      case 5:
        {
          const log = document.getElementById("headeraboutus");
          log.style.borderBottom = "3px solid #000000";
        }
        break;
      case 7: {
        const log = document.getElementById("listproductnew");
        log.style.borderBottom = "3px solid #000000";
      }
    }
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
          <a
            href="/listproduct?id=62cd7c4e0d2a3b3e78ed4434"
            className="disable"
          >
            <li className="">TƯỢNG</li>
          </a>
          <div className="line"></div>
          <a
            href="/listproduct?id=62cd7cbf0d2a3b3e78ed443c"
            className="disable"
          >
            <li className="">LƯ XÔNG TRẦM</li>
          </a>
          <div className="line"></div>
          <Link to="/listproductnew" className="disable">
            <li className="">HÀNG MỚI</li>
          </Link>
          <div className="line"></div>
          <Link to="/knowledge" className="disable">
            <li className="">KIẾN THỨC</li>
          </Link>
          <div className="line"></div>
          <Link to="/aboutus" className="disable">
            <li className="">LIÊN HỆ</li>
          </Link>
          <div className="line"></div>
          <div className="icons-mobile">
            <img
              src={require("../img/eva_facebook-fill.png")}
              alt=""
              style={{ transform: "scale(0.7)", margin: "auto" }}
            />
            <img
              src={require("../img/akar-icons_instagram-fill.png")}
              style={{ transform: "scale(0.7)", margin: "auto" }}
              alt=""
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
      <div className="home-header--profile">
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
              style={{ marginTop: "22px", width: "21px", height: "21px" }}
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
      <div className="header-all">
        <div className="header-all--data">
          <div className="user">
            <div
              className="trans"
              style={{ margin: "auto", marginLeft: "16.55px" }}
            >
              EN
            </div>
            <img
              className="search"
              src={require("../img/eva_search-outline-black.png")}
              alt=""
              onClick={() => setSeach(!seach)}
            />

            <img
              className="avata-user"
              src={require("../img/icons8_gender-neutral-user (1).png")}
              alt=""
              style={{ marginLeft: "40.93px" }}
            />
            <Link to="/cart">
              <img
                className="shoping"
                src={require("../img/ant-design_shopping-outlined (1).png")}
                alt=""
              />
            </Link>
          </div>
          {seach == true && (
            <div className="search_result">
              <FormControl variant="standard" style={{ width: "100%" }}>
                <Input
                  value={valueSeach}
                  onChange={(event) => {
                    setValueSeach(event.target.value);
                  }}
                  placeholder="Search"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setValueSeach("");
                        }}
                      >
                        {valueSeach != "" && <CloseIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setValueSeach("");
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <ul>
                {listProduct.map((data) => {
                  return (
                    <a href={"/productdetail?id=" + data._id}>
                      <li>
                        <img src={data.img[0]} alt="" />
                        <div className="list-product-seach-detail">
                          <div className="name">{data.name}</div>
                          <div className="price">{format(data.price)} VND</div>
                        </div>
                      </li>
                    </a>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="">
            <label htmlFor="nav-mobile-input">
              <img
                className="menu"
                src={require("../img/Vector-3-line.png")}
                alt=""
              />
            </label>

            <div style={{ width: "211px", margin: "auto" }}>
              <Link to="/">
                <img
                  className="logo"
                  src={require("../img/logo-yellow.png")}
                  alt=""
                ></img>
              </Link>
            </div>

            <div style={{ width: "30%", margin: "auto" }}>
              <Link to="/">
                <img
                  className="logo-mobile"
                  src={require("../img/Mask group logo black.png")}
                  alt=""
                />
              </Link>
            </div>

            <div className="header">
              <div className="header1" id="headerincense">
                TRẦM - NHANG
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
              <div className="header1" id="headerjewels">
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
                style={{ color: "#000000", margin: "auto" }}
              >
                <div className="header1" id="headerstatue">
                  TƯỢNG
                </div>
              </a>
              <a
                href="/listproduct?id=62cd7cbf0d2a3b3e78ed443c"
                style={{ color: "#000000", margin: "auto" }}
              >
                <div className="header1" id="headerurn">
                  LƯ XÔNG TRẦM
                </div>
              </a>
              <Link
                to="/listproductnew"
                style={{ color: "#000000", margin: "auto" }}
              >
                <div className="header1" id="listproductnew">
                  HÀNG MỚI
                </div>
              </Link>
              <Link
                to="/knowledge"
                style={{ color: "#000000", margin: "auto" }}
              >
                <div className="header1" id="headerknowledge">
                  KIẾN THỨC
                </div>
              </Link>

              <Link to="/aboutus" style={{ color: "#000000", margin: "auto" }}>
                <div className="header1" id="headeraboutus">
                  LIÊN HỆ
                </div>
                {/* <div className="header1" id="header201" ref={myref}>LIÊN HỆ</div> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="link-page-all">
        {body.id == 0 && (
          <>
            <div className="title" style={{ marginLeft: "10%" }}>
              Trang chủ
            </div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (1).png")}
              alt=""
              style={{ width: "17px", height: "17px", marginLeft: "12px" }}
            />
            <div className="title" style={{ marginLeft: "12px" }}>
              Trầm-Nhang
            </div>
          </>
        )}
        {body.id == 1 && (
          <>
            <div className="title" style={{ marginLeft: "10%" }}>
              Trang chủ
            </div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (1).png")}
              alt=""
              style={{ width: "17px", height: "17px", marginLeft: "12px" }}
            />
            <div className="title" style={{ marginLeft: "12px" }}>
              Trang sức
            </div>
          </>
        )}
        {body.id == 2 && (
          <>
            <div className="title" style={{ marginLeft: "10%" }}>
              Trang chủ
            </div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (1).png")}
              alt=""
              style={{ width: "17px", height: "17px", marginLeft: "12px" }}
            />
            <div className="title" style={{ marginLeft: "12px" }}>
              Tượng
            </div>
          </>
        )}
        {body.id == 3 && (
          <>
            <div className="title" style={{ marginLeft: "10%" }}>
              Trang chủ
            </div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (1).png")}
              alt=""
              style={{ width: "17px", height: "17px", marginLeft: "12px" }}
            />
            <div className="title" style={{ marginLeft: "12px" }}>
              Lư xông trầm
            </div>
          </>
        )}
        {body.id == 4 && (
          <>
            <div className="title" style={{ marginLeft: "10%" }}>
              Trang chủ
            </div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (1).png")}
              alt=""
              style={{ width: "17px", height: "17px", marginLeft: "12px" }}
            />
            <div className="title" style={{ marginLeft: "12px" }}>
              Kiến thức
            </div>
          </>
        )}
        {body.id == 5 && (
          <>
            <div className="title" style={{ marginLeft: "10%" }}>
              Trang chủ
            </div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (1).png")}
              alt=""
              style={{ width: "17px", height: "17px", marginLeft: "12px" }}
            />
            <div className="title" style={{ marginLeft: "12px" }}>
              Liên hệ
            </div>
          </>
        )}
        {body.id == 6 && (
          <div class="title1" style={{ margin: "auto" }}>
            CHECK OUT
          </div>
        )}
        {body.id == 7 && (
          <>
            <div className="title" style={{ marginLeft: "10%" }}>
              Trang chủ
            </div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (1).png")}
              alt=""
              style={{ width: "17px", height: "17px", marginLeft: "12px" }}
            />
            <div className="title" style={{ marginLeft: "12px" }}>
              Hàng mới
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Header;
