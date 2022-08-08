import "../css/Home.css";
import callApi from "../api/ApiSevice.js";
// import { Helmet } from "react-helmet";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import format from "../sevices/FormatPrice.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Rating from "@mui/material/Rating";
import { FlashOnRounded } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
function Home() {
  const [incense, setIncense] = React.useState([]);
  const [incenseNext, setIncenseNext] = React.useState(true);
  const [jewels, setJewels] = React.useState([]);
  const [jewelsNext, setJewelsNext] = React.useState(true);
  const [statue, setStatue] = React.useState([]);
  const [statueNext, setStatueNext] = React.useState(true);
  const [urn, setUrn] = React.useState([]);
  const [urnNext, setUrnNext] = React.useState(true);
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

  const [listProductBestSold, setListProductBestSold] = React.useState([]);
  const loadListProductBestSold = () => {
    callApi(`api/product/getProductBestSell?limit=4&skip=1&increase=-1`, "GET")
      .then((res) => {
        setListProductBestSold(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [listKnowledge, setListKnowledge] = React.useState([]);
  const LoadListKnowledge = () => {
    callApi(`api/knowledge/getKnowledgeAll?limit=3&skip=1`, "GET")
      .then((res) => {
        setListKnowledge(res.data.data.knowledge);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
  const [listReviewNew, setListReviewNew] = React.useState([]);
  const loadListReviewNew = () => {
    callApi(`api/review/getAllReviewNew?limit=3&skip=1`, "GET")
      .then((res) => {
        setListReviewNew(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    callApi(
      `api/product/getProductByTypeId?id=62cd7c7a0d2a3b3e78ed4438&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setIncense(res.data.data.product);
      })
      .catch((err) => {
        console.log(err);
      });

    callApi(
      `api/product/getProductByTypeId?id=62cd7b3584e523f391176a97&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setJewels(res.data.data.product);
      })
      .catch((err) => {
        console.log(err);
      });

    callApi(
      `api/product/getProductByTypeId?id=62cd7c4e0d2a3b3e78ed4434&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setStatue(res.data.data.product);
      })
      .catch((err) => {
        console.log(err);
      });

    callApi(
      `api/product/getProductByTypeId?id=62cd7cbf0d2a3b3e78ed443c&limit=8&skip=1&min=0&max=10000000`,
      "GET"
    )
      .then((res) => {
        setUrn(res.data.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
    loadListProductBestSold();
    LoadListKnowledge();
    loadListProductNew();
    loadListReviewNew();
  }, []);
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const nextReview = (i) => {
    var listHomeGallery = document.querySelectorAll(".home-gallery-item");
    //remove home-gallery-item-1,2,3
    listHomeGallery.forEach((item) => {
      item.classList.remove("home-gallery-item-1");
      item.classList.remove("home-gallery-item-2");
      item.classList.remove("home-gallery-item-3");
    });
    if (i > 0 && i < listHomeGallery.length - 1) {
      //add home-gallery-item-1,2,3
      listHomeGallery[i - 1].classList.add("home-gallery-item-1");
      listHomeGallery[i].classList.add("home-gallery-item-2");
      listHomeGallery[i + 1].classList.add("home-gallery-item-3");
    }
    if (i == 0) {
      //add home-gallery-item-1,2,3
      listHomeGallery[listHomeGallery.length - 1].classList.add(
        "home-gallery-item-1"
      );
      listHomeGallery[i].classList.add("home-gallery-item-2");
      listHomeGallery[i + 1].classList.add("home-gallery-item-3");
    }
    if (i == listHomeGallery.length - 1) {
      //add home-gallery-item-1,2,3
      listHomeGallery[i - 1].classList.add("home-gallery-item-1");
      listHomeGallery[i].classList.add("home-gallery-item-2");
      listHomeGallery[0].classList.add("home-gallery-item-3");
    }
  };
  const changeImg = (i, imgLink) => {
    const img = document.getElementById("img-mobile"),
      listBtn = document.querySelectorAll(".header-carousel"),
      titleChange = document.getElementById("title-change");
    listBtn.forEach((item) => {
      item.classList.remove("active");
    });
    const arrayTitle = ["Trầm Nhang", "Trang Sức", "Tượng", "Lư Xông Trầm"]
    listBtn[i].classList.add("active");
    titleChange.innerHTML = `${arrayTitle[i]}`
  };
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
          id="img-mobile"
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
              onClick={() => setSeach(!seach)}
            />
            <img
              className="avata-user"
              src={require("../img/icons8_gender-neutral-user.png")}
              alt=""
              style={{ marginLeft: "40.93px" }}
            />
            <Link to="/cart">
              <img
                className="shoping"
                src={require("../img/ant-design_shopping-outlined.png")}
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
                    <Link to={"/productdetail?id=" + data._id}>
                      <li>
                        <img src={data.img[0]} alt="" />
                        <div className="list-product-seach-detail">
                          <div className="name">{data.name}</div>
                          <div className="price">{format(data.price)} VND</div>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
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
              <Link to="/listproductnew" className="disable">
                <div className="header1">HÀNG MỚI</div>
              </Link>

              <Link to="/knowledge" className="disable">
                <div className="header1">KIẾN THỨC</div>
              </Link>
              <Link to="/aboutus" className="disable">
                <div className="header1">LIÊN HỆ</div>
              </Link>
            </div>
            <div className="line"></div>
          </div>
          <div className="link-img">
            <p className="title" id="title-change">Nhang Trầm</p>
            <button className="btn">XEM THÊM</button>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="header-carousel active"
              onClick={()=>changeImg(0) }
            ></li>
            <li
              className="header-carousel"
              data-target="#header-carousel"
              data-slide-to="1"
              onClick={()=>changeImg(1) }
            ></li>
            <li
              className="header-carousel"
              data-target="#header-carousel"
              data-slide-to="2"
              onClick={()=>changeImg(2) }
            ></li>
            <li
              className="header-carousel"
              data-target="#header-carousel"
              data-slide-to="3"
              onClick={()=>changeImg(3) }
            ></li>
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
        <div className="home-type-product2">
          <OwlCarousel
            className="owl-theme owl-carousel"
            loop={true}
            margin={0}
            items={1.2}
            center={false}
            dots={false}
          >
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
          </OwlCarousel>
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
            {listProductBestSold.map((data) => {
              return (
                <div className="card">
                  <Link to={"/productdetail?id=" + data._id}>
                    <img className="img" src={data.img[0]} alt="" />
                    <div className="title-product">{data.name}</div>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="products1">
            <OwlCarousel
              className="owl-theme owl-carousel"
              center={true}
              loop={true}
              margin={20}
              items={1.4}
              autoplayTimeout={1500}
              dots={false}
            >
              {listProductBestSold.map((data) => {
                return (
                  <div className="card">
                    <Link to={"/productdetail?id=" + data._id}>
                      <img className="img" src={data.img[0]} alt="" />
                      <div className="title-product">{data.name}</div>
                    </Link>
                  </div>
                );
              })}
            </OwlCarousel>
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
          <div className="list-new-product">
            <OwlCarousel
              className="owl-theme owl-carousel"
              center={true}
              items={4}
              loop={true}
              margin={10}
              autoplay={true}
              autoplayTimeout={1500}
              dots={false}
            >
              {listProductNew.map((data) => {
                return (
                  <div className="card">
                    <Link to={"/productdetail?id=" + data._id}>
                      <img src={data.img[0]} alt="" />
                      <div className="title-new-product">
                        <div className="">{data.name}</div>
                        <div className="">{format(data.price)} VND</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>

          <div className="list-new-product1">
            <OwlCarousel
              className="owl-theme owl-carousel"
              center={true}
              loop={true}
              margin={20}
              items={1.4}
              autoplay={true}
              autoplayTimeout={1500}
              dots={false}
            >
              {listProductNew.map((data) => {
                return (
                  <div className="card">
                    <Link to={"/productdetail?id=" + data._id}>
                      <img src={data.img[0]} alt="" />
                      <div className="title-new-product">
                        <div className="">{data.name}</div>
                        <div className="">{format(data.price)} VND</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </OwlCarousel>
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
                    <div className="list-product-card">
                      <Link to={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </Link>
                    </div>
                  );

                if (index > 3 && jewelsNext == false)
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
                {jewels.map((data) => {
                  return (
                    <Link to={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </Link>
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
                    <div className="list-product-card">
                      <Link to={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </Link>
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
                    <Link to={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </Link>
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
                    <div className="list-product-card">
                      <Link to={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </Link>
                    </div>
                  );

                if (i > 3 && urnNext == false)
                  return (
                    <div className="list-product-card">
                      <Link to={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </Link>
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
                    <Link to={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </Link>
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
                    <div className="list-product-card">
                      <Link to={"/productdetail?id=" + data._id}>
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </Link>
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
                    <Link to={"/productdetail?id=" + data._id}>
                      <div className="list-product-card">
                        <img src={data.img[0]} alt="" />
                        <div className="title-product">{data.name}</div>
                        <div className="price-product">
                          {format(data.price)} VND
                        </div>
                      </div>
                    </Link>
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
            {listReviewNew.map((data, i) => {
              return (
                <div
                  className={`home-gallery-item home-gallery-item-${i + 1}`}
                  data-index={i + 1}
                  style={{ background: `url(${data.productList[0].img[0]})` }}
                >
                  <img className="img-user" src={data.img} alt="" />
                  <div className="name-user">{data.name}</div>
                  <div className="stars">
                    <Rating
                      name="read-only"
                      value={data.star}
                      readOnly
                      style={{ color: "#FFFFFF" }}
                    />
                  </div>
                  <div className="comment-user">“ {data.writeReview}</div>
                  <div className="line-comment"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-gallery-btn-next-page">
          <div
            onClick={() => {
              var calculate = currentIndex - 1;
              setCurrentIndex(currentIndex - 1);
              if (calculate < 0) {
                setCurrentIndex(listReviewNew.length - 1);
                calculate = listReviewNew.length - 1;
              }
              nextReview(calculate);
            }}
            className="home-gallery-btn-left"
          >
            <img
              className="img-btn-left"
              src={require("../img/Vector-left.png")}
              alt=""
              style={{ margin: "auto", padding: "7px", display: "block" }}
            />
          </div>
          <div
            onClick={() => {
              var calculate = currentIndex + 1;
              setCurrentIndex(currentIndex + 1);
              if (calculate > listReviewNew.length - 1) {
                setCurrentIndex(0);
                calculate = 0;
              }
              nextReview(calculate);
            }}
            className="home-gallery-btn-right"
          >
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
            <Link to="/aboutus">
              <img
                className="img-about-us2"
                src={require("../img/Asset 4@2x 1.png")}
                alt=""
              />
            </Link>
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
            <Link to="/aboutus">
              <button className="btn-about-us">KHÁM PHÁ</button>
            </Link>
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
            {listKnowledge.map((data) => {
              return (
                <div className="card-knowledge">
                  <Link to={"/knowledgedetail?id=" + data._id}>
                    <img src={data.img[0]} alt="" />
                    <div className="title-knowledge">{data.name}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mobile">
          <div className="home-knowledge-for-product">
            <OwlCarousel
              className="owl-theme owl-carousel"
              loop={true}
              margin={5}
              dots={false}
              items={1.4}
            >
              {listKnowledge.map((data) => {
                return (
                  <div className="card-knowledge">
                    <Link to={"/knowledgedetail?id=" + data._id}>
                      <img src={data.img[0]} alt="" />
                      <div className="title-knowledge">{data.name}</div>
                    </Link>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
