import React from "react";
import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Layout />
    </Router>
  );
}

export default App;

//<Link to="/files/myfile.pdf" target="_blank" download>Download</Link>
