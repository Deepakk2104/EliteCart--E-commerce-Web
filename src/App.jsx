import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import AllProducts from "./pages/allproducts/allproducts";
import Cart from "./pages/cart/cart";
import Order from "./pages/order/order";
import Nopage from "./pages/nopage/nopage";
import Dashboard from "./pages/admin/dashboard/dashboard";
import MyState from "./context/data/myState";
import Login from "./pages/registration/login";
import Signup from "./pages/registration/signup";
import Productinfo from "./pages/productinfo/productinfo";
import UpdateProduct from "./pages/admin/page/updateproduct";
import AddProduct from "./pages/admin/page/addproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <main>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Nopage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<Productinfo />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </main>
  );
}