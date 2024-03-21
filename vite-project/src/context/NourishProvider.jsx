import { useState } from "react";
import { createContext } from "react";
import { handleFetch } from '../utils'

const nourishProvider = ({children}) => {

     const URL = "https://api.edamam.com/api/recipes/v2";
    
    useEffect(() => {
        const doFetch = async () => {
            const [data] = await handleFetch('http://localhost:4000/robots');
            if (data) setRobots(data);
          
        }
        doFetch();
    }, [])


    return (
        <nourishProvider>
            {children}
        </nourishProvider>
    )
}

