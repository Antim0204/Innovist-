import { useAtom, useSetAtom } from "jotai";
import { totalAtom, discountAtom, cartAtom } from "../atoms";
import { useState } from "react";
import "../styles/CartSC.css";

const CheckoutPage = () => {
  const [total] = useAtom(totalAtom);
  const [discount] = useAtom(discountAtom);
  const setCart = useSetAtom(cartAtom);

  const [status, setStatus] = useState("idle");

  const finalTotal = total - total * discount;

  const handlePayment = () => {
    setStatus("processing");

    setTimeout(() => {
      setStatus("success");
      setCart([]);
      localStorage.removeItem("cart");
    }, 3500);
  };

  return (
    <div className="cartsc-container">
      <h2 className="cartsc-title">
        <i className="fa-solid fa-credit-card"></i> Secure Checkout
      </h2>

      <div className={`cartsc-checkout-box ${status}`}>
        
        {status === "idle" && (
          <>
            <h3>Ready to Complete Your Purchase?</h3>
            <br />
            <p className="checkout-desc">
              Your items are secured. Click below to proceed to our safe and encrypted payment gateway.
            </p>

            <button className="cartsc-pay-btn" onClick={handlePayment}>
              <i className="fa-solid fa-lock"></i> Pay ₹ {finalTotal}
            </button>
          </>
        )}

        {status === "processing" && (
          <div className="payment-processing">
            <div className="pg-loader"></div>
            <p>
              <i className="fa-solid fa-arrow-right"></i> Redirecting to secure payment gateway...
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="payment-success">
            <div className="success-icon">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3>Payment Successful!</h3>
            <p>Your order has been placed successfully 🎉</p>
            <br />
            <br />
            <p className="order-info">

              A confirmation email and invoice have been sent to your registered email address.
            </p>

            <button
              className="cartsc-pay-btn"
              onClick={() => (window.location.href = "/")}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;