import "./App.css";
import Navbare from "./components/Navbare";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbare />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/service">
            <Service />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
