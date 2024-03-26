import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Pets = () => {
const products=useSelector((state)=>state.products.productList);

    // const petsDetails = [
    //     {
    //         image: "https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/s/e/seer_fish_whole_1_1.jpg",
    //         name: "Royal Canin Maxi Puppy Dry Dog Food",
    //         description: "description",
    //         oldPrice: 400,
    //         newPrice: 300
    //     },
    //     {
    //         image: "./photo.png",
    //         name: "Royal Canin Mini Adult Dry Dog Food",
    //         description: "description",
    //         oldPrice: 400,
    //         newPrice: 300
    //     },
    //     {
    //         image: "https://www.petsy.online/cdn/shop/products/1_1b62165f-ddaf-440a-9138-568d1dc5e31d_502x502.png?v=1607684924",
    //         name: "Pedigree Adult Dry Dog Food - Meat and Rice",
    //         description: "description",
    //         oldPrice: 400,
    //         newPrice: 300
    //     },
    //     {
    //         image: "https://www.petsy.online/cdn/shop/products/UPGRADEDFORMULANEWIMPACTFULPROVENRESULTS_4_223x223.png?v=1607769322",
    //         name: "Drools Dry Dog Food - Chicken and Egg",
    //         description: "description",
    //         oldPrice: 400,
    //         newPrice: 300
    //     },
    //     {
    //         image: "https://www.petsy.online/cdn/shop/products/Petkin_Mega_Value_Petwipes_200_Wipes_-D-PKI-HH-003-200pc_223x223.png?v=1582222479",
    //         name: "Pedigree Puppy Wet Dog Food, Chicken Chunks in Gravy, 70 g (Pack of 15)",
    //         description: "description",
    //         oldPrice: 400,
    //         newPrice: 300
    //     },
    //     {
    //         image: "https://www.petsy.online/cdn/shop/files/rc_spt_dry_maxipuppy_b1_page_02_0_223x223.jpg?v=1701411894",
    //         name: "Arden Grange Adult (Small and Medium Breed) Dry Dog Food - Fresh chicken and Rice",
    //         description: "description",
    //         oldPrice: 400,
    //         newPrice: 300
    //     },
    // ]
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
                                        <img src={singleProduct.image} className="card-img-top product-image" alt="..." />
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