import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function ClearFilter() {
  const { clearData } = useContext(AppContext);

  return (
    <div>
      <button className="btn btn-danger px-5" onClick={clearData}>Clear</button>
    </div>
  )
}