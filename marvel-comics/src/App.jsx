import React, { useState, useEffect, createContext, useContext } from 'react';
import { API_KEY, HASH } from './config.js';
import fetchData from './components/Fetch.jsx'; // Adjust the import path as needed
//////
import { BrowserRouter } from 'react-router-dom'; 
import { Route, Routes } from 'react-router-dom';
///////
import About from './pages/About';
import NavBar from './components/NavBar';
import './App.css';
///////
import MarvelSearch from './components/MarvelSearch'; // Ensure this component is correctly imported
import CharacterDisplay from './components/CharacterDisplay'; // Import the CharacterDisplay component

// Create the context
const CharacterContext = createContext();

const App = () => {
  const [characters, setCharacters] = useState([]); // Change to an array to hold multiple characters
  const [error, setError] = useState('');
  const [query, setQuery] = useState('thor'); // Default query
  const [loading, setLoading] = useState(false); // Add loading state

  const API_URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&name=${query}`;

  // try-catch-finally structure
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true); // Set loading to true when starting fetch
      try {
        const data = await fetchData(API_URL);
        console.log(data)
        if (data.data.results.length > 0) {
          setCharacters(data.data.results); // Set the array of characters
          setError(''); // Clear any previous errors
        } else {
          setCharacters([]); // Clear characters if no results found
        }
      } catch (error) {
        setError(error.message);
        setCharacters([]); // Ensure characters is an empty array on error
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchCharacters();
  }, [query]); // Fetch new data when query changes

  const searchCharacter = (newQuery) => {
    setQuery(newQuery.trim());
  };

  return (
  <BrowserRouter>
    <CharacterContext.Provider value={{ characters, error, searchCharacter }}>
      <div className="homepage">
      <NavBar />
        {/* Using a nav bar in react */}
        <Routes >
          <Route path ="/pages/about" element={<About />}> </Route>
        </Routes>
        <h1 className="character-title">Marvel Gallery</h1>
          <MarvelSearch /> {/* Use MarvelSearch to handle the search */}
          {loading && <p>Loading in progress...</p>} {/* Display loading message */}
          {error && <p className="error">{error}</p>} {/* Render error message if there's an error */}
          {!loading && !error && characters.length === 0 && <p>No character found</p>} {/* Display if no character is found */}
          <CharacterDisplay /> {/* Render the CharacterDisplay component */}
      </div>
    </CharacterContext.Provider>
  </BrowserRouter>
  );
};

// Create a custom hook to use the CharacterContext
const useCharacter = () => useContext(CharacterContext);

export default App;
export { useCharacter }