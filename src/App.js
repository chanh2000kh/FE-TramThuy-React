import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
