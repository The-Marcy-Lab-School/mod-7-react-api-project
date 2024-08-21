import React from 'react';
import { useCharacter } from '../App'; // Adjust the import path as needed
import { API_KEY, HASH } from '../config.js';

const STORY_API = `http://gateway.marvel.com/v1/public/characters/{characterId}/stories?ts=1&apikey=${API_KEY}&hash=${HASH}&name=${query}`;

const MarvelStory = () => {

    const fetchCharacter = async () => {
        setLoading(true); // Set loading to true when starting fetch
        try {
          const data = await fetchData(API_URL);
          console.log(data);
          if (data.data.results.length > 0) {
            setCharacter(data.data.results[0]); // Display the first result
            setError(''); // Clear any previous errors
          } else {
            setCharacter(null); // Clear character if no results found
          }
        } catch (error) {
          setError(error.message);
          setCharacter(null); // Ensure character is null on error
        } finally {
          setLoading(false); // Set loading to false after fetch completes
        }
      };
  

    return (
        <form onSubmit={fetchCharacter}>
            <button className="MoreInfo">More Info</button>
        </form>
    );
};