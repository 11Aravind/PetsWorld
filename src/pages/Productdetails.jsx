import { Link } from "react-router-dom";
import "./CSS/productdetails.css"
const Productdetails = () => {
    const productFeature = [
        {
            url: "https://greenlandorganicfarms.com/shipping.png",
            description: "Fast Shipping"
        },
        {
            url: "https://greenlandorganicfarms.com/customer.png",
            description: "10K+ Happy Customer"
        },
        {
            url: "https://greenlandorganicfarms.com/handpicked.png",
            description: "Hand Picked Items"
        },
    ];
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
                    <Link to="/cart">
                    <button className="btn btn-danger card-btn">Add to Cart</button>
                    </Link>
                    <div className="aboutProductHeading">About Product</div>
                    <div className="aboutProductDescription">
                        Our tulip fantasy planter is beautiful in its simplicity. The minimalist design with carefully handcrafted shape means its the best fit for your plants while also elevating the decor of your home. Made of premium grade ceramic, the planter sports the silkiest glaze you will ever come across in planters. This indoor planter has a weighted base with a proper drainage hole for good plant health. a perfect fit for any home and a great choice for every plant.
                    </div>

                    <div className="product-featureCOntainer">
                        {
                            productFeature.map((feature, index) =>
                                <div className="shipping">
                                    <img src={feature.url} alt="" />
                                    <div className="feature">
                                        {feature.description}
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Productdetails;