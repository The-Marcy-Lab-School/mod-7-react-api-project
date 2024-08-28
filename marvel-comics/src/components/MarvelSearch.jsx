// src/components/MarvelSearch.jsx
import { useCharacter } from '../App'; // Adjust the import path as needed
import CharacterDisplay from './CharacterDisplay'
import { useState, useEffect, createContext, useContext } from 'react';
import { API_KEY, HASH } from '../config.js';
import fetchData from '../components/Fetch.jsx';
// import EventDisplay from './EventDisplay.jsx'

const MarvelSearch = () => {
    const [query, setQuery] = useState('thor'); // Default query
    const [loading, setLoading] = useState(false); // Add loading state

    //const { searchCharacter } = useCharacter();
    const { error, characters, setError, setCharacters } = useCharacter();
    const handleSearch = (e) => {
        e.preventDefault();
        const newQuery = e.target.elements.query.value.trim();
        setQuery(newQuery);
    };

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
                console.log('loading complete')
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchCharacters();
    }, [query]); // Fetch new data when query changes



    return (
        <>
            <form onSubmit={handleSearch}>
                <input className="inputBar" type="text" name="query" placeholder="Search for a character" />
                <button className="search-button" type="submit">Search</button>
            </form>
            {loading && <p>Loading in progress...</p>} {/* Display loading message */}
            {error && <p className="error">{error}</p>} {/* Render error message if there's an error */}
            {!loading && !error && characters.length === 0 && <p>No character found</p>} {/* Display if no character is found */}
            <CharacterDisplay /> {/* Render the CharacterDisplay component */}
            {/* <EventDisplay /> */}
            {/* //fetch handle
            usefefect */}

        </>
    );
};

export default MarvelSearch;
