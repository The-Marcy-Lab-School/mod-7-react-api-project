
 const URL = "https://api.edamam.com/api/recipes/v2";




useEffect(() => {
    const doFetch = async () => {
        const [data] = await handleFetch('http://localhost:4000/robots');
        if (data) setRobots(data);
      
    }
    doFetch();
}, [])