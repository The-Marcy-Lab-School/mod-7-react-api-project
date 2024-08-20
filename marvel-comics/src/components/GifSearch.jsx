import { useState } from 'react';

function GifSearch({ setQuery }) {
    //perks of controlled form is that it can "hold" onto values/inputs to be used later
    const [gifSearcher, setGifSearcher] = useState('')
    //this state holds the value 
    const onChangedInput = (e) => {

        //called function because thats what state does
        setGifSearcher(e.target.value)
    }
    //on submission of form
    const onSubmitForm = (e) => {
        e.preventDefault() //prevents reloading
        setQuery(gifSearcher) // pass down setQuery from parent app.jsx. updating setQuery to be gifSearcher. When searching; query is empty but searcher is not so we update query with searcher input. 
    }
    return (
        <form onSubmit={onSubmitForm}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input onChange={onChangedInput} value={gifSearcher} type="text" className="form-control" id="searchInput" />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
