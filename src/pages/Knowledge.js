import Header from "../components/Header";
import "../css/Knowledge.css";
import React from "react";
import { useState, useEffect } from "react";
import callApi from "../api/ApiSevice.js";
import format from "../sevices/FormatPrice.js";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
function Knowledge() {
  const [listKnowledge, setListKnowledge] = React.useState([]);
  const [listProduct, setListProduct] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const LoadListKnowledge = () => {
    callApi(`api/knowledge/getKnowledgeAll?limit=7&skip=1`, "GET")
      .then((res) => {
        setListKnowledge(res.data.data.knowledge);
        setTotalPages(res.data.data.pageNumber)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadListProduct = () => {
    callApi(`api/product/getProductBestSell?limit=4&skip=1&increase=-1`, "GET")
      .then((res) => {
        setListProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    LoadListKnowledge();
    loadListProduct();
  }, []);
  return (
    <>
      <Header id={4}></Header>
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
      <div className="main-knowledge">
        <div className="main-knowledge-column1">
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
          <div className="related-product-table">
            <div className="related-product-table-title">Sản phẩm bán chạy</div>
            {listProduct.map((data) => {
              return (
                <Link to={"/productdetail?id=" + data._id}>
                  <div className="card-table">
                    <img src={data.img[0]} alt="" />
                    <div className="title-table">{data.name}</div>
                    <div className="price-table">{format(data.price)} VND</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="main-knowledge-column2">
          <div className="list-knowledge">
            {listKnowledge.map((data) => {
              return (
                <>
                  <Link to={"/knowledgedetail?id=" + data._id}>
                    <div className="card">
                      <img src={data.img[0]} alt="" />
                      <div className="box">
                        <div className="title">{data.name}</div>
                        <div className="detail">{data.describe}</div>
                      </div>
                    </div>
                  </Link>
                  <div className="line"></div>
                </>
              );
            })}
          </div>

          <ul className="number-page">
          <Pagination
              count={totalPages}
              page={pageNumber}
              onChange={(event, value) => setPageNumber(value)}
              className="number"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Knowledge;
