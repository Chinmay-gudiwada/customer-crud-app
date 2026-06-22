import './Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Customer Data</h1>

      <Link to="/fetchData">
        <button className="btn">Fetch Data</button>
      </Link>

      &nbsp;

      <Link to="/addData">
        <button className="btn">Add Data</button>
      </Link>
    </div>
  );
}

export default Home;