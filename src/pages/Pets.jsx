import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Pets = () => {
    const products = useSelector((state) => state.products.productList);
    return (
        <div className="topSpacing">
            <h1 className="headding">New Products</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    products.map((singleProduct, index) => {
                        return (
                            <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <Link to="/productdetails" className="card-link">
                                    <div className="card h-100">
                                        <div className="img-container">
                                            <img src={`http://localhost:5000/${singleProduct.image}`} className="card-img-top product-image" alt="..." />
                                            <button className="options-btn">view option</button>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-title">{singleProduct.name}</div>
                                            <div className="price">
                                                <div className="oldPrice">₹{singleProduct.oldPrice}</div>
                                                <div className="newprice">₹{singleProduct.newPrice}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Pets;