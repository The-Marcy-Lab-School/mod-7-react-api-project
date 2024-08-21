// src/components/CharacterDisplay.jsx
import React from 'react';
import { useCharacter } from '../App'; // Import the custom hook to access context
import CharacterDescription from './CharacterDescription';

const CharacterDisplay = () => {
  const { characters } = useCharacter(); // Get the characters from context

  return (
    <div className="character-display">
      {characters.map((character) => (
        <div className="character-card" key={character.id}>
          <h2>{character.name}</h2>
          <img
            className="character-image"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <CharacterDescription description={character.description} />
        </div>
      ))}
    </div>
  );
};

export default CharacterDisplay;
