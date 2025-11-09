import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

function ProtectedRoute({ children, adminOnly = false }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // If no user is logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If route is admin-only but user is not admin
  if (adminOnly && user?.user?.email !== "testadmin@gmail.com") {
    return <Navigate to="/" />;
  }

  // Otherwise allow access
  return children;
}

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
                <ProtectedRoute adminOnly>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute adminOnly>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<Productinfo />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedRoute adminOnly>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRoute adminOnly>
                  <UpdateProduct />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<Nopage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </main>
  );
}
