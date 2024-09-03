import Modal from "react-bootstrap/Modal";
import ProductForm from "../components/ProductForm";

const UpdateProduct = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="update-product">
        <ProductForm handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default UpdateProduct;
