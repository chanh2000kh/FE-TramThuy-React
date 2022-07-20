import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import ListProduct from "./pages/ListProduct";
import PayDetail from "./pages/PayDetail";
import PaySuccess from "./pages/PaySuccess";
import Cart from "./pages/Cart";
import Knowledge from "./pages/Knowledge";
import ProductDetail from "./pages/ProductDetail";
import KnowledgeDetail from "./pages/KnowledgeDetail";
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutus" element={<AboutUS />}/>
      <Route path="/listproduct" element={<ListProduct />}/>
      <Route path="/paydetail" element={<PayDetail />}/>
      <Route path="/paysuccess" element={<PaySuccess />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/knowledge" element={<Knowledge />}/>
      <Route path="/productdetail" element={<ProductDetail />}/>
      <Route path="/knowledgedetail" element={<KnowledgeDetail />}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
