import './App.css'
import { useState } from 'react';
import fetchData from './utils/fetchData'

const API = "https://gateway.marvel.com//get/v1/public/characters"

function App() {
  const [joke, setJoke] = useState();
  const [error, setError] = useState('');

  // useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await fetchData(API);
      console.log(data);
      if (data) setJoke(data);
      if (error) setError(error);
    }
    doFetch();
  // }, [])

  return (
    <>
     <div className="hompage">
      <h1>Marvel Comics</h1>
        <button>
          Enter 
        </button>
     </div>
    </>
   )
}

export default App
