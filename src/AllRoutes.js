//manage all router and display the router menu
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Foods from "./pages/Foods";
import Accessorys from "./pages/Accessorys";
const routerInfo=[
{
    path:"/",
    component:<Home/>,
},
{
    path:"/pets",
    component:<Pets/>
},
{
    path:"/foods",
    component:<Foods/>
},
{
    path:"/accessorys",
    component:<Accessorys/>
}
];
const AllRouter=()=>{
    return(
<div>
    <h1>All routerr component</h1>
</div>
    );
}
export default AllRouter;