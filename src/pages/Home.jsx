import ImageSlider from "../component/ImageSlider";
import {Cardslider} from "../component/ImageSlider";
import Categorylist from "../component/Categorylist";

const Home = () => {
    return (
      
<>
<ImageSlider/>
{/* <Categorylist/> */}
<h1 className="home-section--title">Pet-tastic Deals</h1>
<Cardslider/>
</>

            // </div>
    );
}
export default Home;