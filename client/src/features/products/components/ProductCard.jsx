import { useNavigate } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import {
  addToCartAtom,
  updateQuantityAtom,
  cartAtom,
} from "../../cart/atoms";
import { useState } from "react";
import "../styles/Product.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const addToCart = useSetAtom(addToCartAtom);
  const updateQty = useSetAtom(updateQuantityAtom);
  const cart = useAtomValue(cartAtom);

  const [loading, setLoading] = useState(false);

  const existingItem = cart.find(
    (item) => item.productId === product._id
  );

  const quantity = existingItem ? existingItem.quantity : 0;

  const handleAdd = async (e) => {
    e.stopPropagation(); // prevent card navigation
    setLoading(true);

    // simulate small delay for UX
    setTimeout(() => {
      addToCart({
        productId: product._id,
        name: product.name,
        image: product.image,
        description: product.description,
        price: Number(product.price),
      });
      setLoading(false);
    }, 400);
  };

  const increase = (e) => {
    e.stopPropagation();
    updateQty({ productId: product._id, type: "increase" });
  };

  const decrease = (e) => {
    e.stopPropagation();
    updateQty({ productId: product._id, type: "decrease" });
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-name">{product.name}</div>
      <div className="product-price">₹ {product.price}</div>

      {quantity > 0 ? (
        <div
          className="cart-controls"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="qty-btn" onClick={decrease}>
            –
          </button>

          <span className="qty-count">{quantity}</span>

          <button className="qty-btn" onClick={increase}>
            +
          </button>
        </div>
      ) : (
        <button
          className={`add-btn ${loading ? "loading" : ""}`}
          onClick={handleAdd}
        >
          {loading ? <div className="loader" /> : "Add to Cart"}
        </button>
      )}
    </div>
  );
};

export default ProductCard;