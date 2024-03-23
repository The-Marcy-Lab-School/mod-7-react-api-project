import React from 'react'
import { useParams } from "react-router-dom"

const MealList = ({ meals }) => {
    const { id } = useParams()

    if (!meals) {
        return <div>Loading...</div>;
    }

    console.log('meals', meals)

    // const categoryMeals = meals.filter(meal => meal.strCategory === Number(id))

    return (
        <div className='container'> //*layer the cards in direction right coloum 
        //*create a swipe through meals effect one card at a time on all meals page
            <div className="card">
            {meals.map(meal => (
                <div key={meal.idMeal} className='card'>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <div className='card-body'>
                        <h5 className='card-title'>{meal.strMeal}</h5>
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
}

export default MealList;