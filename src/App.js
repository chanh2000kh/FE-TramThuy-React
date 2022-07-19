import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
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
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
