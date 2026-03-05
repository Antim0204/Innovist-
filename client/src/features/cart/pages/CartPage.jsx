import { useAtom } from "jotai";
import {
  cartAtom,
  updateQuantityAtom,
  totalAtom,
  discountAtom,
} from "../atoms";
import { useNavigate } from "react-router-dom";
import "../styles/CartSC.css";

const CartPage = () => {
  const [cart] = useAtom(cartAtom);
  const [, updateQty] = useAtom(updateQuantityAtom);
  const [total] = useAtom(totalAtom);
  const [discount, setDiscount] = useAtom(discountAtom);
  const navigate = useNavigate();

  const applyDiscount = (code) => {
    if (code === "SAVE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const finalTotal = total - total * discount;
console.error('carttt',cart)
  return (
    <div className="cartsc-container">
      <h2 className="cartsc-title">
        <i className="fa-solid fa-cart-shopping"></i> Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="cartsc-empty">Your cart is empty</p>
      ) : (
        <div className="cart-layout">
          {/* LEFT SIDE - ITEMS */}
          <div className="cartsc-items">
            {cart.map((item) => (
              <div key={item.productId} className="cartsc-item">
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="cartsc-img"
                />

                <div className="cartsc-details">
                  <h4>{item.name}</h4>
                  <p className="cartsc-price">₹ {item.price}</p>

                  <div className="cartsc-qty">
                    <button
                      onClick={() =>
                        updateQty({
                          productId: item.productId,
                          type: "decrease",
                        })
                      }
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQty({
                          productId: item.productId,
                          type: "increase",
                        })
                      }
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>

                  <p className="cartsc-subtotal">
                    Subtotal: ₹ {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="cartsc-summary">
            <h3>Price Details</h3>

            <div className="summary-row">
              <span>Price ({cart.length} items)</span>
              <span>₹ {total}</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span>- ₹ {Math.floor(total * discount).toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span className="free">FREE</span>
            </div>

            <div className="divider"></div>

            <div className="summary-row final">
              <span>Total Payable</span>
              <span>₹ {finalTotal}</span>
            </div>

            <input
              className="cartsc-input"
              placeholder="Apply Coupon (SAVE10)"
              onBlur={(e) => applyDiscount(e.target.value)}
            />

            <button
              className="cartsc-checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              <i className="fa-solid fa-lock"></i> Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;