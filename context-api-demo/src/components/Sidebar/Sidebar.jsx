import Category from "../Category/Category";
import Company from "../Company/Company";
import Searchbar from "../Searchbar/Searchbar";
import ClearFilter from "../ClearFilter/ClearFilter";

export default function Sidebar() {
  return (
    <div>
      <Searchbar />
      <Category />
      <hr />
      <Company />
      <hr />
      <ClearFilter />
    </div>
  )
}