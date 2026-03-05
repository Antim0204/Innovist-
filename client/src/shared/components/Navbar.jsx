import { Link, useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { cartCountAtom } from "../../features/cart/atoms";
import "../styles/Navbar.css";

const Navbar = () => {
  const count = useAtomValue(cartCountAtom);
  const navigate = useNavigate()
  return (
    <>
      <div className="topbar">
        <div className="logo" onClick={()=>{
          navigate('/')
        }}>INNOVIST</div>

        <div className="search-box">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search For HairFall" />
        </div>

        <div className="icons">
          <i className="fa fa-location-dot"></i>
          <i className="fa fa-bolt"></i>
          <Link to="/cart" className="cart-icon">
            <i className="fa fa-bag-shopping"></i>
            <span className="cart-count">{count}</span>
          </Link>
        </div>
      </div>

      <div className="menu-bar">
        <div className="menu-item">
          Best Sellers <i className="fa fa-chevron-down small-icon"></i>
          <div className="dropdown">
            <Link to="/bare">Bare Anatomy Bestsellers</Link>
            <Link to="/chemist">Chemist At Play Bestsellers</Link>
            <Link to="/sun">SunScoop Bestsellers</Link>
          </div>
        </div>

        <Link to="/new">New Launches</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/concerns">Concerns</Link>
        <Link to="/hair">Hair Care</Link>
        <Link to="/skin">Skin Care</Link>
        <Link to="/sun-care">Sun Care</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/about">About us</Link>
      </div>
    </>
  );
};

export default Navbar;