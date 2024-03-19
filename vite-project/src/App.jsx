import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const API_ID = "5d72eebc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.edamam.com/api/meal-planner/v1/${API_ID}/select`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Edamam-Account-User': 'domtuz1'
          },
          body: JSON.stringify({
            "plan": {
              "accept": {
                "all": [
                  {
                    "health": [
                      "SOY_FREE",
                      "FISH_FREE",
                      "MEDITERRANEAN"
                    ]
                  }
                ]
              }
            }
          })
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Meal plan data:', data);
      } catch (error) {
        console.error('Error:', error.message);
        // Handle errors gracefully
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <h1>hello</h1>
  );
}

export default App;
