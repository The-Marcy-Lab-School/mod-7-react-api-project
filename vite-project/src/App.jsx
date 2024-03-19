import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App ()  {
const API_ID = "b2a3335c" // meal plan id
// 5d72eebc search id
// const API_KEY = "34331af08c5a6aaa9f98764f9bd86d78"
// 5c3eb04f8453cee6c2933c9e86869b74

// const [data, setData] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.edamam.com/api/meal-planner/v1/${API_ID}/select`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Edamam-Account-User': 'amiet'
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
}, []); 


  return (
    <h1>hello</h1>
  );
}

export default App;


