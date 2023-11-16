import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  // const userAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home />}

        // element={userAuthenticated ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
