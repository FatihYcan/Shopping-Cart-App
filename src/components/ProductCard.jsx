import axios from "axios";
import { Card, Col, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import UpdateProduct from "../pages/UpdateProduct";
import { useState } from "react";
import { useProducts } from "../context/ProductProvider";
import Swal from "sweetalert2";

const ProductCard = ({ products, getProducts }) => {
  const { setEdit, editProduct, setLoading } = useProducts();

  const handlePlus = (item) => {
    const { id, amount, image, name, price } = item;
    const newProduct = {
      amount: (Number(amount) + 1).toString(),
      image,
      name,
      price,
    };
    editProduct(id, newProduct);
  };

  const handleMinus = (item) => {
    const { id, amount, image, name, price } = item;
    if (amount > 1) {
      const newProduct = {
        amount: (Number(amount) - 1).toString(),
        image,
        name,
        price,
      };
      editProduct(id, newProduct);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEdit({ name: "", price: 0, amount: 1, image: "", dampingRate: 0.8 });
  };

  const handleShow = (item) => {
    setShow(true);
    setEdit(item);
  };

  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        setLoading(false);
        await axios.delete(
          `https://66d2fde0184dce1713cef89f.mockapi.io/products/${id}/`
        );
        getProducts();
        await Swal.fire({
          title: "Deleted!",
          text: "Product deleted",
          icon: "success",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {products.map((item) => {
        const { name, image, price, dampingRate, amount, id } = item;

        return (
          <Col key={id}>
            <Card className="text-center ">
              <Card.Img variant="top" src={image} alt={name} className="img" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="text-warning fs-3 ">
                  $ {(price * dampingRate).toFixed(2)}
                  <span className="ms-2 text-danger fs-5 text-decoration-line-through">
                    {parseFloat(price).toFixed(2)}
                  </span>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <Button
                    variant="warning"
                    className="me-3"
                    disabled={Number(amount) === 1}
                    onClick={() => handleMinus(item)}
                  >
                    <i className="fa fa-minus"></i>
                  </Button>
                  {parseInt(amount)}
                  <Button
                    variant="success"
                    className="ms-3"
                    onClick={() => handlePlus(item)}
                  >
                    <i className="fa fa-plus"></i>
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-3"
                    onClick={() => handleShow(item)}
                  >
                    <i className="fa-solid fa-pen-to-square me-2"></i>Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteProduct(id)}
                  >
                    <i className="fa-solid fa-trash-can me-2"></i>Remove
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="fs-6">
                  Prdouct Total: $ {(price * dampingRate * amount).toFixed(2)}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        );
      })}
      <UpdateProduct show={show} handleClose={handleClose} />
    </>
  );
};

export default ProductCard;
