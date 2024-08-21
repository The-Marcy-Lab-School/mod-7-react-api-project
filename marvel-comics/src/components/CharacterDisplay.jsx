// src/components/CharacterDisplay.jsx
import React, { useState } from 'react';
import { useCharacter } from '../App'; // Import the custom hook to access context

const CharacterDisplay = () => {
  const { characters } = useCharacter(); // Get the characters from context
  const [visibleDescription, setVisibleDescription] = useState(null); // State to track which description is visible

  const toggleDescription = (id) => {
    setVisibleDescription(visibleDescription === id ? null : id);
  };

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
          <button onClick={() => toggleDescription(character.id)}>
            {visibleDescription === character.id ? 'Hide Description' : 'Show Description'}
          </button>
          {visibleDescription === character.id && (
            <p>{character.description || 'No description available'}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CharacterDisplay;
