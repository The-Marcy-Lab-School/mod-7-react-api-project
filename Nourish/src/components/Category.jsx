import { useParams } from "react-router-dom"
import { useContext } from "react";
import NourishContext from "../context/NourishContext";

const Category = () => {
    const { id } = useParams;
    const { categories } = useContext(NourishContext);
    // console.log(categories)
    const category = categories.find(category => {
        console.log(category)
        console.log(category.idCategory)
        return category.idCategory == Number(id)
    });

    if (!categories || categories.length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <h1>Here is all your { category } meals</h1>
        </div>
    )
}

export default Category