import AppRouter from "./router/AppRouter";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <AppRouter />
    </ProductProvider>
  );
}

export default App;
