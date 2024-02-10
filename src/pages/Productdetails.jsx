import "./CSS/productdetails.css"
const Productdetails = () => {
    return (
        <div className="topSpacing">
            <div className="productDetails-container">
                <div className="left-container">
                    <img src="https://www.petsy.online/cdn/shop/products/Untitleddesign_21_502x502.jpg?v=1676372860" alt="" />
                </div>
                <div className="rigt-container">
                    <div className="product-name">
                        Pedigree Adult Dry Dog Food - Chicken & Vegetables
                    </div>
                    <div className="price productdetails-price">
                        <div className="oldPrice"> ₹ 299</div>
                        <div className="newprice">₹ 269</div>
                    </div>
                    <button className="btn btn-danger card-btn">Add to Cart</button>
                    <div className="aboutProductHeading">About Product</div>
                    <div className="aboutProductDescription">
                        Our tulip fantasy planter is beautiful in its simplicity. The minimalist design with carefully handcrafted shape means its the best fit for your plants while also elevating the decor of your home. Made of premium grade ceramic, the planter sports the silkiest glaze you will ever come across in planters. This indoor planter has a weighted base with a proper drainage hole for good plant health. a perfect fit for any home and a great choice for every plant.
                    </div>

                    <div className="product-featureCOntainer">  
                    <div className="shipping">
                        <img src="https://greenlandorganicfarms.com/shipping.png" alt="" />
                        <div className="feature">
                        Fast Shipping
                        </div>
                    </div>
                    <div className="shipping">
                        <img src="https://greenlandorganicfarms.com/customer.png" alt="" />
                        <div className="feature">
                        10K+ Happy Customer
                        </div>
                    </div>
                    <div className="shipping">
                        <img src="	https://greenlandorganicfarms.com/handpicked.png" alt="" />
                        <div className="feature">
                        Hand Picked Items
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Productdetails;