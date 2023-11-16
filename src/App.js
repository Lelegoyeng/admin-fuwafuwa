// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // Import useSelector
// import Home from './pages/Home';
// import Login from './pages/Login';

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/home"
//           element={<Home />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
export default App;

