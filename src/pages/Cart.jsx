import "./CSS/Cart.css";
import Quantitybtn from "../component/Quantitybtn"
const Cart = () => {
  return (
    <div className="cart-row">
      <div className="cart-container">
        <div className="cart-img">
          <img src="	https://www.petsy.online/cdn/shop/products/Untitleddesign_23_223x223.jpg?v=1676372860" alt="" />
        </div>
        <div className="cart-details">
        <div className="cart-description">
        Pedigree Adult Dry Dog Food - Chicken & Vegetables
        </div>
        <div className="cart-price">
        ₹789
        </div>
        <div className="quantitybtn">
          <Quantitybtn />
        </div>
        </div>
      </div>
      <button className="addToCartBtn" style={{width: "100%"}}>CHECKOUT -  ₹789</button>
    </div>
  )
}
export default Cart;
// Quantitybtn