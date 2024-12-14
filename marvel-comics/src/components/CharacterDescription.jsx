import { useState } from 'react';

// Define a functional component named CharacterDescription that takes a 'description' prop.
const CharacterDescription = ({ description }) => {
  // Initialize  state variable 'isVisible' with default value 'false' to manage visibility of the description.
  const [isVisible, setIsVisible] = useState(false);

  // Define a function 'toggleDescription' to toggle the visibility state.
  const toggleDescription = () => {
    setIsVisible(prevState => !prevState); // Update the 'isVisible' state to its opposite value.
  };

  // Return JSX to render the component.
  return (
    <div>
      {/* Create a button with a class 'hide-description' that calls 'toggleDescription' when clicked. */}
      <button className="hide-description" onClick={toggleDescription}>
        {/* Conditionally render the button text based on the 'isVisible' state. */}
        {isVisible ? 'Hide Description' : 'Show Description'}
      </button>

      {/* Render the following JSX only if 'isVisible' is 'true'. */}
      {isVisible && (
        <p className="descriptionSize">
          {/* Display the 'description' prop if available; otherwise, display 'No description available'. */}
          {description || 'No description available'}
        </p>
      )}
    </div>
  );
};

// Export the CharacterDescription component for use in other parts of the application.
export default CharacterDescription;
