import { handleFetch } from "../utils"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState([])
    const { id } = useParams();

    const ingredientsParser = (recipe) => {
        
        // const istElements = []
        // for (let i = 1; i < 20; i++) {
        //     const ingredient = recipe[0][`strIngredient${i}`];
        //     if (!ingredient) break
            
        //     listElements.push (
        //          <li key={i}>{ingredient}</li>} 
        //         }
        //      )
        
        // return ListElements
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
        <div className="recipe-container">
            <h1>{recipe[0].strMeal}</h1>
            
            <img id="picture" src={recipe[0].strMealThumb} alt="meal-pic" />
            <p id="instructions">{recipe[0].strInstructions}</p>
            <p>Ingredients:</p>
            <ul>
                {
                    ingredientsParser
                }
            </ul>
            
        </div>
    )
}

export default RecipeDetails