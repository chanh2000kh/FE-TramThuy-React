import Header from "../components/Header";
import "../css/KnowledgeDetail.css";

function KnowledgeDetail() {
 
  return (
    <>
      <Header></Header>
      <div className="main-knowledge-detail">
        <div className="main-knowledge-detail-column1">
          <div className="related-product-table">
            <div className="related-product-table-title">
              Sản phẩm liên quan
            </div>
            <div className="card-table">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-table">Tượng Phật tổ gỗ trầm</div>
              <div className="price-table">1.990.000 VND</div>
            </div>
            <div className="card-table">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-table">Tượng Phật tổ gỗ trầm</div>
              <div className="price-table">1.990.000 VND</div>
            </div>
            <div className="card-table">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-table">Tượng Phật tổ gỗ trầm</div>
              <div className="price-table">1.990.000 VND</div>
            </div>
            <div className="card-table">
              <img
                src={require("../img/unsplash_HJk_TLFW1Yw (1).png")}
                alt=""
              />
              <div className="title-table">Tượng Phật tổ gỗ trầm</div>
              <div className="price-table">1.990.000 VND</div>
            </div>
          </div>
        </div>
        <div className="main-knowledge-detail-column2">
          <div className="title">
            Cách phân biệt trầm hương chất lượng với trầm hương giả
          </div>
          <div className="time-author">Đăng vào 03/03/2022 bởi Tâm Tâm</div>
          <div className="line"></div>
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              sed euismod volutpat mi. Nisl porta ultrices sed enim, urna. At ut
              diam diam ultricies blandit. Pharetra porttitor eget mauris,
              turpis. Tincidunt est eu proin id ut. Urna amet erat integer
              interdum pretium.
            </p>

            <p>
              {" "}
              Ultrices sed tellus tincidunt dui justo bibendum. Eu viverra purus
              et dignissim ipsum. Scelerisque facilisis rhoncus, volutpat
              fringilla eget sit scelerisque et. Mi at ac eu mauris. Amet amet
              quis lobortis tincidunt dictum volutpat eget est. Ullamcorper a
              vitae habitasse volutpat. Turpis est lectus massa consequat, odio.
              Urna, mauris accumsan, posuere fames sed in sagittis. Nulla nunc
              ultricies tellus velit ullamcorper aenean quis.
            </p>

            <p>
              Faucibus sed egestas integer leo. Nec faucibus mi dolor magna
              consequat nibh sem dolor. Maecenas vestibulum eget tempor lacus
              cursus. Euismod convallis nunc turpis mi morbi eu tincidunt lectus
              id. Donec orci tellus leo, mi quis. In pulvinar elit eget sed eget
              libero, nibh enim, facilisis. Facilisis nec sed lacus turpis et in
              commodo a. Ac suspendisse pellentesque pretium suscipit in
              sollicitudin laoreet. Egestas consectetur quam amet, cras
              porttitor cras quisque sed elit. Tristique ante eu nulla orci
              proin. Sed scelerisque nisi fames iaculis semper.
            </p>
            <img src={require("../img/Rectangle 101.png")} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              sed euismod volutpat mi. Nisl porta ultrices sed enim, urna. At ut
              diam diam ultricies blandit. Pharetra porttitor eget mauris,
              turpis. Tincidunt est eu proin id ut. Urna amet erat integer
              interdum pretium.
            </p>

            <p>
              Ultrices sed tellus tincidunt dui justo bibendum. Eu viverra purus
              et dignissim ipsum. Scelerisque facilisis rhoncus, volutpat
              fringilla eget sit scelerisque et. Mi at ac eu mauris. Amet amet
              quis lobortis tincidunt dictum volutpat eget est. Ullamcorper a
              vitae habitasse volutpat. Turpis est lectus massa consequat, odio.
              Urna, mauris accumsan, posuere fames sed in sagittis. Nulla nunc
              ultricies tellus velit ullamcorper aenean quis.
            </p>

            <p>
              Faucibus sed egestas integer leo. Nec faucibus mi dolor magna
              consequat nibh sem dolor. Maecenas vestibulum eget tempor lacus
              cursus. Euismod convallis nunc turpis mi morbi eu tincidunt lectus
              id. Donec orci tellus leo, mi quis. In pulvinar elit eget sed eget
              libero, nibh enim, facilisis. Facilisis nec sed lacus turpis et in
              commodo a. Ac suspendisse pellentesque pretium suscipit in
              sollicitudin laoreet. Egestas consectetur quam amet, cras
              porttitor cras quisque sed elit. Tristique ante eu nulla orci
              proin. Sed scelerisque nisi fames iaculis semper.
            </p>
          </div>
          <div className="line-mobile"></div>
          <div className="list-icons">
            <img src={require("../img/eva_facebook-fill-yellow.png")} alt="" />
            <img
              src={require("../img/akar-icons_instagram-fill-yellow.png")}
              alt=""
              style={{margin: "auto"}}
            />
            <img
              src={require("../img/akar-icons_youtube-fill-yellow.png")}
              alt=""
              style={{margin: "auto"}}
            />
          </div>
          <p className="tag">
            Tag: &ensp; <i>nhan trầm, trầm hương, trầm nụ</i>
          </p>
          <div className="related-posts">
            <div className="related-posts-title">BÀI VIẾT LIÊN QUAN</div>
            <div className="related-posts-line"></div>
          </div>
          <div className="related-posts-list">
            <div className="card">
              <img src={require("../img/unsplash_UzDimV2GzFA.png")} alt="" />
              <div className="title">
                Cách nhận biết giá trị và chất lượng của trầm hương
              </div>
            </div>
            <div className="card">
              <img src={require("../img/unsplash_UzDimV2GzFA.png")} alt="" />
              <div className="title">
                Cách nhận biết giá trị và chất lượng của trầm hương
              </div>
            </div>
            <div className="card">
              <img src={require("../img/unsplash_UzDimV2GzFA.png")} alt="" />
              <div className="title">
                Cách nhận biết giá trị và chất lượng của trầm hương
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="img-logo"
        src={require("../img/Mask group (3).png")}
        alt=""
        style={{position: "absolute", transform: "translateY(-100%)", width: "30%"}}
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
            style={{display: "block", margin: "auto", marginTop: "10px"}}
          />
        </div>
      </div>

      <div className="knowledge-detail-list-product" style={{marginTop: "60px"}}>
        <div className="title">
          <h4 className="title-type-product">SẢN PHẨM LIÊN QUAN </h4>
        </div>
        <div className="line">
          <div className="line-yellow"></div>
          <div className="line-silver"></div>
        </div>

        <div className="mobile">
          <div className="owl-carousel owl-theme list-product list-product-jewels">
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

      <div className="knowledge-detail-list-product" style={{marginTop: "39px", marginBottom: "100px"}}>
        <div className="title">
          <h4 className="title-type-product">BÀI VIẾT LIÊN QUAN </h4>
        </div>
        <div className="line">
          <div className="line-yellow"></div>
          <div className="line-silver"></div>
        </div>

        <div className="mobile" style={{marginTop: "18px"}}>
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

export default KnowledgeDetail;
