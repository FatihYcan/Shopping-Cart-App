import axios from "axios";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ProductCard = ({ products, getProducts }) => {
  console.log(products);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `https://66d2fde0184dce1713cef89f.mockapi.io/products/${id}/`
      );
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <>
      {products.map((item) => {
        const { name, image, price, dampingRate, amount, id } = item;

        return (
          <Col key={id}>
            <Card className="text-center">
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
                  <Button variant="warning" className="me-3">
                    <i className="fa fa-minus"></i>
                  </Button>
                  {parseInt(amount)}
                  <Button variant="success" className="ms-3">
                    <i className="fa fa-plus"></i>
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="warning" size="sm" className="me-3">
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
                <ListGroup.Item className="fs-5">
                  Prdouct Total: $ {(price * amount).toFixed(2)}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        );
      })}
    </>

    // <div className="card shadow-lg mb-3">
    //   <div className="row g-0">
    //     <div className="col-md-5">
    //       <img
    //         src={"image"}
    //         className="w-100 h-100 rounded-start"
    //         alt={"name"}
    //         height="250px"
    //         title={""}
    //       />
    //     </div>
    //     <div className="col-md-7">
    //       <div className="card-body">
    //         <h5 className="card-title" role="button">
    //           Ürün İsmi
    //         </h5>
    //         <div className="product-price">
    //           <p className="text-warning h2">
    //             $<span className="damping-price">Fiyat</span>
    //             <span className="h5 text-dark text-decoration-line-through">
    //               Asıl Fiyat
    //             </span>
    //           </p>
    //         </div>
    //         <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
    //           <div className="quantity-controller">
    //             <button className="btn btn-secondary btn-sm">
    //               <i className="fas fa-minus"></i>
    //             </button>
    //             <p className="d-inline mx-4" id="product-quantity">
    //               Miktar
    //             </p>
    //             <button className="btn btn-secondary btn-sm">
    //               <i className="fas fa-plus"></i>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="product-removal mt-4">
    //           <button className="btn btn-danger btn-sm w-100 remove-product">
    //             <i className="fa-solid fa-trash-can me-2"></i>Remove
    //           </button>
    //         </div>
    //         <div className="mt-2">
    //           Product Total: $<span className="product-line-price">Total</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
