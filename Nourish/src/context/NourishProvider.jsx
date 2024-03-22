import React from "react";
import { useState, useEffect } from "react";
import { handleFetch } from "../utils";
import NourishContext from "./NourishContext";

const NourishProvider = ({children}) => {

  const [categories, setCategory] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      const [data, error] = await handleFetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      if (data) setCategory(data.categories)
      if (error) setError(error.message)
    }
    fetchCategories();
  }, []);

  const contextValues = { categories, error }

  return (
    <div>
       <NourishContext.Provider value={contextValues}> 
            { children }
        </NourishContext.Provider> 
    </div>
  )
}

export default NourishProvider