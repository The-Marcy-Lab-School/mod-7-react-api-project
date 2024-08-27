// src/components/CharacterDisplay.jsx
import { useComic } from '../App'; // Import the custom hook to access context



const ComicDisplay = () => {
  const { comics } = useComic(); // Get the characters from context


  return (
    <div className="comic-display">
      {comics.map((comic) => (
        <div className="comic-card" key={comic.id}>
          <h2 className="marvel-comic-title">{comic.name}</h2>
          <img
            className="comic-image"
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} //extension ensures type is jpg,etc avoiding errors
            alt={comic.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ComicDisplay;
