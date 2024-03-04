import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Category() {
  const { categories, selectedCategory, setSelectedCategory } = useContext(AppContext);

  const handleSelect = (e) => {
    const selected = e.target.value;
    console.log(selected);
    setSelectedCategory(selected);
  }
  return (
    <div>
      <h4>Category</h4>
      <div className="category-items">
        {categories && categories.map((category, index) => (
          <div className="form-check" key={index}>
            <input 
              className="form-check-input" 
              type="radio" 
              name="categoryGroup" 
              id={`category-${index}`} 
              value={category} 
              onChange={handleSelect}
              checked={selectedCategory === category}
            />
            <label className="form-check-label" htmlFor={`category-${index}`}>
              { category }
            </label>
          </div>
        ))}
        
      </div>
    </div>
  )
}