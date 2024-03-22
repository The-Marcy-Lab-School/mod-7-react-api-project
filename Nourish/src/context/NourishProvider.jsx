import { handleFetch } from "../utils";
import NourishContext from "./NourishContext";
import React from 'react'
import { useState} from "react";

const NourishProvider = ({children}) => {

  const [data, setData] = useState([]);

  return (
    <div>
       <NourishContext > 
            { children }
        </NourishContext > 
    </div>
  )
}

export default NourishProvider

