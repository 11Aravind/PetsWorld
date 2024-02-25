 import AllRouter from "./AllRoutes";
 import Navbar from"./component/Navbar";
 import Toplinks from "./component/Toplinks";
//  import Footer from "./component/Footer"
 const App=()=> {
  return (
 <>
 <Toplinks />
  <Navbar/>
  <AllRouter/>
  {/* <Footer/> */}
 </>
  );
}
export default App;
