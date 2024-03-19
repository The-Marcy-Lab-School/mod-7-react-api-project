import { useState, useEffect } from "react"
import JobsContext from "./JobsContext"
// import fetch function here

const JobsProvider = ({ children }) => {
	const [jobs, setJobs] = useState([])

	// useEffect for fetching goes here

  const contextValues = { products }
  
  return ( 
    <JobsContext.Provider value={contextValues}>
      {children}
    </JobsContext.Provider>
  )
}

export default JobsProvider