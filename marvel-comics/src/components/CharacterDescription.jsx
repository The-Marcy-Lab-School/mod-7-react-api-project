// src/components/CharacterDescription.jsx
import React, { useState } from 'react';

const CharacterDescription = ({ description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className="hide-descritption" onClick={toggleDescription}>
        {isVisible ? 'Hide Description' : 'Show Description'}
      </button>
      {isVisible && (
        <p className="descriptionSize">
          {description || 'No description available'}
        </p>
      )}
    </div>
  );
};

export default CharacterDescription;
