import axios from "axios";
import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState("");

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios(
        "https://66d2fde0184dce1713cef89f.mockapi.io/products"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const editProduct = async (id, product) => {
    try {
      await axios.put(
        `https://66d2fde0184dce1713cef89f.mockapi.io/products/${id}/`,
        product
      );
      getProducts();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        editProduct,
        edit,
        setEdit,
        getProducts,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => {
  return useContext(ProductContext);
};
