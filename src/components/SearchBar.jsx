import { useState } from "react"

function SearchBar(props) {

  const handleSearch = (e) => {
    props.setQuery(e.target.value)
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleSearch} value={props.query}/>

    </div>
  )
}

export default SearchBar