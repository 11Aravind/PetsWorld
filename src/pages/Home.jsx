import ImageSlider from "../component/ImageSlider";
import {Cardslider} from "../component/ImageSlider";
import Categorylist from "../component/Categorylist";
import MyCarousel  from "../component/CarouselComponent";
const Home = () => {
    const newProducts = [
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
      <div className="container">
        <ImageSlider />
            <h1 className="headding">Our Categorys</h1>
            <Categorylist/>
            <h1 className="headding">Pet-tastic Deals</h1>
            {/* <MyCarousel  items={newProducts}/> */}
            <Cardslider />
      </div>
    );
}
export default Home;