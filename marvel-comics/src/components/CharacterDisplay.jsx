// src/components/CharacterDisplay.jsx
import { useCharacter } from '../App'; // Import the custom hook to access context
import CharacterDescription from './CharacterDescription';
import { Link } from 'react-router-dom';




const CharacterDisplay = () => {
  const { characters } = useCharacter(); // Get the characters from context


  return (
    <div className="character-display">
      {characters.map((character) => (
        <div className="character-card" key={character.id}>
          <h2 className="marvel-character-title">{character.name}</h2>
          <Link to={`/events/${character.id}`}>
            <img
              className="character-image"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`} //extension ensures type is jpg,etc avoiding errors
              alt={character.name}
            />
          </Link>
          <CharacterDescription description={character.description} />
        </div>
      ))}
    </div>
  );
};

export default CharacterDisplay;
