import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login/efront">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default App;
