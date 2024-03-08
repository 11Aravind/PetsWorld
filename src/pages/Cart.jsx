import "./CSS/Cart.css";
import Quantitybtn from "../component/Quantitybtn"
const Cart = () => {
  return (
   <>
    <div className="cart-row">
   <h3 className="main-headding">Shopping Bag</h3>
      <div className="cart-container">
        <div className="cart-img">
          <img src="	https://www.petsy.online/cdn/shop/products/Untitleddesign_23_223x223.jpg?v=1676372860" alt="" />
        </div>
        <div className="cart-details">
        <div className="cart-description">
        Pedigree Adult Dry Dog Food - Chicken & Vegetables
        <div className="cart-price">₹789</div>
        </div>
        <div className="quantitybtn">
          <Quantitybtn />
        </div>
        </div>
      </div>
      <button className="addToCartBtn" style={{width: "100%"}}>Proceed To Checkout -  ₹789</button>
    </div>
   </>
  )
}
export default Cart;
// Quantitybtn