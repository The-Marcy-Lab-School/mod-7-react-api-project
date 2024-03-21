import { handleFetch } from '../utils';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const Categories = () => {

    const { CategoryName } = useParams()
    const [ meals, setMeals ] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
          const [data, error] = await handleFetch(API + CategoryName)
          if (data) setMeals(data)
          if (error) setError(error.message)
        }
      fetchMeals();
      }, [CategoryName]);

    return (
        <div>
           <h2>Meals in {CategoryName}</h2>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
