import Header from "../components/Header";
import "../css/ProductDetail.css";
function ProductDetail() {
  return (
    <>
      <Header></Header>
      <img
        className="rim-right-silver"
        src={require("../img/Mask group.png")}
        alt=""
        style={{float: "right", width: "10%", marginTop: "43%"}}
      />
      <img
        className="rim-left-silver"
        src={require("../img/Mask group left.png")}
        alt=""
        style={{float: "left", width: "10%", marginTop: "43%"}}
      />
      <div className="main-product-detail">
        <div className="product-detail">
          <div className="product-detail-column1">
            <img
              src={require("../img/Rectangle 43.png")}
              alt=""
              style={{marginTop: "30px"}}
            />
            <img src={require("../img/Rectangle 43.png")} alt="" />
            <img src={require("../img/Rectangle 43.png")} alt="" />
          </div>
          <div className="product-detail-column2">
            <div className="column1-img">
              <img
                className="img"
                src={require("../img/Rectangle 43.png")}
                alt=""
              />
              <div className="list-product-img-mobile">
                <img
                  src={require("../img/Rectangle 43.png")}
                  alt=""
                  style={{marginLeft: "0"}}
                />
                <img src={require("../img/Rectangle 43.png")} alt="" />
                <img src={require("../img/Rectangle 43.png")} alt="" />
              </div>
              <div className="list-icons">
                <img
                  src={require("../img/eva_facebook-fill-yellow.png")}
                  alt=""
                  style={{margin: "auto"}}
                />
                <img
                  src={require("../img/akar-icons_instagram-fill-yellow.png")}
                  alt=""
                  style={{margin: "auto"}}
                />
                <img
                  src={require("../img/akar-icons_youtube-fill-yellow.png")}
                  alt=""
                  style={{alignSelf: "self-start", marginLeft: "auto"}}
                />
              </div>
            </div>
            <div className="column2-detail">
              <div className="detail">
                <div className="product-name">V??NG TAY TR???M H????NG</div>
                <div className="row1">
                  <img
                    className="img-star"
                    src={require("../img/Group 34.png")}
                    alt=""
                  />
                  <div className="number-of-reviews">(23)</div>
                  <div className="sold">???? b??n: 76</div>
                </div>
                <div className="product-price">900.000 VND</div>
                <div className="row2">
                  <div className="type">Lo???i:</div>
                  <div className="box">
                    <input
                      className="radio-input"
                      type="radio"
                      id="type1"
                      name="type"
                      value="1"
                    />
                    <label htmlFor="type1" className="radio-label"></label>
                    <label className="name-type" htmlFor="type1">
                      I
                    </label>
                  </div>
                  <div className="box">
                    <input
                      className="radio-input"
                      type="radio"
                      id="type2"
                      name="type"
                      value="2"
                    />
                    <label htmlFor="type2" className="radio-label"></label>
                    <label className="name-type" htmlFor="type2">
                      II
                    </label>
                  </div>
                  <div className="box">
                    <input
                      className="radio-input"
                      type="radio"
                      id="type3"
                      name="type"
                      value="3"
                    />
                    <label htmlFor="type3" className="radio-label"></label>
                    <label className="name-type" htmlFor="type3">
                      III
                    </label>
                  </div>
                  <div className="stock">C??n h??ng</div>
                </div>
                <div className="row3">
                  <div className="btn-amount-product">
                    <div className="add" style={{transform: "translateY(-40%)"}}>
                      _
                    </div>
                    <div className="number">2</div>
                    <div className="add">+</div>
                  </div>
                  <button className="bnt-add-cart">Th??m v??o gi??? h??ng</button>
                </div>
                <div className="line"></div>
                <div className="buy-call">
                  <button className="btn-buy">MUA NGAY</button>
                  <button className="btn-call">G???I ?????T H??NG</button>
                </div>
              </div>
              <div className="icons">
                <div className="card">
                  <div className="" style={{width: "100%", height: "76px"}}>
                    <img
                      src={require("../img/la_credit-card.png")}
                      alt=""
                      style={{marginLeft: "50%", transform: "translateX(-50%)"}}
                    />
                  </div>
                  <div className="title">THANH TO??N ONLINE</div>
                  <div className="title-small">an to??n v?? nhanh ch??ng</div>
                </div>
                <div className="card">
                  <div className="" style={{width: "100%",height: "76px"}}>
                    <img
                      src={require("../img/Group 20.png")}
                      alt=""
                      style={{marginLeft: "50%", transform: "translateX(-50%)"}}
                    />
                  </div>
                  <div className="title">?????I TR??? H??NG</div>
                  <div className="title-small">30 ng??y </div>
                </div>
                <div className="card">
                  <div className="" style={{width: "100%",height: "76px"}}>
                    <img
                      src={require("../img/iconoir_delivery-truck.png")}
                      alt=""
                      style={{marginLeft: "50%", transform: "translateX(-50%)"}}
                    />
                  </div>
                  <div className="title">SHIP TO??N QU???C</div>
                  <div className="title-small">3-5 ng??y</div>
                </div>
                <div className="card">
                  <div className="" style={{width: "100%",height: "76px"}}>
                    <img
                      src={require("../img/clarity_shield-check-line.png")}
                      alt=""
                      style={{marginLeft: "50%", transform: "translateX(-50%)"}}
                    />
                  </div>
                  <div className="title">?????M B???O CH???T L?????NG</div>
                  <div className="title-small">100% t??? nhi??n</div>
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
          style={{marginLeft: "30%"}}
        >
          M?? T???
        </label>
        <input
          className="radio-input-title radio-input-title-product-detail"
          type="radio"
          id="product-detail"
          name="radio-input-title"
        />
        <label htmlFor="product-detail" className="name name-product-detail">
          CHI TI???T S???N PH???M
        </label>
        <input
          className="radio-input-title radio-input-title-review-detail"
          type="radio"
          id="review"
          name="radio-input-title"
        />
        <label htmlFor="review" className="name">
          ????NH GI?? (2)
        </label>

        <div className="describe-detail">
          <div className="question">
            <div className="">Nhang n??? Tr???m H????ng l?? g???</div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (3).png")}
              alt=""
            />
          </div>
          <div className="line"></div>
          <div className="question-title">
            <div className="">?????c t??nh c???a nhang tr???m h????ng n????</div>
            <img
              src={require("../img/dashicons_arrow-left-alt2 (4).png")}
              alt=""
            />
          </div>
          <div className="line" style={{width: "90%", marginLeft: "auto"}}></div>
          <div className="question-title-answer">
            <p>
              Nhang tr???m h????ng n??? l?? s???n ph???m ???????c s???n xu???t t??? tr???m h????ng; c???
              th??? l?? ph???n g??? tr???m h????ng s??? ???????c xay nhuy???n r???i t??n cho th???t m???n.
              Sau ???? ng?????i ta s??? k???t h???p b???t tr???m h????ng c??ng v???i nh???ng ch???t li???u
              ho??n to??n t??? nhi??n ????? t???o th??nh m???t h???n h???p c?? ????? k??? d??nh nh???t
              ?????nh. Cu???i c??ng c??c ngh??? nh??n s??? t???o h??nh h???n h???p n??y th??nh nh???ng
              kh???i nh??? c?? d???ng n??n l??, b??p sen. Nhang n??? Tr???m H????ng l?? m???t lo???i
              nhang ???????c l??m t??? b???t Tr???m H????ng v?? c??c nguy??n li???u thi??n nhi??n
              nguy??n ch???t kh??c, kh??ng s??? d???ng b???t k?? m???t h??a ch???t n??o trong qu??
              tr??nh s???n xu???t.
            </p>

            <p>
              Lo???i nhang n??y lan t???a h????ng th??m trong m???t kh??ng gian l???n; ng?????i
              ta th?????ng s??? d???ng nhang n??? ????? x??ng nh??, x??ng x?????ng l??m vi???c, x??ng
              c??ng ty hay x??ng v??n ph??ng??? H????ng th??m c???a nhang tr???m h????ng n??? s???
              kh??? t???t c??? m??i ?? u???, m??i thu???c l??, m??i tanh; gi??p cho kh??ng gian
              s???ng c???a b???n lu??n tr??n ng???p h????ng th??m d??? ch???u.
            </p>
          </div>
          <div className="line"></div>
        </div>

        <div className="product-detail">
          <div className="row">
            <div className="title">CH???T LI???U</div>
            <div className="detail">Tr???m H????ng ??? Charm B???c S925</div>
          </div>
          <div className="row">
            <div className="title">NGU???N G???C</div>
            <div className="detail">L??o</div>
          </div>
          <div className="row">
            <div className="title">S??? L?????NG H???T</div>
            <div className="detail">17-21 h???t (Xem h?????ng d???n ??o size tay)</div>
          </div>
          <div className="row">
            <div className="title">TU???I TR???M</div>
            <div className="detail">12 ??? 14 n??m T??ch Tr???m</div>
          </div>
          <div className="row">
            <div className="title">S??? D???NG</div>
            <div className="detail">N???</div>
          </div>
          <div className="more-detail" style={{marginTop: "30px"}}>
            Qu?? t???ng cho ng?????i th??n, b???n b??, ?????ng nghi???p
          </div>
          <div className="more-detail">
            Mang ?? ngh??a sum h???p, y??n vui, th???nh v?????ng, b??nh an
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
              <div className="product-name">NHANG TR???M N???</div>
              <div className="leadership">
                ????nh gi?? s???n ph???m t??? 1 ?????n 5 sao v?? cho ch??ng t??i nh???n x??t c???a
                b???n v??? s???n ph???m n??y. C???m ??n!
              </div>
              <img
                src={require("../img/Group 136.png")}
                alt=""
                style={{marginTop: "76px"}}
              />
              <div className="name-email">
                <input
                  type="text"
                  placeholder="T??n hi???n th???"
                  style={{width: "35%"}}
                />
                <input type="email" placeholder="Email" style={{width: "60%"}} />
              </div>
              <textarea
                className="add-write-review"
                name="Vi???t ????nh gi??"
                id=""
                cols="30"
                rows="10"
                placeholder="Vi???t ????nh gi??"
              ></textarea>

              <div className="btn-save-review">
                <input type="checkbox" name="" id="" />
                <div className="title-save-review">
                  L??u th??ng tin cho b??nh lu???n sau
                </div>
                <label htmlFor="checkbox-write-review">
                  <button className="btn-close-mobile">??O??NG</button>
                </label>
                <label htmlFor="sent-review">
                  <button>G???I</button>
                </label>
              </div>
            </div>
            <label className="write-review" htmlFor="checkbox-write-review">
              <img
                src={require("../img/ant-design_plus-outlined.png")}
                alt=""
              />
              Vi???t ????nh gi??
            </label>
          </div>
          <div className="row-review">
            <div className="avatar" style={{marginTop: "15px"}}>
              <img src={require("../img/Ellipse 10 (1).png")} alt="" />
            </div>

            <div className="box">
              <img src={require("../img/Group 34 (2).png")} alt="" />
              <div className="name-date">
                <div className="name-review">Nguyen A.</div>
                <div className="date-review" style={{color: "#ACAFC3"}}>
                  23/02/2022
                </div>
              </div>
            </div>
            <div className="content">
              ??? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <div className="date-review" style={{color: "#ACAFC3"}}>
                  23/02/2022
                </div>
              </div>
            </div>
            <div className="content">
              ??? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tincidunt vivamus feugiat sed quisque id sit ut amet, ipsum
            </div>
          </div>
        </div>
      </div>

      <div style={{background: "#F3F4F6", paddingTop: "40px", marginTop: "60px",paddingBottom: "20px"}}>
        <div className="knowledge-detail-list-product">
          <div className="title">
            <h4 className="title-type-product">S???N PH???M LI??N QUAN </h4>
          </div>
          <div className="line">
            <div className="line-yellow"></div>
            <div className="line-silver"></div>
          </div>

          <div className="mobile">
            <div className="owl-carousel owl-theme list-product list-product-jewels ">
              <div className="list-product-card">
                <img src={require("../img/Rectangle 43 (1).png")} alt="" />
                <div className="title-product">Nhang tr???m h????ng</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
              <div className="list-product-card">
                <img src={require("../img/unsplash_x8zV3NNPuAk.png")} alt="" />
                <div className="title-product">Nhang tr???m h????ng</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
              <div className="list-product-card">
                <img src={require("../img/unsplash_x8zV3NNPuAk.png")} alt="" />
                <div className="title-product">Nhang tr???m h????ng</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
              <div className="list-product-card">
                <img src={require("../img/unsplash_x8zV3NNPuAk.png")} alt="" />
                <div className="title-product">Nhang tr???m h????ng</div>
                <div className="price-product">1.990.000 VND</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-product-about-us" style={{height: "704px", marginTop: "0"}}>
        <div className="new-product-title">
          <div className="title">
            <div className="line"></div>
            <div className="title1">S???N PH???M T????NG T???</div>
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
              <div className="title-product">T?????ng Ph???t t??? g??? tr???m</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
            <div className="list-product-card">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-product">T?????ng Ph???t t??? g??? tr???m</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
            <div className="list-product-card">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-product">T?????ng Ph???t t??? g??? tr???m</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
            <div className="list-product-card">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-product">T?????ng Ph???t t??? g??? tr???m</div>
              <div className="price-product">1.990.000 VND</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
