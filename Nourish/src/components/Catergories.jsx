import NourishContext from "../context/NourishContext";
import { useState, useEffect } from 'react';

const API = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Catergories = () => {

    const [catergory, setCatergory] = useState([])

    const handleClick = (e) => {

    }

    useEffect(() => {
        const fetchData = async () => {
          const [data, error] = await handleFetch(API)
          if (data) setData(data)
          if (error) setError(error.message)
        }
      fetchData();
      }, []);

    return (
        <div>
            <select name="catergories" id="catergories">
            
            </select>
        </div>
    )
}

export default Catergories
