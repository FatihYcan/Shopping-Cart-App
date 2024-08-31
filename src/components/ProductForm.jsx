import axios from "axios";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const [image, setImage] = useState("");
  const [dampingRate, setDampingRate] = useState(0.8);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, amount, image, dampingRate };
    postProduct(newProduct);
    setName("");
    setPrice(0);
    setAmount(1);
    setImage("");
    setDampingRate(0.8);
  };

  const postProduct = async (newProduct) => {
    try {
      const res = await axios.post(
        "https://66d2fde0184dce1713cef89f.mockapi.io/products",
        newProduct
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center text-white">New Product</h1>
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
          <i className="fa-solid fa-cart-plus me-2"></i> Save To New Product
        </Button>
      </div>
    </Form>
  );
};

export default ProductForm;

// <article id="add-product" className="mb-4 mt-4 bg-white ">
//   <h1 className="text-center">New Product</h1>
//   <form className="p-2">
//     <div className="mb-3">
//       <label htmlFor="add-name" className="form-label">
//         Product Name
//       </label>
//       <input type="text" className="form-control" id="add-name" required />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="add-price" className="form-label">
//         Product Price
//       </label>
//       <input
//         type="number"
//         className="form-control"
//         id="add-price"
//         placeholder="0"
//         required
//       />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="add-quantity" className="form-label">
//         Product Quantity
//       </label>
//       <input
//         type="number"
//         className="form-control"
//         id="add-quantity"
//         placeholder="0"
//         required
//       />
//     </div>
//     <label htmlFor="add-image" className="form-label">
//       Product Image
//     </label>
//     <div className="input-group mb-3">
//       <span className="input-group-text" id="basic-addon3">
//         https://example.com/
//       </span>
//       <input
//         type="url"
//         className="form-control"
//         id="add-image"
//         aria-describedby="basic-addon3"
//         required
//       />
//     </div>
//     <div className="text-center">
//       <button type="submit" className="add-to-cart btn btn-success btn-sm">
//         <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
//       </button>
//     </div>
//   </form>
// </article>
