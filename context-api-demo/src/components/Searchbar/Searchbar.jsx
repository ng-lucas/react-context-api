import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../../context/AppContext';

export default function Searchbar() {
  const { setSearchQuery, inputValue, setInputValue } = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue, setSearchQuery])

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    // setSearchQuery(e.target.value);
  }

  return (
    <div className="mb-4">
      <input 
        type="email"
        className="form-control" 
        id="search-bar" 
        aria-describedby="search-input" 
        placeholder="Search..."
        value={inputValue}
        onChange={handleSearch}
      />
    </div>
  )
}