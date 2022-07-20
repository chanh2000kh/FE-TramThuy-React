import "../css/ListProduct.css";
import "../css/AboutUs.css";
import { Link } from "react-router-dom";
function Header() {
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
            <input className="check-1" type="checkbox" name="" id="check-1" />
            <div className="">TRẦM - NHANG</div>
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
          <div className="list-1"></div>
          <div className="line"></div>
          <li className="">TRANG SỨC</li>
          <div className="line"></div>
          <li className="">TƯỢNG</li>
          <div className="line"></div>
          <li className="">LƯ XÔNG TRẦM</li>
          <div className="line"></div>
          <li className="">HÀNG MỚI</li>
          <div className="line"></div>
          <li className="">KIẾN THỨC</li>
          <div className="line"></div>
          <li className="">LIÊN HỆ</li>
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
            />
            <img
              className="avata-user"
              src={require("../img/icons8_gender-neutral-user (1).png")}
              alt=""
              style={{ marginLeft: "40.93px" }}
            />
            <img
              className="shoping"
              src={require("../img/ant-design_shopping-outlined (1).png")}
              alt=""
            />
          </div>
          <div className="">
            <label htmlFor="nav-mobile-input">
              <img
                className="menu"
                src={require("../img/Vector-3-line.png")}
                alt=""
              />
            </label>
            <a href="/">
              <img className="logo" src={require("../img/logo-yellow.png")} alt=""/>
            </a>
            <a href="/">
              <img
                className="logo-mobile"
                src={require("../img/Mask group logo black.png")}
                alt=""
              />
            </a>
            <div className="header">
              <div className="header1">
                TRẦM - NHANG
                <ul className="sub-menu">
                  <li>Vòng tay trầm tốc vương</li>
                  <li>Vòng tay trầm tốc vương</li>
                  <li>Vòng tay trầm tốc vương</li>
                </ul>
              </div>
              <div className="header1">
                TRANG SỨC
                <ul className="sub-menu">
                  <li>Vòng tay trầm tốc vương</li>
                  <li>Vòng tay trầm tốc vương</li>
                  <li>Vòng tay trầm tốc vương</li>
                </ul>
              </div>
              <div className="header1">TƯỢNG</div>
              <div className="header1">LƯ XÔNG TRẦM</div>
              <div className="header1">HÀNG MỚI</div>
              <div className="header1">KIẾN THỨC</div>
              <div className="header1">LIÊN HỆ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="link-page-all">
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
        {/* <div class="title1" style={{margin:  "auto"}}>
            CHECK OUT
        </div> */}
      </div>
    </>
  );
}

export default Header;
