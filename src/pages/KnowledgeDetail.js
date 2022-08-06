import Header from "../components/Header";
import "../css/KnowledgeDetail.css";
import callApi from "../api/ApiSevice.js";
import React from "react";
import { useState, useEffect } from "react";
import format from "../sevices/FormatPrice.js";
import parse from "html-react-parser";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
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
function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}
function KnowledgeDetail() {
  const [knowledgeDetail, setKnowledgeDetail] = React.useState({});
  const [detail, setDetail] = React.useState("");
  const [day, setDay] = React.useState("");
  const loadKnowledgeDetail = () => {
    const id = GetURLParameter("id");
    callApi(`api/knowledge/getOneKnowled?id=${id}`, "GET")
      .then((res) => {
        setKnowledgeDetail(res.data.data);
        setDetail(res.data.data.detail);
        setDay(formatDate(res.data.data.createdAt));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [listProduct, setListProduct] = React.useState([]);
  const loadListProduct = () => {
    callApi(`api/product/getProductBestSell?limit=4&skip=1&increase=-1`, "GET")
      .then((res) => {
        setListProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [listKnowledge, setListKnowledge] = React.useState([]);
  const LoadListKnowledge = () => {
    callApi(`api/knowledge/getKnowledgeAll?limit=3&skip=1`, "GET")
      .then((res) => {
        setListKnowledge(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadKnowledgeDetail();
    loadListProduct();
    LoadListKnowledge();
  }, []);
  return (
    <>
      <Header></Header>
      <div className="main-knowledge-detail">
        <div className="main-knowledge-detail-column1">
          <div className="related-product-table">
            <div className="related-product-table-title">
              Sản phẩm liên quan
            </div>
            {listProduct.map((data) => {
              return (
                <Link to={"/productdetail?id=" + data._id}>
                  <div className="card-table">
                    <img src={data.img[0]} alt="" />
                    <div className="title-table">{data.name}</div>
                    <div className="price-table">{format(data.price)} VND</div>
                  </div>
                </Link >
              );
            })}
          </div>
        </div>
        <div className="main-knowledge-detail-column2">
          <div className="title">{knowledgeDetail.name}</div>
          <div className="time-author">
            Đăng vào {day} bởi {knowledgeDetail.author}
          </div>
          <div className="line"></div>
          <div className="detail">{parse(detail)}</div>
          <div className="line-mobile"></div>
          <div className="list-icons">
            <img src={require("../img/eva_facebook-fill-yellow.png")} alt="" />
            <img
              src={require("../img/akar-icons_instagram-fill-yellow.png")}
              alt=""
              style={{ margin: "auto" }}
            />
            <img
              src={require("../img/akar-icons_youtube-fill-yellow.png")}
              alt=""
              style={{ margin: "auto" }}
            />
          </div>
          <p className="tag">
            Tag: &ensp; <i>{knowledgeDetail.tag}</i>
          </p>
          <div className="related-posts">
            <div className="related-posts-title">BÀI VIẾT LIÊN QUAN</div>
            <div className="related-posts-line"></div>
          </div>
          <div className="related-posts-list">
            {listKnowledge.map((data) => {
              return (
                <div className="card">
                  <Link to={"/knowledgedetail?id=" + data._id}>
                    <img src={data.img[0]} alt="" />
                    <div className="title">{data.name}</div>
                  </Link >
                </div>
              );
            })}
          </div>
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

      <div
        className="knowledge-detail-list-product"
        style={{ marginTop: "60px" }}
      >
        <div className="title">
          <h4 className="title-type-product">SẢN PHẨM LIÊN QUAN </h4>
        </div>
        <div className="line">
          <div className="line-yellow"></div>
          <div className="line-silver"></div>
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
              {listProduct.map((data) => {
                return (
                  <Link to={"/productdetail?id=" + data._id}>
                    <div className="list-product-card">
                      <img src={data.img[0]} alt="" />
                      <div className="title-product">{data.name}</div>
                      <div className="price-product">
                        {format(data.price)} VND
                      </div>
                    </div>
                  </Link >
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div
        className="knowledge-detail-list-product"
        style={{ marginTop: "39px", marginBottom: "100px" }}
      >
        <div className="title">
          <h4 className="title-type-product">BÀI VIẾT LIÊN QUAN </h4>
        </div>
        <div className="line">
          <div className="line-yellow"></div>
          <div className="line-silver"></div>
        </div>

        <div className="mobile" style={{ marginTop: "18px" }}>
          <div className="home-knowledge-for-product">
            <OwlCarousel
              className="owl-carousel"
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
                      <div
                        className="title-knowledge"
                        style={{ color: "#000000" }}
                      >
                        {data.name}
                      </div>
                    </Link >
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

export default KnowledgeDetail;
