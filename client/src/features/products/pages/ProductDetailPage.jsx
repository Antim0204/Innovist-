import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../api";
import { useAtomValue, useSetAtom } from "jotai";
import {
  addToCartAtom,
  updateQuantityAtom,
  cartAtom,
} from "../../cart/atoms";
import "../styles/ProductDetails.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const cart = useAtomValue(cartAtom);
  const addToCart = useSetAtom(addToCartAtom);
  const updateQty = useSetAtom(updateQuantityAtom);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="pgdet-loader-container">
        <div className="pgdet-loader"></div>
      </div>
    );
  }

  const existingItem = cart.find(
    (item) => item.productId === product._id
  );

  const quantity = existingItem ? existingItem.quantity : 0;
  return (
    <div className="pgdet-container">
      <div className="pgdet-wrapper">

        <div className="pgdet-image-section">
          <button
            className="pgdet-back-btn"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <div className="pgdet-image-box">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="pgdet-info-section">
          <h1>{product.name}</h1>

          <div className="pgdet-rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <span>(124 reviews)</span>
          </div>

          <h2 className="pgdet-price">₹ {product.price}</h2>

          <p className="pgdet-description">{product.description}</p>

          {quantity > 0 ? (
            <div className="pgdet-qty-wrapper">
              <button
                className="pgdet-qty-btn"
                onClick={() =>
                  updateQty({ productId: product._id, type: "decrease" })
                }
              >
                <i className="fa-solid fa-minus"></i>
              </button>

              <span className="pgdet-qty-value">{quantity}</span>

              <button
                className="pgdet-qty-btn"
                onClick={() =>
                  updateQty({ productId: product._id, type: "increase" })
                }
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          ) : (
            <button
              className="pgdet-add-btn"
              onClick={() =>
                addToCart({
                  productId: product._id,
                  name: product.name,
                  image: product.image,
                  description: product.description,
                  price: Number(product.price),
                })
              }
            >
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          )}

          {quantity > 0 && (
            <div className="pgdet-checkout-actions">
              <button
                className="pgdet-checkout-btn"
                onClick={() => navigate("/cart")}
              >
                <i className="fa-solid fa-bag-shopping"></i>
                Proceed to Checkout
              </button>
            </div>
          )}

          <div className="pgdet-meta">
            <p><i className="fa-solid fa-truck"></i> Free Shipping</p>
            <p><i className="fa-solid fa-rotate-left"></i> 7 Days Return</p>
            <p><i className="fa-solid fa-shield-halved"></i> 100% Genuine</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;