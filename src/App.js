import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import AllRoutes from './AllRoutes'
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
          <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
