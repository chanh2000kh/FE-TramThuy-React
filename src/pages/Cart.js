import Header from "../components/Header";
import "../css/Cart.css"
function Cart() {
    return (
      <>
      <Header></Header>
      <div class="main-cart">
        <div class="list-product-cart">
            <div class="title-cart">
                GIỎ HÀNG
            </div>
            <div class="table-list-product-cart">
                <div class="row-name-column">
                    <div class="product" style={{width: "44%"}}>
                        Sản phẩm
                    </div>
                    <div class="name-column" style={{width: "22%"}}>
                        Số lượng
                    </div>
                    <div class="name-column float-right" style={{width: "22%"}}>
                        Tạm tính
                    </div>
                </div>
                <div class="line"></div>
                <div class="row-product">
                    <div class="img-name-product">
                        <img src={require("../img/unsplash_5088iTgYZ5c.png")} alt=""/>
                        <div class="name-product">
                            
                            <div class="" style={{height: "78%"}}>
                                Nụ trầm hương
                            </div>
                            <div class="delete-mobile">
                                XÓA
                            </div>
                        </div>
                    </div>
                    <div class="amount-product">
                        <div class="btn-amount-product">
                            <div class="add" style={{transform: "translateY(-40%)"}}>_</div>
                            <div class="number">2</div>
                            <div class="add">+</div>
                        </div>
                    </div>
                    <div class="temporary-price float-right">
                        900.000 VND
                    </div>
                    <div class="delete">
                        XÓA
                    </div>
                </div>
                <div class="line"></div>

            </div>
        </div>
        <div class="price-product-cart">
            <div class="table-price">
                <div class="table-price-detail">
                    <div class="title-price">
                        Cộng giỏ hàng
                    </div>
                    <div class="line-mobile"></div>
                    <div class="row-table-price">
                        <div class="title">
                            Tạm tính
                        </div>
                        <div class="price">
                            900.000 VND
                        </div>
                    </div>
                    <div class="line-mobile"></div>
                    <div class="row-table-price">
                        <div class="title">
                            Giao hàng
                        </div>
                        <div class="contact-to-know-price">
                            Liên hệ để được báo giá giao hàng
                        </div>
                    </div>
                    <div class="line-mobile"></div>
                    <div class="row-table-price">
                        <div class="title">
                            Tổng
                        </div>
                        <div class="price">
                            900.000 VND
                        </div>
                    </div>
                    <div class="add-discount-code">
                        <input class="discount-code" type="text" placeholder="Mã ưu đãi"/>
                        <button class="btn-add-code">Áp dụng</button>
                    </div>
                    <button class="btn-pay">TIẾN HÀNH THANH TOÁN</button>
                </div>
            </div>
        </div>
    </div>
      </>
    );
  }
  
  export default Cart;
  