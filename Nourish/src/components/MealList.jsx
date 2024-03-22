import React from 'react';
import { useContext } from 'react';
import NourishProvider from '../context/NourishProvider';
//*place coponent in category so that for each category clciked it will run meallist component which will render cards

const MealList = () => {
    const { categories } = useContext(NourishProvider);

  return (
    <div class="container">
        <div class="card">
            <img src= alt="meal-picture" />

        </div>
        
      
    </div>
  )
}

export default MealList
