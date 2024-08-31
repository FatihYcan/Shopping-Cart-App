import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios(
        "https://66d2fde0184dce1713cef89f.mockapi.io/products"
      );
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container className="p-4 justify-content-center">
      {/* <p className="text-center text-danger w-100">Loading....</p> */}

      <Row xs={1} md={3} className="g-4 mb-4 justify-content-center">
        <ProductCard products={products} getProducts={getProducts} />
      </Row>

      <div className="card-total">
        <CardTotal />
      </div>

      {/* 
        <p className="text-center text-danger w-100">No products data...</p> */}
    </Container>
  );
};

export default ProductList;

// https://66d2fde0184dce1713cef89f.mockapi.io/products
