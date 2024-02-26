import { useState } from "react";

export default function Sort({ setSortOption }) {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    setSortOption(newValue);
  };

  return (
    <>
      <select className="form-select" style={{width: '220px'}} aria-label="Sort by" value={selectedOption} onChange={handleChange}>
        <option value="default">Sort by</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="company">Company</option>
        <option value="category">Category</option>
        <option value='low-to-high'>Low to high</option>
        <option value='high-to-low'>High to low</option>
      </select>
    </>
  )
}