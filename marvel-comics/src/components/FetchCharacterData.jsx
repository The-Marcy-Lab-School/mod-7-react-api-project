useEffect(() => {
  const fetchCharacters = async () => {
    setLoading(true); // Set loading to true when starting fetch
    try {
      const data = await fetchData(API_URL);
      if (data.data.results.length > 0) {
        setCharacters(data.data.results); // Set the array of characters
        setError(''); // Clear any previous errors
      } else {
        setCharacters([]); // Clear characters if no results found
      }
    } catch (error) {
      setError(error.message);
      setCharacters([]); // Ensure characters is an empty array on error
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  fetchCharacters();
}, [query]); // Fetch new data when query changes
