import '../App.css';
import { useComic } from '../App'; // Import the custom hook to access context
import ComicDisplay from '../components/ComicDisplay';
import { useState, useEffect } from 'react';
import { API_KEY, HASH } from '../config.js';
import fetchData from '../components/Fetch.jsx'; // Ensure fetchData is properly implemented

// Example list of character IDs (Replace these with actual IDs you want to use)
const CHARACTER_IDS = [
  1009351, // Hulk
  1009220, // Captain America
  1009281, // Doctor Doom
  1009282, // 


];

const getRandomItem = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const MarvelGallery = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { comics, setComics, setError: setContextError } = useComic(); // Use ComicContext

  useEffect(() => {
    const fetchComics = async () => {
      setLoading(true);
      try {
        // Step 1: Select a random character ID
        const randomCharacterId = getRandomItem(CHARACTER_IDS);

        // Step 2: Fetch comics for the selected character
        const comicsURL = `http://gateway.marvel.com/v1/public/characters/${randomCharacterId}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`;
        const comicsResponse = await fetchData(comicsURL);
        const comicsData = comicsResponse.data.results;

        if (comicsData.length > 0) {
          setComics(comicsData);
          setContextError('');
        } else {
          setComics([]);
        }
      } catch (error) {
        setContextError(error.message);
        setComics([]);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <>
      {loading && <p>Loading in progress...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && comics.length === 0 && <p>No comics found</p>}
      <ComicDisplay />
    </>
  );
};

export default MarvelGallery;
