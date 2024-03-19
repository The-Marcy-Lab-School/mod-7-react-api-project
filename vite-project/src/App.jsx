import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const API_ID = "425ba0eb";
  const API_KEY = "d143317f1c6250032f67cc9e876a4b19";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.edamam.com/api/recipes/v2/?type=public&app_id=${API_ID}&app_key=%20${API_KEY}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Recipe Data:', data);
      } catch (error) {
        console.error('Error:', error.message);
        // Handle errors gracefully
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <h1>Welcome!</h1>
  );
}

export default App;
