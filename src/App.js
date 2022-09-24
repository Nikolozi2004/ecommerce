import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import IndexOutput from "./IndexOutput/IndexOutput";
import Product from "./ProductInfo/Product";
import CategoryOutput from "./CategoriesOutput/CategoryOutput";
import Login from "./Components/Login";
import Register from "./Components/Register";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path={"/home"} element={<Home />}>
        <Route index element={<IndexOutput />} />
        <Route path="/home/product/:id" element={<Product />} />
        <Route path="/home/category/:id" element={<CategoryOutput />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
