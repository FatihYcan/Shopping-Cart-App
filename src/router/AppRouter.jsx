import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navs from "../components/Navs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navs />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
