import './App.css'
import { useState } from 'react';
import {API_KEY, HASH} from './config.js';
import fetchData from './utils/FetchData'

const API = `https://pokeapi.co/api/v2/pokemon/${value}/`

function App() {
  const [joke, setJoke] = useState();
  const [error, setError] = useState('');

   //useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await fetchData(API);
      console.log(data);
      if (data) setJoke(data);
      if (error) setError(error);
     // return
    }
    doFetch();
  // }, [])

  return (
    <>
     <div className="hompage">
      <h1>Pokemon API</h1>
        <button>
          Enter 
        </button>
     </div>
    </>
   )
}

export default App
