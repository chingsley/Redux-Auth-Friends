import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="app-main">
          <Route path="/login" component={AuthPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
