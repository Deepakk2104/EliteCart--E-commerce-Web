import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fireDB } from "../../components/firebase/firebaseconfig";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  deleteDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";

function MyState(props) {
  // ---------------------------------------------------------
  // THEME MODE
  // ---------------------------------------------------------
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  // ---------------------------------------------------------
  // PRODUCT STATE
  // ---------------------------------------------------------
  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [product, setProduct] = useState([]);

  // ⭐ REAL-TIME PRODUCTS LISTENER
  const getProductData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const arr = [];
        snapshot.forEach((doc) => {
          arr.push({ ...doc.data(), id: doc.id });
        });
        setProduct(arr);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ADD PRODUCT
  const addProduct = async () => {
    if (
      !products.title ||
      !products.price ||
      !products.imageUrl ||
      !products.category ||
      !products.description
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      await addDoc(collection(fireDB, "products"), products);
      toast.success("Product added successfully");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 700);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // EDIT PRODUCT
  const edithandle = (item) => {
    setProducts(item);
  };

  // UPDATE PRODUCT
  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product updated");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 700);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // DELETE PRODUCT
  const deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product deleted");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // ---------------------------------------------------------
  // REAL-TIME ORDERS (FULLY FIXED)
  // ---------------------------------------------------------
  const [order, setOrder] = useState([]);

  const getOrderData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "orders"), orderBy("date", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const arr = [];
        snapshot.forEach((doc) => {
          arr.push({ ...doc.data(), id: doc.id });
        });
        setOrder(arr);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // USERS (ONE-TIME FETCH — NOT REAL-TIME)
  // ---------------------------------------------------------
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true);
    try {
      const res = await getDocs(collection(fireDB, "users"));
      const arr = [];
      res.forEach((doc) => arr.push(doc.data()));

      setUser(arr);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // MOUNT REAL-TIME LISTENERS
  // ---------------------------------------------------------
  useEffect(() => {
    const unsubProducts = getProductData();
    const unsubOrders = getOrderData();
    getUserData();

    return () => {
      if (typeof unsubProducts === "function") unsubProducts();
      if (typeof unsubOrders === "function") unsubOrders();
    };
  }, []);

  // ---------------------------------------------------------
  // SEARCH AND FILTERS
  // ---------------------------------------------------------
  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  // ---------------------------------------------------------
  // PROVIDER EXPORT
  // ---------------------------------------------------------
  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,

        // products
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
        updateProduct,
        deleteProduct,

        // orders
        order,

        // users
        user,

        // filters
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
