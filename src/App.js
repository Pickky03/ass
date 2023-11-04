import "./App.css";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import ProductList from "./pages/productList";
import ProductForm from "./pages/productForm";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route element={<ProductList></ProductList>} path="/"></Route>
        <Route element={<ProductList></ProductList>} path="/post-list"></Route>
        <Route element={<ProductForm></ProductForm>} path="/post-form"></Route>
      </Routes>
    </>
  );
}

export default App;
