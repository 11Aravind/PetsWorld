import AllRouter from "./AllRoutes";
import Navbar from "./component/Navbar";
import { useDispatch } from "react-redux"
import { fetchAndStore } from "./Slice/productSlice"
import { useEffect } from "react";
import {httpRequest} from "./API/api"
// import Toplinks from "./component/Toplinks";
//  import Footer from "./component/Footer"
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    httpRequest('get', "api/product").then((data) => {
      if (data && Array.isArray(data.productDetails)) {
        dispatch(fetchAndStore(data.productDetails))
    } else {
        console.error("Fetched data does not contain 'productDetails' array:", data);
    }
    })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {/* <Toplinks /> */}
      <Navbar />
      <AllRouter />
      {/* <Footer/> */}
    </>
  );
}
export default App;
