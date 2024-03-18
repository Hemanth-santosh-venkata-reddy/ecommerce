import "./App.scss";
import NavbarHeader from "./components/navbar/NavbarHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/Women" element={<ShopCategory category="women" />} />
          <Route path="/Kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
