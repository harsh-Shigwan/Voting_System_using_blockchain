import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link  to="/">
              Home
            </Link>
          </li>
          <li>
            <Link  to="/candidate">
              Candidate
            </Link>
          </li>
          <li>
            <Link  to="/voter">
              Voter
            </Link>
          </li>
          <li>
            <Link  to="/election-commsioion">
              Election Commmision
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
