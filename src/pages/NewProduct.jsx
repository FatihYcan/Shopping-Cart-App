import ProductForm from "../components/ProductForm";
import { Container } from "react-bootstrap";

const NewProduct = () => {
  return (
    <Container className="new-product" >
      <ProductForm />
    </Container>
  );
};

export default NewProduct;
