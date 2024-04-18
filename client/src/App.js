import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Layout />}>

              <Route index element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/pages/products" element={<Products />} />

              
              <Route path="*" element={<NotFound />}></Route>

            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
