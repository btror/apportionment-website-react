import "./App.css";
import "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Banner />
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
