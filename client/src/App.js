import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop/Shop";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Layout />}>

              <Route index element={<Home />} />
              <Route path="/shop-collections" element={<Shop />} />
              <Route path="/shop-collections/:collectionName" element={<Products />} />
              <Route path="/shop-collections/:collectionName/:collectionId" element={<Product />} />

              
              <Route path="*" element={<NotFound />}></Route>

            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
