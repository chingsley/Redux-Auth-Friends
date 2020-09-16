import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage';

import 'react-toastify/dist/ReactToastify.css';
import FriendsPage from './pages/FriendsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer
          autoClose={8000}
          position="top-right"
          className="toast-container"
          toastClassName="dark-toast"
          hideProgressBar
        />
        <NavBar />
        <div className="app-main">
          <Route path="/login" component={AuthPage} />
          <Route path="/friends" component={FriendsPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
