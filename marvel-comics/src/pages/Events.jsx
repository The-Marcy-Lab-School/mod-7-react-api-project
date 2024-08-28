import '../App.css';
import { useState, useEffect } from 'react';
import { API_KEY, HASH } from '../config.js';
import fetchData from '../components/Fetch.jsx';
import EventDisplay from '../components/EventDisplay.jsx'
import { useEvent } from '../App';
import { useParams } from 'react-router-dom';



const Events = () => {
  const [error, setError] = useState('');
  const { events, setEvents, setError: setContextError } = useEvent(); // through context grab EventDisplay
  const { characterId } = useParams() //mekhi

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        // Fetch comics for the selected character
        const eventsURL = `http://gateway.marvel.com/v1/public/characters/${characterId}/events?ts=1&apikey=${API_KEY}&hash=${HASH}`;
        const eventsResponse = await fetchData(eventsURL);

        console.log(eventsResponse)
        const eventsData = eventsResponse.data.results;

        console.log(eventsData.length > 0)

        if (eventsData.length > 0) {
          setEvents(eventsData);
          setContextError('');
        } else {
          setEvents([]);
        }
      } catch (error) {
        setContextError(error.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this effect runs once on component mount


  return (
    <>
      <p>{characterId}</p>
      <EventDisplay />
    </>
  );
};

export default Events;
