import { handleFetch } from "../utils"
import { useContext, useEffect, useState } from "react"

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState([])

    const idMeal = '53042'

    useEffect(() => {
        const fetchRecipe = async () => {
            const [data, error] = await handleFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            if (data) setRecipe(data.meals)
            if (error) setError(error.message)
        }
        fetchRecipe();
    })
    
    return (
        <div>
            <h1>{recipe[0].strMeal}</h1>
            <p>{recipe[0].strInstructions}</p>
            <p>Ingredients:</p>
            <ul>
                {
                    
                }
            </ul>
        </div>
    )
}

export default RecipeDetails