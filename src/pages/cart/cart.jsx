import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/layout";
import Modal from "../../components/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartslice";

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // Scroll to top when Cart loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const deletecart = (item) => {
    dispatch(deleteFromCart(item));
    toastr.success("Item deleted from cart");
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate total amount
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp += parseInt(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = 100;
  const grandTotal = shipping + totalAmount;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (!name || !address || !pincode || !phoneNumber) {
      return toast.error("All fields are required");
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: "rzp_test_V89JBXB2PKeyLQ",
      amount: grandTotal * 100,
      currency: "INR",
      name: "EliteCart",
      description: "Test Payment",
      handler: function (response) {
        toast.success("Payment Successful");

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          addDoc(collection(fireDB, "orders"), orderInfo);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Layout>
      <div
        className="min-h-screen bg-gray-100 pt-10 pb-20"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-3xl font-bold">Your Cart</h1>

        <div className="mx-auto max-w-6xl px-6 md:flex md:space-x-6">
          {/* LEFT SIDE - CART ITEMS */}
          <div className="md:w-2/3 space-y-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-lg">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between rounded-lg border bg-white p-6 shadow-lg"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt="product"
                    className="w-full sm:w-40 rounded-lg"
                  />

                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between mt-4 sm:mt-0">
                    <div>
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <p className="text-sm mt-1">{item.description}</p>
                      <p className="mt-2 text-sm font-semibold">
                        ₹ {item.price}
                      </p>
                    </div>

                    <button
                      onClick={() => deletecart(item)}
                      className="text-red-500 mt-4 sm:mt-0 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE - PRICE SUMMARY */}
          <div
            className="mt-10 md:mt-0 md:w-1/3 h-fit rounded-lg border bg-white p-6 shadow-lg"
            style={{
              backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
            }}
          >
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>₹ {totalAmount}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Shipping</p>
              <p>₹ {shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-6">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">₹ {grandTotal}</p>
            </div>

            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
