import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { handleFetch } from "../utils";

const API = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const NavBar = () => {
    // const categoryFetch =  fetch categories
    const [categories, setCategory] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCategories = async () => {
        const [data, error] = await handleFetch(API)
          if (data) setCategory(data.categories)
          if (error) setError(error.message)
        }
      fetchCategories();
      }, []);

      console.log(categories)

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                    <div className="dropdown">
                        <span>Categories</span>
                        <div className="dropdown-content">
                            {categories.length > 0 && categories.map((category, index) => (
                                <li key={index}>
                                    <Link to={`/category/${category.strCategory}`}>
                                        {category.strCategory}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                <li>
                    <Link to='/allmeals'>All Meals</Link>
                </li>
            </ul>
        </nav>
    )
}

//*We fetch the categories from the API using useEffect.
//*We render each category as a list item (<li>) with a link (<Link>) to a route that includes the category name in the URL.

export default NavBar