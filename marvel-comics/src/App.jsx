import { useState, useEffect, createContext, useContext } from 'react';
//////
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
///////
import About from './pages/About';
import NavBar from './components/NavBar';
import MarvelGallery from './pages/MarvelGallery'
import './App.css';
///////
import MarvelSearch from './components/MarvelSearch'; // Ensure this component is correctly imported
import Events from './pages/Events'

// Create the context
const CharacterContext = createContext();
const ComicContext = createContext();
const EventContext = createContext();

const App = () => {
  const [events, setEvents] = useState([]);
  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]); // Change to an array to hold multiple characters
  const [error, setError] = useState('');

  return (
    <BrowserRouter>
      <CharacterContext.Provider value={{ characters, error, setCharacters, setError }}>

        <ComicContext.Provider value={{ comics, error, setComics, setError }}>
          <EventContext.Provider value={{ events, error, setEvents, setError }}>
            {/* <EventContext.Provider value={{ events, error, setEvents, setError }}> */}
            <div className="main-content">
              <NavBar />
              {/* Using a nav bar in react */}
              {/* "/" is home page */}
              <Routes >
                <Route path="/pages/about" element={<About />}> </Route>
                <Route path="/" element={<MarvelSearch />}> </Route>
                {/* <Route path="/" element={<EventDisplay />}> </Route> */}
                <Route path="/events/:characterId" element={<Events />} ></Route>
                <Route path="/pages/MarvelGallery" element={<MarvelGallery />}> </Route>
              </Routes>
            </div>
            {/* </EventContext.Provider> */}
          </EventContext.Provider>
        </ComicContext.Provider>

      </CharacterContext.Provider>
    </BrowserRouter>
  );
};

// Create a custom hook to use the CharacterContext
const useCharacter = () => useContext(CharacterContext);
const useComic = () => useContext(ComicContext)
const useEvent = () => useContext(EventContext)

export default App;
export { useCharacter }
export { useComic }
export { useEvent }