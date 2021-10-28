import React from 'react'

const Search = (props) => {
    const {searchTerm, setSearchTerm} = props;
    
    return (
        <section className="search">
            <h1 className="search__heading">Search Movies</h1>
            <input className="search__input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Eg: Batman" autoFocus/>
        </section>
    )
    
}

export default Search
