import Header from "../components/Header";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import { Link } from "react-router-dom";
import format from "../sevices/FormatPrice.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function AboutUS() {
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
  useEffect(() => {
    loadListProductNew()
  }, [])
  return (
    <>
      <Header id={5}></Header>
      <div className="main-about-us">
        <div className="column-about-us1">
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
        <div className="column-line"></div>
        <div className="column-about-us2">
          <img
            className="logo"
            src={require("../img/logo-yellow.png")}
            alt=""
          />
          <div className="name-shop">Trầm Thủy</div>
          <div className="p-about-us">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            malesuada enim sagittis molestie sed. Ut odio massa eu faucibus
            faucibus purus. Cras vitae convallis amet id venenatis id velit.
            Felis, ipsum consectetur amet mattis massa. Nunc feugiat nunc massa
            diam. Morbi vel ipsum amet tincidunt nascetur metus, in.
          </div>
          <img
            className="logo-mobile"
            src={require("../img/logo-yellow.png")}
            alt=""
          />
        </div>
        <div className="column-about-us3">
          <div className="table-about-us">
            <div className="row-table-about-us" style={{ marginTop: 0 }}>
              <div className="title">HOTLINE: </div>
              <div className="detail"> 09xx xxx xxx - 08xx xxx xxx</div>
            </div>
            <div className="row-table-about-us">
              <div className="title">EMAIL: </div>
              <div className="detail">tramthuy@gmail.comx</div>
            </div>
            <div className="row-table-about-us">
              <div className="title">ĐỊA CHỈ: </div>
              <div className="detail"> TP. Hồ Chí minh:</div>
            </div>
            <div className="row-table-about-us">
              <div className="title"> </div>
              <div className="detail"> Huế:</div>
            </div>
            <div className="icons-about-us">
              <img
                src={require("../img/eva_facebook-fill-black.png")}
                alt=""
                style={{ transform: "scale(1)" }}
              />
              <img
                src={require("../img/akar-icons_instagram-fill-black.png")}
                alt=""
                style={{ transform: "scale(1)", margin: "auto" }}
              />
              <img
                src={require("../img/akar-icons_youtube-fill-black.png")}
                alt=""
                style={{ transform: "scale(1)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="new-product-about-us">
        <div className="new-product-title">
          <div className="title">
            <div className="line"></div>
            <div className="title1">HÀNG MỚI VỀ</div>
            <div className="line"></div>
          </div>
        </div>
        <div className="list-new-product-about-us">
          <OwlCarousel
            className="owl-carousel"
            center={true}
            items={3.5}
            loop={true}
            autoplay={true}
            autoplayTimeout={1500}
            margin={30}
          >
            {listProductNew.map((data) => {
              return (
                <div className="item card">
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
    </>
  );
}

export default AboutUS;
