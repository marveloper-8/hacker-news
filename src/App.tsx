// packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// style
import "./App.scss";
// pages -- home
import Home from "./pages/home";
import BadRequest from "./pages/bad-request";

const Routing = () => {
  return (
    <Switch>
      {/* Home */}
      <Route exact path="/" component={Home} />
      {/* Extras */}
      <BadRequest />
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routing />
      </div>
    </Router>
  );
};

export default App;
