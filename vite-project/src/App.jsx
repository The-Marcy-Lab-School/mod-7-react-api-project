import { useEffect, useState } from 'react'
import { handleFetch } from './utils.js';
import { API_ID, API_KEY } from './config.js'
import NavBar from './components/NavBar.jsx';
import './App.css'


function App() {
  const [data, setData] = useState({})

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
    <div>
      <NavBar color='black' title="Nourish" />
      <h1>Nourish</h1>
      <h2>Wellness Starts at the Stomach</h2>
      <div className="ui container"></div>
    </div>
  );
}

export default App;


