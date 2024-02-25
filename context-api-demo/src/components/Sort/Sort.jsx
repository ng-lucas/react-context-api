export default function Sort() {
  return (
    <>
      <select className="form-select" style={{width: '220px'}} aria-label="Sort by">
        <option selected>Sort by</option>
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