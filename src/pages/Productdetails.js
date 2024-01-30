import "./CSS/productdetails.css"
const Productdetails=()=>{
    return(
        <div className="topSpacing">
            <div className="productDetails-container">
            <div className="left-container">
                <img src="https://www.petsy.online/cdn/shop/products/Untitleddesign_21_502x502.jpg?v=1676372860" alt="" />
            </div>
            <div className="rigt-container">
                <div className="product-title">
                Pedigree Adult Dry Dog Food - Chicken & Vegetables
                </div>
                <div className="price">
                    <div className="newPrice">₹ 269</div>
                    <div className="oldPrice"> ₹ 299</div>
                    (inclusive of all taxes)

                </div>
                    <button className="btn-cart">Add to Cart</button>
            </div>
            </div>
        </div>
    );
}
export default Productdetails;