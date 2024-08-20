import './App.css';
import { useState, useEffect } from 'react';
import { API_KEY, HASH } from './config.js';
import fetchData from './utils/fetchData.js';
import GifSearch from './components/GifSearch'

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('pikachu'); // Default query or dynamic value

  const API = `https://pokeapi.co/api/v2/pokemon/${query}/`;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the response as JSON
        setPokemonList([data]); // Update state with the fetched Pokémon data
      } catch (error) {
        setError(error.message); // Update state with any errors encountered during fetching
      }
    };

    fetchPokemon(); // Call the function to fetch Pokémon data
  }, [API]); // Dependency array includes API to refetch when it changes

  useEffect(() => {
    console.log(pokemonList); // Log to check what's happening
  }, [pokemonList]);

  return (
    <>
      <div className="homepage">
      <GifSearch setQuery = {setQuery} />
        <h1>Pokémon API</h1>
        <button onClick={() => setQuery('charizard')}>Fetch Charizard</button>
        <div>
          {error && <p className="error">{error}</p>}
          {pokemonList.length > 0 && (
            <div>
              <h2>{pokemonList[0].name}</h2>
              <img src={pokemonList[0].sprites.front_default} alt={pokemonList[0].name} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
