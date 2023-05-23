import "./styles.css";
// import LoginForm from "./components/LoginRoute/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeRoute from "./components/HomeRoute/HomeRoute";
import DetailsRoute from "./components/DetailsRoute/DetailsRoute";
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/details" component={DetailsRoute} />
    </Switch>
  </Router>
);
export default App;
