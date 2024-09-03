import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../context/ProductProvider";
import { useEffect } from "react";

const ProductList = () => {
  const { products, loading, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container className="p-4 justify-content-center">
      {loading ? (
        <p className="text-center text-danger w-100">Loading....</p>
      ) : products.length ? (
        <>
          <Row xs={1} md={3} className="g-4 mb-4 justify-content-center">
            <ProductCard products={products} getProducts={getProducts} />
          </Row>

          <div className="card-total">
            <CardTotal products={products} />
          </div>
        </>
      ) : (
        <p className="text-center text-danger w-100">No products data...</p>
      )}
    </Container>
  );
};

export default ProductList;
