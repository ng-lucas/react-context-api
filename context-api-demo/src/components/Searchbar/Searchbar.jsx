export default function Searchbar() {
  return (
    <div className="mb-4">
      {/* <label htmlFor="search-input" className="form-label">Email address</label> */}
      <input type="email" className="form-control" id="search-bar" aria-describedby="search-input" placeholder="Search..." />
    </div>
  )
}