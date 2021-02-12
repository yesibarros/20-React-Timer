import * as React from "react";
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <img src="/react-logo.png" alt="react logo" />
    <nav>
      <div className="navigation-buttons">
      <Link to={`/timer`}>Timer</Link> 
      </div>
      <div className="navigation-buttons">
      <Link to={`/countdown`}>Counter</Link> 
      </div>
    </nav>
  </header>
);
