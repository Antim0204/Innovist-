import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";
import BannerList from "../../../shared/banner";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    load();
  }, []);

  return (
    <div style={styles.wrapper}>
      <BannerList />

      <div style={styles.container}>
        <h2 style={styles.heading}>All Products</h2>

        <div style={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
  },

  container: {
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto", 
  },

  heading: {
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },
};

export default ProductListPage;