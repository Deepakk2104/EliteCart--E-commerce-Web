import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Nopage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<Productinfo />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProduct />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </main>
  );
}

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "testadmin@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
