import axios from "axios";
import { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useProducts } from "../context/ProductProvider";

const ProductForm = ({ handleClose }) => {
  const { edit, editProduct } = useProducts();

  const {
    id,
    amount: newAmount,
    image: newImage,
    name: newName,
    price: newPrice,
  } = edit;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const [image, setImage] = useState("");
  const [dampingRate, setDampingRate] = useState(0.8);

  useEffect(() => {
    if (edit) {
      setName(newName);
      setPrice(newPrice);
      setAmount(newAmount);
      setImage(newImage);
    }
  }, [newName, newPrice, newAmount, newImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, amount, image, dampingRate };

    if (id) {
      editProduct(id, newProduct);
      handleClose();
    } else {
      postProduct(newProduct);
      setName("");
      setPrice(0);
      setAmount(1);
      setImage("");
      setDampingRate(0.8);
    }
  };

  const postProduct = async (newProduct) => {
    try {
      await axios.post(
        "https://66d2fde0184dce1713cef89f.mockapi.io/products",
        newProduct
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center">{id ? "" : "New Product"}</h1>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Product Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="price">Product Price</Form.Label>
        <Form.Control
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="amount">Product Quantity</Form.Label>
        <Form.Control
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="image">Product Image</Form.Label>
        <InputGroup>
          <InputGroup.Text id="basic-addon3">
            https://example.com/
          </InputGroup.Text>
          <Form.Control
            type="url"
            id="image"
            aria-describedby="basic-addon3"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </InputGroup>
      </Form.Group>

      <div className="text-center">
        <Button variant="success" type="submit" size="sm">
          <i className="fa-solid fa-cart-plus me-2"></i>
          {id ? "Save To Edit Product" : "Save To New Product"}
        </Button>
      </div>
    </Form>
  );
};

export default ProductForm;
