import { handleFetch } from "../utils"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState([])
    const { id } = useParams();

    const ingredientsParser = (recipe) => {
        
        const listElements = []
        for (let i = 1; i < 20; i++) {
            recipe[0][`strIngrediant${i}`]
            if (ingredients = '') break
            
            listElements.push(
                <li>
                    {strIngredients[i]}
                </li>
            )
        }
    }

    useEffect(() => {
        const fetchRecipe = async () => {
            const [data, error] = await handleFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            console.log('ANY DATA?', data)
            if (data) setRecipe(data.meals)
            if (error) setError(error.message)
        }
        fetchRecipe();
    }, [])

    if (!recipe || recipe.length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <h1>{recipe[0].strMeal}</h1>
            <img src={recipe[0].strMealThumb} alt="meal-pic" />
            <p>{recipe[0].strInstructions}</p>
            <ul>{ ingredientsParser }</ul>
        </div>
    )
}

export default RecipeDetails