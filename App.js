import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = props => (
  <Router>
    <Route path="/" exact component={Dashboard} />
  </Router>
);

export default App;
