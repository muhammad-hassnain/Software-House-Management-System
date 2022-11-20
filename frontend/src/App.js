import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Software House Management System</h1>
      <p>Click here to go to signup page</p>
      <button>
        <Link to={`signup`}>Sign Up</Link>
      </button>
    </div>
  );
}

export default App;
