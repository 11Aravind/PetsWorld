import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
const Navbar = () => {
    const menus = [
        {
            menu: 'Pets',
            to: "/Pets"
        },
        {
            menu: 'Food',
            to: "/foods"
        },
        {
            menu: 'Accessorys',
            to: "/accessorys"
        },
        {
            menu: 'Contact',
            to: "/accessorys"
        },
    ];
    return (
        <nav className="navbar">
            <div className="navbar-container crossBtn">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    {
                        menus.map((menu, id) => {
                            return (
                                <li><Link key={id} to={menu.to} className="menu">{menu.menu}</Link></li>
                            );
                        })
                    }
                    {/* <li><span className="menu">About</span></li>
                    <li><span className="menu">Category</span></li>
                    <li><span className="menu">Menu</span></li>
                    <li><span className="menu">Testimonial</span></li>
                    <li><span className="menu">Contact</span></li> */}
                </ul>
                <h1 className="logo">PetsWorld</h1>
            </div>
        </nav>

    );
}
export default Navbar;