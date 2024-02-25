import Category from "../Category/Category";
import Company from "../Company/Company";
import Searchbar from "../Searchbar/Searchbar";

export default function Sidebar() {
  return (
    <div>
      <Searchbar />
      <Category />
      <hr />
      <Company />
    </div>
  )
}