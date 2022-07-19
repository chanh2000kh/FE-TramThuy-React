import Header from "../components/Header";
function AboutUS() {
    return (
      <>
        <Header></Header>
        <div className="main-about-us">
        <div className="column-about-us1">
            <div className="card">
                <img src={require("../img/istockphoto-1237854712-612x612-removebg-preview 1.png")} alt=""/>
                <h4 className="title">TRẦM - NHANG</h4>
            </div>
            <div className="card">
                <img src={require("../img/303171cb0d41c7e01f1c3025d03fffe6-removebg-preview 1.png")} alt=""/>
                <h4 className="title">TRANG SỨC</h4>
            </div>
            <div className="card">
                <img src={require("../img/large-sitting-buddha-statue-solid-wood-carved-hand-50cm-removebg-preview 1.png")} alt=""/>
                <h4 className="title">TƯỢNG</h4>
            </div>
            <div className="card">
                <img className="img"src={require("../img/S-4985-2-removebg-preview 1.png")} alt=""/>
                <h4 className="title">LƯ XÔNG</h4>
            </div>
        </div>
        <div className="column-line"></div>
        <div className="column-about-us2">
            <img className="logo"src={require("../img/logo-yellow.png")} alt=""/>
            <div className="name-shop">
                Trầm Thủy
            </div>
            <div className="p-about-us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod malesuada enim sagittis molestie sed. Ut odio massa eu faucibus faucibus purus. Cras vitae convallis amet id venenatis id velit. Felis, ipsum consectetur amet mattis massa. Nunc feugiat nunc massa diam. Morbi vel ipsum amet tincidunt nascetur metus, in.
            </div>
            <img className="logo-mobile"src={require("../img/logo-yellow.png")} alt=""/>
        </div>
        <div className="column-about-us3">
            <div className="table-about-us">
                <div className="row-table-about-us" style={{marginTop: 0}}>
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
                    <img src={require("../img/eva_facebook-fill-black.png")} alt="" style={{transform: "scale(1)"}}/>
                    <img src={require("../img/akar-icons_instagram-fill-black.png")} alt="" style={{transform: "scale(1)", margin: "auto"}}/>
                    <img src={require("../img/akar-icons_youtube-fill-black.png")} alt="" style={{transform: "scale(1)"}}/>
                </div>
            </div>
        </div>
    </div>
        <div className="new-product-about-us">
        <div className="new-product-title">
            <div className="title">
                <div className="line"></div>
                <div className="title1">
                    HÀNG MỚI VỀ
                </div>
                <div className="line"></div>
            </div>
        </div>
        <div className="owl-carousel list-new-product-about-us">
            <div className="item card">
                <img src={require("../img/Rectangle 31.png")} alt=""/>
                <div className="title-new-product">
                    <div className="">
                        Lư xông trầm Tây Tạng cỡ lớn
                    </div>
                    <div className="">
                        1.990.000 VND
                    </div>
                </div>
            </div>
            <div className="item card">
                <img src={require("../img/Rectangle 31.png")} alt=""/>
                <div className="title-new-product">
                    <div className="">
                        Lư xông trầm Tây Tạng cỡ lớn
                    </div>
                    <div className="">
                        1.990.000 VND
                    </div>
                </div>
            </div>
            <div className="item card">
                <img src={require("../img/Rectangle 31.png")} alt=""/>
                <div className="title-new-product">
                    <div className="">
                        Lư xông trầm Tây Tạng cỡ lớn
                    </div>
                    <div className="">
                        1.990.000 VND
                    </div>
                </div>
            </div>
            <div className="item card">
                <img src={require("../img/Rectangle 31.png")} alt=""/>
                <div className="title-new-product">
                    <div className="">
                        Lư xông trầm Tây Tạng cỡ lớn
                    </div>
                    <div className="">
                        1.990.000 VND
                    </div>
                </div>
            </div>
            <div className="item card">
                <img src={require("../img/Rectangle 32.png")} alt=""/>
                <div className="title-new-product">
                    <div className="">
                        Vòng tay gỗ đàn hương
                    </div>
                    <div className="">
                        1.990.000 VND
                    </div>
                </div>
            </div>
            <div className="item card">
                <img src={require("../img/Rectangle 31.png")} alt=""/>
                <div className="title-new-product">
                    <div className="">
                        Gỗ táo thơm
                    </div>
                    <div className="">
                        1.990.000 VND
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    );
  }
  
  export default AboutUS;