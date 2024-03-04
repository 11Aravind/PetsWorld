import { Link } from "react-router-dom"
const Pets = () => {
    const petsDetails = [
        {
            url: "https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/s/e/seer_fish_whole_1_1.jpg",
            petName: "Royal Canin Maxi Puppy Dry Dog Food",
            description: "description",
            oldPrice: 400,
            newPrice: 300
        },
        {
            url: "./photo.png",
            petName: "Royal Canin Mini Adult Dry Dog Food",
            description: "description",
            oldPrice: 400,
            newPrice: 300
        },
        {
            url: "https://www.petsy.online/cdn/shop/products/1_1b62165f-ddaf-440a-9138-568d1dc5e31d_502x502.png?v=1607684924",
            petName: "Pedigree Adult Dry Dog Food - Meat and Rice",
            description: "description",
            oldPrice: 400,
            newPrice: 300
        },
        {
            url: "https://www.petsy.online/cdn/shop/products/UPGRADEDFORMULANEWIMPACTFULPROVENRESULTS_4_223x223.png?v=1607769322",
            petName: "Drools Dry Dog Food - Chicken and Egg",
            description: "description",
            oldPrice: 400,
            newPrice: 300
        },
        {
            url: "https://www.petsy.online/cdn/shop/products/Petkin_Mega_Value_Petwipes_200_Wipes_-D-PKI-HH-003-200pc_223x223.png?v=1582222479",
            petName: "Pedigree Puppy Wet Dog Food, Chicken Chunks in Gravy, 70 g (Pack of 15)",
            description: "description",
            oldPrice: 400,
            newPrice: 300
        },
        {
            url: "https://www.petsy.online/cdn/shop/files/rc_spt_dry_maxipuppy_b1_page_02_0_223x223.jpg?v=1701411894",
            petName: "Arden Grange Adult (Small and Medium Breed) Dry Dog Food - Fresh chicken and Rice",
            description: "description",
            oldPrice: 400,
            newPrice: 300
        },
    ]
    return (
        <div className="topSpacing"> 
            <h1 className="collection-title">New Products</h1>
            <div className="row row-cols-1 row-cols-sm-2 g-4">
                {
                    petsDetails.map((singleProduct, index) => {
                        return (
                            <div className="col-6" key={index}>
                                    <Link to="/productdetails">
                                    <div className="card h-100">
                                       <div className="img-container">
                                       <img src={singleProduct.url} className="card-img-top product-image" alt="..." />
                                        <button className="options-btn">view option</button>
                                       </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{singleProduct.petName}</h5>

                                            <div className="price">
                                                <div className="oldPrice">₹{singleProduct.oldPrice}</div>
                                                <div className="newprice">₹{singleProduct.newPrice}</div>
                                            </div>
                                            {/* <button className="btn btn-danger card-btn">View</button> */}
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