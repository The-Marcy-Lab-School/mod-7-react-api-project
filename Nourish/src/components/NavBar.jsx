import Categories from "./Categories"
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/categories'>Categories</Link>
                </li>
                <li>
                    <Link to='/allmeals'>All Meals</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar