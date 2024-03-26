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
      dispatch(fetchAndStore(data))
      console.log(data);
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
